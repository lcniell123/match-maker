import {fetchFriendData} from "./Friends";
import {Fragment, useEffect, useState} from "react";
import {Profile, RelationshipStatus} from "@/API";
import {generateClient} from "aws-amplify/api";
import {getCurrentUser} from "aws-amplify/auth";
import {Combobox, Dialog, Transition} from "@headlessui/react";
import {CheckIcon, ChevronUpDownIcon} from "@heroicons/react/20/solid";
import {getGroups, getProfile, listGroups, listMemberships, listProfiles} from "@/graphql/queries";
import * as mutations from "@/graphql/mutations";
import {useRouter} from "next/navigation";

export default function Groups() {
    const router = useRouter();
    const [userId, setUserId] = useState("");
    const [userFriends, setUserFriends] = useState<Profile[]>([]);
    const [otherUsers, setOtherUsers] = useState<Profile[]>([]);
    const client = generateClient();
    let [isOpen, setIsOpen] = useState(false);
    const [friendQuery, setFriendQuery] = useState("");
    const [userQuery, setUserQuery] = useState("");
    const [selectedFriends, setSelectedFriends] = useState([]);
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [userGroups, setUserGroups] = useState<any[]>([]);


    useEffect(() => {
        async function fetchData() {
            try {
                const {userId} = await getCurrentUser();
                setUserId(userId);

                // Fetch memberships
                const membershipData = await client.graphql({
                    query: listMemberships,
                    variables: {
                        filter: {
                            membershipsUserId: {
                                eq: userId,
                            },
                        },
                    },
                });

                const memberships = membershipData.data.listMemberships.items;
                const groupIds = memberships
                    .map((membership) => membership.membershipsGroupId)
                    .filter((groupId): groupId is string => typeof groupId === "string");

                const groupDetailsPromises = groupIds.map((groupId) =>
                    client.graphql({
                        query: getGroups,
                        variables: {
                            id: groupId,
                        },
                    })
                );

                const groupDetailsResponses = await Promise.all(groupDetailsPromises);

                // Extract the group details from the responses
                const groups = groupDetailsResponses.map((response) => response.data?.getGroups);
                setUserGroups(groups);
            } catch (err) {
                console.error(err);
            }
        }

        fetchData();
    }, []);

    useEffect(() => {
        fetchFriendData(userId, client).then((friendsInfo) => {
            setUserFriends(friendsInfo);
        });
    }, [userId]);

    useEffect(() => {
        async function fetchOtherUsers() {
            try {
                const profilesData = await client.graphql({
                    query: listProfiles,
                });

                const profiles = profilesData.data.listProfiles.items;
                const filteredUsers = profiles.filter((profile) => profile.id !== userId && !userFriends.some((friend) => friend.id === profile.id));
                setOtherUsers(filteredUsers);
            } catch (error) {
                console.error("Error fetching other users:", error);
            }
        }

        fetchOtherUsers();
    }, [userId, userFriends]);

    const filteredUserFriends =
        friendQuery === ""
            ? userFriends
            : userFriends.filter((friend) => {
                return friend.name.toLowerCase().includes(friendQuery.toLowerCase());
            });

    const filteredOtherUsers =
        userQuery === ""
            ? otherUsers
            : otherUsers.filter((otherUser) => {
                return otherUser.name.toLowerCase().includes(userQuery.toLowerCase());
            });

    function closeModal() {
        setSelectedFriends([]);
        setSelectedUsers([]);
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    async function handleAddGroup() {
        const groupName = (document.getElementById('group-name') as HTMLInputElement).value;
        const groupDescription = (document.getElementById('description') as HTMLInputElement).value ?? '';
        const groupImage = '';
        const allSelectedMembers: Profile[] = [...selectedFriends, ...selectedUsers];

        const input = {
            name: groupName,
            description: groupDescription,
            groupsCreatedById: userId,
            image: groupImage,
        };

        try {
            // Create the group
            const groupResult = await client.graphql({
                query: mutations.createGroups,
                variables: {
                    input: input,
                },
            });

            const group = groupResult.data.createGroups;
            const groupId = group.id;

            const currentUserProfile = await client.graphql({
                query: getProfile,
                variables: {
                    id: userId,
                },
            });

            // Create memberships for the selected members and include current user
            const currentUser = currentUserProfile.data.getProfile;
            allSelectedMembers.push(currentUser as Profile);
            const membershipsInput = allSelectedMembers.map((member) => ({
                status: RelationshipStatus.GROUP,
                membershipsUserId: member.id,
                membershipsGroupId: groupId,
            }));

            await Promise.all(
                membershipsInput.map((membershipInput) =>
                    client.graphql({
                        query: mutations.createMemberships,
                        variables: {
                            input: membershipInput,
                        },
                    })
                )
            );

            console.log('Group created successfully:', groupResult.data.createGroups);
            alert('You have successfully created group');
            closeModal();
            router.refresh();
        } catch (error) {
            console.error('Error creating group:', error);
            alert('Error creating group!');
        }
    }

    console.log(userGroups);

    return (
        <>
            <div className="relative">
                <div className="flex flex-col">
                    <div className="relative flex">
                        <button
                            type="button"
                            onClick={openModal}
                            className="absolute top-2 right-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                        >
                            Add Group
                        </button>

                        <div className="mt-10 mb-6 flex flex-wrap">
                            {userGroups.length === 0 ? (
                                <p className="text-center">You do not belong to any groups yet.</p>
                            ) : (
                                userGroups.map((group) => (
                                    <div
                                        key={group.id}
                                        className="mx-2 mb-4 max-w-sm bg-white border border-gray-200 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700"
                                    >
                                        <img
                                            className="h-48 rounded-t-3xl"
                                            src="/placeholder_cover.jpg"
                                            alt=""
                                        />
                                        <div className="p-5">
                                            <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                                                {group.name}
                                            </h5>
                                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                                {group.description}
                                            </p>
                                            <a
                                                href="#"
                                                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                            >
                                                View
                                                <svg
                                                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 14 10"
                                                >
                                                    <path
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M1 5h12m0 0L9 1m4 4L9 9"
                                                    />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25"/>
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel
                                    className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        className="flex items-center justify-between p-4 md:p-5 border-b dark:border-gray-600">
                                        <p className="text-lg font-semibold text-gray-900 dark:text-white">
                                            Create New Group
                                        </p>
                                        <button
                                            type="button"
                                            onClick={closeModal}
                                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                        >
                                            <svg
                                                className="w-3 h-3"
                                                aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 14 14"
                                            >
                                                <path
                                                    stroke="currentColor"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                                />
                                            </svg>
                                            <span className="sr-only">Close dialog</span>
                                        </button>
                                    </Dialog.Title>

                                    <form className="max-w-sm mx-auto p-4 md:p-5">
                                        <div className="mb-5 mt-5">
                                            <label
                                                htmlFor="group-name"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Group name
                                            </label>
                                            <input
                                                id="group-name"
                                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                                required
                                            />
                                        </div>

                                        <div className="mb-5">
                                            <label
                                                htmlFor="description"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Description
                                            </label>
                                            <input
                                                id="description"
                                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                            />
                                        </div>

                                        <div className="mb-5">
                                            <label
                                                htmlFor="game"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Select game
                                            </label>
                                            <select
                                                id="game"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            >
                                                <option></option>
                                                <option>Counter Strike</option>
                                                <option>Call of Duty</option>
                                                <option>Fortnite</option>
                                            </select>
                                        </div>

                                        <div className="mb-5">
                                            <label
                                                htmlFor="members"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Select members
                                            </label>
                                            <input
                                                id="members"
                                                className="mb-5 shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                                value={
                                                    selectedFriends
                                                        ? selectedFriends
                                                            .map((friend: { name: any }) => friend.name)
                                                            .concat(
                                                                selectedUsers.map((user: { name: any }) => user.name)
                                                            )
                                                            .join(", ")
                                                        : ""
                                                }
                                                readOnly
                                            />

                                            <div className="grid gap-4 mb-4 grid-cols-2">
                                                <div className="col-span-1">
                                                    <label
                                                        htmlFor="members-friends"
                                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                    >
                                                        From friends
                                                    </label>
                                                    <Combobox
                                                        value={selectedFriends}
                                                        onChange={(value: any) => setSelectedFriends(value)}
                                                        multiple
                                                    >
                                                        <div className="relative mt-1">
                                                            <div
                                                                className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                                                                <Combobox.Input
                                                                    placeholder="Search friends"
                                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                    onChange={(event) => setFriendQuery(event.target.value)}
                                                                />
                                                                <Combobox.Button
                                                                    className="absolute inset-y-0 right-0 flex items-center pr-2">
                                                                    <ChevronUpDownIcon
                                                                        className="h-5 w-5 text-gray-400"
                                                                        aria-hidden="true"
                                                                    />
                                                                </Combobox.Button>
                                                            </div>
                                                            <Transition
                                                                as={Fragment}
                                                                leave="transition ease-in duration-100"
                                                                leaveFrom="opacity-100"
                                                                leaveTo="opacity-0"
                                                                afterLeave={() => setFriendQuery("")}
                                                            >
                                                                <Combobox.Options
                                                                    className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                                                    {filteredUserFriends.length === 0 &&
                                                                    friendQuery !== "" ? (
                                                                        <div
                                                                            className="relative cursor-default select-none px-4 py-2 text-gray-700">
                                                                            Nothing found.
                                                                        </div>
                                                                    ) : (
                                                                        filteredUserFriends.map((friend) => (
                                                                            <Combobox.Option
                                                                                key={friend.id}
                                                                                className={({active}) =>
                                                                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                                                        active
                                                                                            ? "bg-teal-600 text-white"
                                                                                            : "text-gray-900"
                                                                                    }`
                                                                                }
                                                                                value={friend}
                                                                            >
                                                                                {({selected, active}) => (
                                                                                    <>
                                        <span
                                            className={`block truncate ${
                                                selected
                                                    ? "font-medium"
                                                    : "font-normal"
                                            }`}
                                        >
                                          {friend.name}
                                        </span>
                                                                                        {selected ? (
                                                                                            <span
                                                                                                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                                                                                    active
                                                                                                        ? "text-white"
                                                                                                        : "text-teal-600"
                                                                                                }`}
                                                                                            >
                                            <CheckIcon
                                                className="h-5 w-5"
                                                aria-hidden="true"
                                            />
                                          </span>
                                                                                        ) : null}
                                                                                    </>
                                                                                )}
                                                                            </Combobox.Option>
                                                                        ))
                                                                    )}
                                                                </Combobox.Options>
                                                            </Transition>
                                                        </div>
                                                    </Combobox>
                                                </div>


                                                <div className="col-span-1">
                                                    <label
                                                        htmlFor="members-users"
                                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                    >
                                                        From users
                                                    </label>
                                                    <Combobox
                                                        value={selectedUsers}
                                                        onChange={(value: any) => setSelectedUsers(value)}
                                                        multiple
                                                    >
                                                        <div className="relative mt-1">
                                                            <div
                                                                className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                                                                <Combobox.Input
                                                                    placeholder="Search users"
                                                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                    onChange={(event) => setUserQuery(event.target.value)}
                                                                />
                                                                <Combobox.Button
                                                                    className="absolute inset-y-0 right-0 flex items-center pr-2">
                                                                    <ChevronUpDownIcon
                                                                        className="h-5 w-5 text-gray-400"
                                                                        aria-hidden="true"
                                                                    />
                                                                </Combobox.Button>
                                                            </div>
                                                            <Transition
                                                                as={Fragment}
                                                                leave="transition ease-in duration-100"
                                                                leaveFrom="opacity-100"
                                                                leaveTo="opacity-0"
                                                                afterLeave={() => setUserQuery("")}
                                                            >
                                                                <Combobox.Options
                                                                    className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                                                                    {filteredOtherUsers.length === 0 &&
                                                                    userQuery !== "" ? (
                                                                        <div
                                                                            className="relative cursor-default select-none px-4 py-2 text-gray-700">
                                                                            Nothing found.
                                                                        </div>
                                                                    ) : (
                                                                        filteredOtherUsers.map((otherUser) => (
                                                                            <Combobox.Option
                                                                                key={otherUser.id}
                                                                                className={({active}) =>
                                                                                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                                                        active
                                                                                            ? "bg-teal-600 text-white"
                                                                                            : "text-gray-900"
                                                                                    }`
                                                                                }
                                                                                value={otherUser}
                                                                            >
                                                                                {({selected, active}) => (
                                                                                    <>
                                        <span
                                            className={`block truncate ${
                                                selected
                                                    ? "font-medium"
                                                    : "font-normal"
                                            }`}
                                        >
                                          {otherUser.name}
                                        </span>
                                                                                        {selected ? (
                                                                                            <span
                                                                                                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                                                                                    active
                                                                                                        ? "text-white"
                                                                                                        : "text-teal-600"
                                                                                                }`}
                                                                                            >
                                            <CheckIcon
                                                className="h-5 w-5"
                                                aria-hidden="true"
                                            />
                                          </span>
                                                                                        ) : null}
                                                                                    </>
                                                                                )}
                                                                            </Combobox.Option>
                                                                        ))
                                                                    )}
                                                                </Combobox.Options>
                                                            </Transition>
                                                        </div>
                                                    </Combobox>

                                                </div>

                                            </div>
                                        </div>

                                        <div className="mb-5">
                                            <label
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                htmlFor="group-photo"
                                            >
                                                Upload image
                                            </label>
                                            <input
                                                className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                                id="group-photo"
                                                type="file"
                                                accept="image/*"
                                            />
                                        </div>

                                        <button
                                            onClick={handleAddGroup}
                                            type="button"
                                            className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                            <svg
                                                className="me-1 -ms-1 w-5 h-5"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                                    clipRule="evenodd"
                                                ></path>
                                            </svg>
                                            Add new group
                                        </button>
                                    </form>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}
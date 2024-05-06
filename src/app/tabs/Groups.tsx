import {fetchFriendData} from "./Friends";
import {Fragment, useEffect, useState} from "react";
import {Profile} from "@/API";
import {generateClient} from "aws-amplify/api";
import {getCurrentUser} from "aws-amplify/auth";
import {Combobox, Dialog, Transition} from "@headlessui/react";
import {CheckIcon, ChevronUpDownIcon} from "@heroicons/react/20/solid";
import {listProfiles} from "@/graphql/queries";
import * as mutations from "@/graphql/mutations";

export default function Groups() {
    const [userId, setUserId] = useState("");
    const [userFriends, setUserFriends] = useState<Profile[]>([]);
    const [otherUsers, setOtherUsers] = useState<Profile[]>([]);
    const client = generateClient();
    let [isOpen, setIsOpen] = useState(false);
    const [friendQuery, setFriendQuery] = useState("");
    const [userQuery, setUserQuery] = useState("");
    const [selectedFriends, setSelectedFriends] = useState([]);
    const [selectedUsers, setSelectedUsers] = useState([]);

    useEffect(() => {
        async function currentAuthenticatedUser() {
            try {
                const {userId} = await getCurrentUser();
                setUserId(userId);
            } catch (err) {
                console.log(err);
            }
        }

        currentAuthenticatedUser();
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
    const groupName = (document.getElementById("group-name") as HTMLInputElement).value;
    const groupDescription = (document.getElementById("description") as HTMLInputElement).value ?? "";
    const groupImage = "";
    const allSelectedMembers = [...selectedFriends, ...selectedUsers];

    const input = {
        name: groupName,
        description: groupDescription,
        groupsCreatedById: userId,
    };

    try {
        const result = await client.graphql({
            query: mutations.createGroups,
            variables: {
                input: input,
            }
        });
        const group = result.data.createGroups;
        const groupId = group.id;

        console.log("Group created successfully:", result.data.createGroups);
        alert("success");
        closeModal();
    } catch (error) {
        console.error("Error creating group:", error);
        alert("error");
    }
}

    return (
        <>
            <div className="mb-6 flex flex-wrap">
                <button
                    type="button"
                    onClick={openModal}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                    Add Group
                </button>
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
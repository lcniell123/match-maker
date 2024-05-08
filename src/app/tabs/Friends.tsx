import React, { Fragment, useState, useEffect } from "react";
import { getCurrentUser } from "aws-amplify/auth";
import { generateClient } from "aws-amplify/api";
import * as queries from "@/graphql/queries";
import { FriendRequestStatus, Profile, RelationshipStatus } from "@/API";
import Alert from "@/app/components/Alert";
import { Combobox, Dialog, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/16/solid";
import FriendshipsCreateForm from "@/ui-components/FriendshipsCreateForm";
import FriendRequestCreateForm from "@/ui-components/FriendRequestCreateForm";

export const fetchFriendData = async (userId: string, client: any) => {
  try {
    const result = await client.graphql({
      query: queries.listFriendships,
      variables: {
        filter: {
          or: [
            { friendshipsFirstUserId: { eq: userId } },
            { friendshipsSecondUserId: { eq: userId } },
          ],
          friendshipStatus: { eq: RelationshipStatus.FRIEND },
        },
      },
    });

    const friendships = result.data.listFriendships.items;
    const friendIds = friendships.map(
      (friendship: {
        friendshipsFirstUserId: string | null;
        friendshipsSecondUserId: string | null;
      }) => {
        return friendship.friendshipsFirstUserId === userId
          ? friendship.friendshipsSecondUserId
          : friendship.friendshipsFirstUserId;
      }
    );

    const validFriendIds = friendIds.filter(
      (id: any) => typeof id === "string"
    ) as string[];
    const friendsProfilesPromises = validFriendIds.map((friendId) => {
      return client.graphql({
        query: queries.getProfile,
        variables: { id: friendId },
      });
    });

    const friendsProfiles = await Promise.all(friendsProfilesPromises);
    const friendsInfo = friendsProfiles
      .map((profile) => profile.data.getProfile)
      .filter((profile) => profile !== null && profile !== undefined);

    return friendsInfo as Profile[];
  } catch (error) {
    console.error("Error fetching user friends profiles:", error);
    return [];
  }
};

export default function Friends() {
  const [otherUsers, setOtherUsers] = useState<Profile[]>([]);

  const [userId, setUserId] = useState("");
  const [userFriends, setUserFriends] = useState<Profile[]>([]);
  let [isOpen, setIsOpen] = useState(false);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [userQuery, setUserQuery] = useState("");

  const client = generateClient();
  const filteredOtherUsers =
    userQuery === ""
      ? otherUsers
      : otherUsers.filter((otherUser) => {
          return otherUser.name.toLowerCase().includes(userQuery.toLowerCase());
        });
  useEffect(() => {
    async function currentAuthenticatedUser() {
      try {
        const { userId } = await getCurrentUser();
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

  const handleDropdownToggle = (index: any) => {
    const dropdown = document.getElementById(`dropdown-${index}`);
    dropdown?.classList.toggle("hidden");
  };

  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }
  useEffect(() => {
    async function fetchOtherUsers() {
      try {
        const profilesData = await client.graphql({
          query: queries.listProfiles,
        });

        const profiles = profilesData.data.listProfiles.items;
        const filteredUsers = profiles.filter(
          (profile) =>
            profile.id !== userId &&
            !userFriends.some((friend) => friend.id === profile.id)
        );
        setOtherUsers(filteredUsers);
      } catch (error) {
        console.error("Error fetching other users:", error);
      }
    }

    fetchOtherUsers();
  }, [userId, userFriends]);

  return (
    <>
      <div className="relative">
        <div className="flex flex-col">
          <div className="relative flex">
            <button
              onClick={openModal}
              type="button"
              className="absolute top-2 right-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Add Friend
            </button>

            <div className="mb-6 flex flex-wrap">
              {userFriends.map((friend: any, index) => (
                <div
                  className="w-full max-w-sm border border-gray-200 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700 mx-2 mb-4"
                  key={friend.id}
                >
                  <div className="flex justify-end px-4 pt-4">
                    <button
                      onClick={() => handleDropdownToggle(index)}
                      className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                      type="button"
                    >
                      <span className="sr-only">Open dropdown</span>
                      <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 16 3"
                      >
                        <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                      </svg>
                    </button>
                    <div
                      id={`dropdown-${index}`}
                      className="mt-10 z-10 hidden absolute text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                    >
                      <ul className="py-2" aria-labelledby="dropdownButton">
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                          >
                            View Profile
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                          >
                            Remove Match
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-col items-center pb-10">
                    <img
                      className="w-24 h-24 mb-3 rounded-full shadow-lg"
                      src={friend.photo ?? "/placeholder_avatar.jpg"}
                      alt="Match friend picture"
                    />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                      {friend.name}
                    </h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {friend.bio}
                    </span>
                    <div className="flex mt-4 md:mt-6">
                      <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Add to Group
                      </button>
                      <a
                        href="#"
                        className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                      >
                        Message
                      </a>
                    </div>
                  </div>
                </div>
              ))}
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
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title className="flex items-center justify-between p-4 md:p-5 border-b dark:border-gray-600">
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">
                    Add Friend
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
                <br />
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
                    <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                      <Combobox.Input
                        placeholder="Search users"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onChange={(event) => setUserQuery(event.target.value)}
                      />
                      <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
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
                      <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                        {filteredOtherUsers.length === 0 && userQuery !== "" ? (
                          <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                            Nothing found.
                          </div>
                        ) : (
                          filteredOtherUsers.map((otherUser) => (
                            <Combobox.Option
                              key={otherUser.id}
                              className={({ active }) =>
                                `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                  active
                                    ? "bg-teal-600 text-white"
                                    : "text-gray-900"
                                }`
                              }
                              value={otherUser}
                            >
                              {({ selected, active }) => (
                                <>
                                  <span
                                    className={`block truncate ${
                                      selected ? "font-medium" : "font-normal"
                                    }`}
                                  >
                                    {otherUser.name}
                                  </span>
                                  {selected ? (
                                    <span
                                      className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                        active ? "text-white" : "text-teal-600"
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

                <br />
                <button
                  //onClick={()=>console.log("tret")}
                  type="button"
                  className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
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
                  Invite Friends
                </button>
              </Dialog.Panel>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

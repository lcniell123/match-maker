"use client";
import React, { useEffect, useState } from "react";
import "@aws-amplify/ui-react/styles.css";
import { getCurrentUser } from "aws-amplify/auth";
import { generateClient } from "aws-amplify/api";
import * as queries from "@/graphql/queries";
import { createFriendships } from "@/graphql/mutations";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { BellIcon } from "@heroicons/react/24/outline";
import { useAuthenticator } from "@aws-amplify/ui-react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/app/components/Container";
import * as mutations from "@/graphql/mutations";
import { RelationshipStatus } from "@/API";
import { FriendRequestStatus } from "@/models";

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export const Navigation = () => {
  const { signOut } = useAuthenticator();
  const [friendRequests, setFriendRequests] = useState<any[]>([]);
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");

  const client = generateClient();
  const user = getCurrentUser();
  user.then((item) => {
    setUserName(item.username);
  });
  //console.log("thisisuser:", user.then((item)=>{setUserName(item.username)}));
  useEffect(() => {
    async function fetchFriendRequests() {
      try {
        const { userId } = await getCurrentUser();
        setUserId(userId);
        const response = await client.graphql({
          query: queries.listFriendships,
          variables: {
            filter: {
              id: {
                eq: userId,
              },
              friendshipStatus: {
                eq: RelationshipStatus.FRIEND,
              },
            },
          },
        });
        const pendingRequests = response.data.listFriendships.items;
        setFriendRequests(pendingRequests);
      } catch (error) {
        console.error("Error fetching friend requests:", error);
      }
    }

    fetchFriendRequests();
  }, []);

  async function acceptFriendRequest(id: any, friendId: any) {
    try {
      await client.graphql({
        query: mutations.updateFriendships,
        variables: {
          input: {
            id: id,
            friendshipStatus: RelationshipStatus.FRIEND,
          },
        },
      });
      await client.graphql({
        query: mutations.createFriendships,
        variables: {
          input: {
            // Had to comment out section, need to revisit in case we need more data
            // id: Math.random().toString(36).substring(2, length),
            // userId: userId,
            id: friendId,
            friendshipStatus: RelationshipStatus.FRIEND,
          },
        },
      });
    } catch (error) {
      console.error("Error accepting friend request:", error);
    }
  }

  function rejectFriendRequest(friendId: any) {}

  return (
    <div className="sticky top-0 backdrop-blur-xl z-50">
      <Container className="flex justify-between items-center py-2">
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={100} height={100} />
        </Link>

        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <Menu as="div" className="relative ml-3" id="notifications">
            <div>
              <Menu.Button className="relative rounded-full p-1 text-gray-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
                <BellIcon className="h-6 w-6" aria-hidden="true" />
                {friendRequests.length > 0 && (
                  <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-blue-500 border-2 border-white rounded-full -top-2 -end-2">
                    {friendRequests.length}
                  </div>
                )}
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                {friendRequests.map((request: any) => (
                  <Menu.Item key={request.id}>
                    {() => (
                      <div className="flex-auto px-4 py-2 hover:bg-gray-100">
                        <p className="text-sm text-gray-600">
                          {request.userId} sent a friend request
                        </p>
                        <div className="space-x-2">
                          <button
                            onClick={() =>
                              acceptFriendRequest(request.id, request.userId)
                            }
                            className={classNames(
                              "px-2 py-1 text-sm font-semibold rounded-md focus:outline-none",
                              "text-white bg-green-500 hover:bg-green-600"
                            )}
                          >
                            Accept
                          </button>
                          <button
                            onClick={() => rejectFriendRequest(request.userId)}
                            className={classNames(
                              "px-2 py-1 text-sm font-semibold rounded-md focus:outline-none",
                              "text-white bg-red-500 hover:bg-red-600"
                            )}
                          >
                            Reject
                          </button>
                        </div>
                      </div>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>

          <Menu as="div" className="relative ml-3">
            <div>
              <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Open user menu</span>
                <img
                  className="h-8 w-8 rounded-full"
                  src={`https://mm-bucket191228-dev.s3.us-east-2.amazonaws.com/public/${userName}-profile-pic.jpg`}
                  alt=""
                />
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/profile"
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      )}
                    >
                      Your Profile
                    </a>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={signOut}
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      )}
                    >
                      Sign out
                    </button>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </Container>
    </div>
  );
};

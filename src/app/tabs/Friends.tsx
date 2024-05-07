import React, {useState, useEffect} from "react";
import {getCurrentUser} from "aws-amplify/auth";
import {generateClient} from "aws-amplify/api";
import * as queries from "@/graphql/queries";
import {FriendRequestStatus, Profile, RelationshipStatus} from "@/API";
import Alert from "@/app/components/Alert";

export const fetchFriendData = async (userId: string, client: any) => {
    try {
        const result = await client.graphql({
            query: queries.listFriendships,
            variables: {
                filter: {
                    or: [
                        {friendshipsFirstUserId: {eq: userId}},
                        {friendshipsSecondUserId: {eq: userId}}
                    ],
                    friendshipStatus: {eq: RelationshipStatus.FRIEND}
                }
            }
        });

        const friendships = result.data.listFriendships.items;
        const friendIds = friendships.map((friendship: {
            friendshipsFirstUserId: string | null;
            friendshipsSecondUserId: string | null;
        }) => {
            return friendship.friendshipsFirstUserId === userId
                ? friendship.friendshipsSecondUserId
                : friendship.friendshipsFirstUserId;
        });

        const validFriendIds = friendIds.filter((id: any) => typeof id === 'string') as string[];
        const friendsProfilesPromises = validFriendIds.map(friendId => {
            return client.graphql({
                query: queries.getProfile,
                variables: {id: friendId}
            });
        });

        const friendsProfiles = await Promise.all(friendsProfilesPromises);
        const friendsInfo = friendsProfiles
            .map(profile => profile.data.getProfile)
            .filter(profile => profile !== null && profile !== undefined);

        return friendsInfo as Profile[];
    } catch (error) {
        console.error('Error fetching user friends profiles:', error);
        return [];
    }
};

export default function Friends() {
    const [userId, setUserId] = useState("");
    const [userFriends, setUserFriends] = useState<Profile[]>([]);
    const client = generateClient();

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
        fetchFriendData(userId, client)
            .then(friendsInfo => {
                setUserFriends(friendsInfo);
            });
    }, [userId]);

    const handleDropdownToggle = (index: any) => {
        const dropdown = document.getElementById(`dropdown-${index}`);
        dropdown?.classList.toggle('hidden');
    }


    return (
        <div className="relative">
            <div className="flex flex-col">
                <div className="relative flex">
                    <button
                        type="button"
                        className="absolute top-2 right-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                        Add Friend
                    </button>

                    <div className="mb-6 flex flex-wrap">
                        {userFriends.map((friend: any, index) => (
                            <div
                                className="w-full max-w-sm border border-gray-200 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700 mx-2 mb-4"
                                key={friend.id}>
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
                                            <path
                                                d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                                        </svg>
                                    </button>
                                    <div
                                        id={`dropdown-${index}`}
                                        className="mt-10 z-10 hidden absolute text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                                    >
                                        <ul className="py-2" aria-labelledby="dropdownButton">
                                            <li>
                                                <a href="#"
                                                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">View
                                                    Profile</a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                   className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Remove
                                                    Match</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center pb-10">
                                    <img className="w-24 h-24 mb-3 rounded-full shadow-lg"
                                         src={friend.photo ?? "/placeholder_avatar.jpg"}
                                         alt="Match friend picture"/>
                                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{friend.name}</h5>
                                    <span className="text-sm text-gray-500 dark:text-gray-400">{friend.bio}</span>
                                    <div className="flex mt-4 md:mt-6">
                                        <button
                                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        >
                                            Add to Group
                                        </button>
                                        <a href="#"
                                           className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
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
    );
}
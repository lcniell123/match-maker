import React, { useState, useEffect } from 'react';
import {getCurrentUser} from "aws-amplify/auth";
import {generateClient} from "aws-amplify/api";
import * as queries from "@/graphql/queries";
import {Friendships} from "@/API";


export default function Friends()  {
    const [userId, setUserId] = useState("");
    const [friends, setFriends] = useState<Friendships[]>([]);
    const client = generateClient();

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
        async function fetchFriends() {
            try {
                const client = generateClient();
                const response = await client.graphql({
                    query: queries.listFriendships,
                    variables: {
                        filter: { userId: { eq: userId },
                                  status: { eq: "accepted" } } } })
                setFriends(response.data.listFriendships.items);
            } catch (error) {
                console.error("Error fetching friends:", error);
            }
        }

        if (userId) {
            fetchFriends();
        }
    }, [userId]);

    return (
        <div>
            <ul>
                {friends.map(friend => (
                    <li key={friend.id}>{friend.friendId}</li>
                ))}
            </ul>
        </div>
    );
}


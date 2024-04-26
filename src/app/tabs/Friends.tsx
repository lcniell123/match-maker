import React, { useState, useEffect } from "react";
import { getCurrentUser } from "aws-amplify/auth";
import { generateClient } from "aws-amplify/api";
import * as queries from "@/graphql/queries";
import * as mutations from "@/graphql/mutations";
import { Friendships, RelationshipStatus } from "@/API";
import { FriendRequestStatus } from "@/API";
import { createFriendRequest, createFriendships } from "@/graphql/mutations";
import { listProfiles } from "@/graphql/queries";

export default function Friends() {
  const [userId, setUserId] = useState("");
  const [friends, setFriends] = useState<Friendships[]>([]);
  const [friendName, setFriendName] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showAddFriendButton, setShowAddFriendButton] = useState(true);
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
            filter: {
              id: { eq: userId },
              friendshipStatus: { eq: RelationshipStatus.FRIEND },
            },
          },
        });
        setFriends(response.data.listFriendships.items);
      } catch (error) {
        console.error("Error fetching friends:", error);
      }
    }

    if (userId) {
      fetchFriends();
    }
  }, [userId]);

  const handleAddFriend = async () => {
    try {
      if (!friendName.trim()) {
        setMessage("Please enter a friend's name.");
        return;
      }
      setIsLoading(true);
      const friendExists = await checkIfFriendExists(friendName);
      if (friendExists) {
        const friendId = await getFriendIdByName(friendName);
        await sendFriendRequest(friendId, friendName);
      } else {
        setMessage("This user does not exist.");
      }
    } catch (error) {
      console.error("Error adding friend:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const checkIfFriendExists = async (friendName: string) => {
    try {
      const response = await client.graphql({
        query: queries.listProfiles,
        variables: {
          filter: { username: { eq: friendName } },
        },
      });
      const profiles = response.data.listProfiles.items;
      const friendExists = profiles.length > 0;
      return friendExists;
    } catch (error) {
      console.error("Error checking if friend exists:", error);
      return false;
    }
  };

  const getFriendIdByName = async (friendName: string) => {
    try {
      const response = await client.graphql({
        query: queries.listProfiles,
        variables: {
          filter: { username: { eq: friendName } },
        },
      });
      return response.data.listProfiles.items[0].id;
    } catch (error) {
      console.error("Error getting friend ID by name:", error);
      throw new Error("Error getting friend ID by name");
    }
  };

  const sendFriendRequest = async (friendId: string, friendName: string) => {
    try {
      const input = {
        input: {
          friendRequestSenderId: userId,
          friendRequestReceiverId: friendId,
          status: FriendRequestStatus.PENDING,
          createdAt: new Date().toISOString(),
        },
      };
      await client.graphql({ query: createFriendRequest, variables: input });

      setMessage(`Friend request sent to ${friendName}`);
      setShowAddFriendButton(true);
    } catch (error) {
      console.error("Error sending friend request:", error);
      setMessage(`Error sending friend request to ${friendName}`);
    }
  };

  const handleFriendRequestClick = async () => {
    if (!isLoading) {
      setShowAddFriendButton(false);
      await handleAddFriend();
    }
  };

  return (
    <div>
      {showAddFriendButton && (
        <button onClick={() => setShowAddFriendButton(false)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add Friend
        </button>
      )}
      {!showAddFriendButton && (
        <div>
          <input
            type="text"
            placeholder="Enter friend's name"
            value={friendName}
            onChange={(e) => setFriendName(e.target.value)}
            className="border border-gray-400 rounded-md p-2 mt-2"
          />
          <button onClick={handleFriendRequestClick} disabled={isLoading} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">
            {isLoading ? "Sending Request..." : "Send Friend Request"}
          </button>
          {isLoading && <div>Loading...</div>}
          {message && <div>{message}</div>}
        </div>
      )}
    </div>
  );
}

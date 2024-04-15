"use client";
import React, {useEffect, useState} from "react";
import "@aws-amplify/ui-react/styles.css";
import {getCurrentUser} from "aws-amplify/auth";
import {generateClient} from "aws-amplify/api";
import * as queries from "@/graphql/queries";
import {createFriendships} from "@/graphql/mutations";
import Alert from "../components/Alert"


// todo
export interface Profile {
    status: string | null | undefined;
    id: string;
    name: string;
    updatedAt: string | null | undefined;
    username?: string | null | undefined; //todo: username is name?
    photo?: string | null | undefined;
    coverPhoto?: string | null | undefined;
    firstName?: string | null | undefined;
    lastName?: string | null | undefined;
    bio?: string | null | undefined;
    // location
    postalCode?: string | null | undefined;
    country?: string | null | undefined;
    city?: string | null | undefined;
    region?: string | null | undefined;
    //availability
    timeZone?: string | null | undefined;
    timeAvailability?: string | null | undefined; //6-12,12-5,5-9,9-6 3 hours diff
    //vet
    language?: string | null | undefined;
    preferredTeammateAgeRange?: string | null | undefined;

    age?: number | null | undefined;
    favoriteGame?: string | null | undefined;
    preferredGenre?: string | null | undefined;
    skillLevel?: string | null | undefined;
    preferredGameMode?: string | null | undefined;
    preferredRole?: string | null | undefined;
    playStyle?: string | null | undefined;
    flexibility?: Boolean | null | undefined;
    behavior?: string | null | undefined;
    communicationPreference?: string | null | undefined;
    toleranceLevel?: string | null | undefined;
    teamworkLevel?: string | null | undefined;
    competitivenessLevel?: string | null | undefined;
}



export default function Matches() {
    const [userId, setUserId] = useState("");
    const [matchedProfiles, setMatchedProfiles] = useState<Profile[]>([]);
    const [alertMessage, setAlertMessage] = useState("");
    const [alertType, setAlertType] = useState("");
    const client = generateClient();
    const [showAlert, setShowAlert] = useState(false);

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

 async function fetchProfiles() {
     const skillTiers = ['beginner', 'intermediate', 'advanced'];
    try {
        const allProfilesResponse = await client.graphql({ query: queries.listProfiles });
        const allProfiles = allProfilesResponse.data.listProfiles.items;
        const currentUserProfile = allProfiles.find(profile => profile.id === userId);
        if (currentUserProfile && currentUserProfile.skillLevel) {
            const filteredProfiles = allProfiles.filter(profile => profile.id !== userId);
            const currentUserSkillIndex = skillTiers.indexOf(currentUserProfile.skillLevel);
            const friendRequestsResponse = await client.graphql({ query: queries.listFriendships, variables: { filter: { userId: { eq: userId }, status: { eq: "accepted" } } } });
            const friendRequests = friendRequestsResponse.data.listFriendships.items;
            const friendProfiles = friendRequests.map(request => request.friendId);
            const matchedProfiles = filteredProfiles.filter(profile => {
                const isFriend = friendProfiles.includes(profile.id);
                if (isFriend) return false;
                const profileSkillLevel = profile.skillLevel;
                if (!profileSkillLevel) return false;
                const profileSkillIndex = skillTiers.indexOf(profileSkillLevel);
                return profile.behavior === currentUserProfile.behavior &&
                    profile.playStyle === currentUserProfile.playStyle &&
                    (profileSkillIndex === currentUserSkillIndex ||
                    profileSkillIndex === currentUserSkillIndex - 1 ||
                    profileSkillIndex === currentUserSkillIndex + 1) &&
                    profile.preferredGenre === currentUserProfile.preferredGenre &&
                    profile.preferredTeammateAgeRange === currentUserProfile.preferredTeammateAgeRange &&
                    profile.preferredGameMode === currentUserProfile.preferredGameMode &&
                    profile.preferredRole === currentUserProfile.preferredRole &&
                    profile.flexibility === currentUserProfile.flexibility &&
                    profile.communicationPreference === currentUserProfile.communicationPreference &&
                    profile.toleranceLevel === currentUserProfile.toleranceLevel &&
                    profile.teamworkLevel === currentUserProfile.teamworkLevel &&
                    profile.competitivenessLevel === currentUserProfile.competitivenessLevel;
            });

            const nonFriendProfiles = matchedProfiles.map(profile => {
                const friendRequest = friendRequests.find(request => (request.friendId === profile.id || request.userId === profile.id));
                const status = friendRequest?.status;
                return { ...profile, status };
            });

            setMatchedProfiles(nonFriendProfiles);
        }
    } catch (error) {
        console.error("Error fetching profiles:", error);
    }
}

    if (userId) {
        fetchProfiles();
    }
}, [userId]);

   // todo: friendship id required, but there;s an id field, - should be gen
    const handleAddFriend = async (friendId: string, friendName: string) => {
        try {
            const input = {
                input: {
                    friendshipId: Math.random().toString(36).substring(2, length),
                    userId: userId,
                    friendId: friendId,
                    status: "pending"
                }
            };

             await client.graphql({ query: createFriendships, variables: input });
            setAlertMessage(`Friend request sent to ${friendName}`);
            setAlertType("success");
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 3000);
        } catch (error) {
            console.error("Error adding friend:", error);
            setAlertMessage(`Error sending friend request to ${friendName}`);
            setAlertType("error");
            setShowAlert(true);
        }
    };


return (
    <div className="mb-6 flex flex-wrap">
       {showAlert && (
            <Alert
                message={alertMessage}
                type={alertType}
                onClose={() => setShowAlert(false)}
            />
        )}
        {matchedProfiles.map(profile => (
            <div className="w-full max-w-sm border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-2 mb-4" key={profile.id}>
                <div className="flex justify-end px-4 pt-4">
                    <button id="closeButton"
                            className="inline-block text-red-600 dark:text-gray-400 hover:bg-red-200 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                            type="button">
                        <span className="sr-only">Remove match</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/>
                        </svg>
                    </button>
                </div>
                <div className="flex flex-col items-center pb-10">
                    <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={profile.photo ? String(profile.photo) : "/placeholder_avatar.jpg"} alt="Match profile picture"/>
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{profile.name}</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{profile.bio}</span>
                    <div className="flex mt-4 md:mt-6">
                        <button
                            onClick={() => handleAddFriend(profile.id, profile.name)}
                            disabled={profile.status === "pending"} // Disable button if status is pending
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            {profile.status === "pending" ? "Pending" : "Add Friend"}
                        </button>
                        <a href="#" className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                            Message
                        </a>
                    </div>
                </div>
            </div>
        ))}
    </div>
);


}
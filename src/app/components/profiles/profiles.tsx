"use client";

import { useRouter } from "next/navigation";
import * as mutations from "@/graphql/mutations";
// 1. Add the queries as an import
import * as queries from "@/graphql/queries";
import { generateClient } from "aws-amplify/api";
import { useEffect, useState } from "react";
import ProfileDescription from "./profileDescription";
import EditProfile from "./editProfile";
import ProfilePicture from "./profilePicture";
import { AuthUser } from "aws-amplify/auth";

export interface Profile {
  id: string;
  description: string;
  username?: string;
  bio?: string;
  photo?: string;
  coverPhoto?: string;
  firstName?: string;
  lastName?: string;
  age?: number;
  country?: string;
  timeZone?: string;
  city?: string;
  region?: string;
  postalCode?: string;
  language?: string;
  favoriteGame?: string;
  preferredGenre?: string;
  timeAvailability?: string;
  preferredTeammateAgeRange?: string;
  skillLevel?: string;
  preferredGameMode?: string;
  preferredRole?: string;
  playStyle?: string;
  flexibility?: Boolean;
  behavior?: string;
  communicationPreference?: string;
  toleranceLevel?: string;
  teamworkLevel?: string;
  competitivenessLevel?: string;
}
const client = generateClient();

export default function Profiles(profile: AuthUser | any) {
  const router = useRouter();
  console.log("PPPPP", profile);
  const [profiles, setProfiles] = useState<Profile | any>([]);
  const [singleProfile, setSingleProfile] = useState({});

  const [editingProfile, setEditingProfile] = useState(false);
  const [userProfilePicture, setUserProfilePicture] = useState(null);
  const [formData, setFormData] = useState({
    /* initial form data */
  });
  const [editingPicture, setEditingPicture] = useState(false);

  // const handleEditProfile = () => {
  //   setEditingProfile(true);
  // };

  // const handleSaveProfile = () => {
  //   setEditingProfile(false);
  //   //updateProfile();
  //   // Logic to save profile changes
  // };

  // const handleCancelEdit = () => {
  //   setEditingProfile(false);
  //   // Revert changes to the user's original profile data
  // };

  // const handleChange = (e: { target: { name: any; value: any } }) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value,
  //   }));
  // };

  const listProfile = client.graphql({
    query: queries.listProfiles,
  });

  useEffect(() => {
    listProfile.then((d) => {
      if (d.data.listProfiles.items) {
        console.log("!!!!!DATA: ", d.data.listProfiles.items);
        setProfiles(d.data.listProfiles.items);
      }
    });
  }, []);

  useEffect(() => {
    if (profiles && profiles.length === 0) {
      client.graphql({
        query: mutations.createProfile,
        variables: {
          input: {
            name: profile.username ?? "",
            id: profile.userId ?? "",
          },
        },
      });
    }

    profiles.forEach((p: Profile) => {
      console.log("Compate", profile.profile.userId, p.id);
      if (profile.profile.userId == p.id) {
        const p1 = {
          ...p,
          name: profile.username,
          id: profile.userId,
        };
        setSingleProfile(p1);
      } else {
        if (profile.username && profile.userId) {
          const create = client.graphql({
            query: mutations.createProfile,
            variables: {
              input: {
                name: profile.username,
                id: profile.userId,
              },
            },
          });

          create;
        }
      }
    });
  }, [profiles, profile]);

  return (
    <div className="max-w-screen-lg mx-auto bg-gray-800 rounded-lg shadow-md p-6 mb-6 w-screen">
      <div className="max-w-screen-sm mx-auto p-4">
        <div className="mb-4">
          <ProfilePicture
            handleEditPicture={setEditingPicture}
            userProfilePicture={userProfilePicture}
          />
          {/* Nav bar with buttons */}
          {!editingProfile && (
            <div className="flex justify-center mt-4 space-x-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Profile
              </button>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Friends
              </button>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Group Activities
              </button>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Matching
              </button>
            </div>
          )}
        </div>
        {!editingProfile && (
          <ProfileDescription
            formData={singleProfile}
            handleEditProfile={() => setEditingProfile(true)}
          />
        )}
        {editingProfile && (
          <EditProfile
            formData={singleProfile}
            handleCancelProfile={() => setEditingProfile(false)}
          />
        )}
      </div>
    </div>
  );
}

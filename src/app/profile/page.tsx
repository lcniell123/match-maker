"use client";

import React, { useEffect, useState } from "react";
import { Amplify } from "aws-amplify";

import { WithAuthenticatorProps } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { withAuthenticator } from "@aws-amplify/ui-react";
import * as mutations from "@/graphql/mutations";

import awsExports from "../../amplifyconfiguration.json";
import Profiles from "../components/profiles/profiles";
import ProfilePicture from "../components/profiles/profilePicture";
import { useRouter } from "next/navigation";
import { generateClient } from "aws-amplify/api";
import * as queries from "@/graphql/queries";
import ProfileDescription from "../components/profiles/profileDescription";
import EditProfile from "../components/profiles/editProfile";

Amplify.configure(awsExports);
export interface Profile {
  id: string;
  name: string;
  updatedAt: string | null | undefined;
  description?: string | null | undefined;
  languages?: string | null | undefined;
  zipCode?: string | null | undefined;
  gamePreference?: string | null | undefined;
  username?: string | null | undefined;
  bio?: string | null | undefined;
  photo?: string | null | undefined;
  coverPhoto?: string | null | undefined;
  firstName?: string | null | undefined;
  lastName?: string | null | undefined;
  age?: number | null | undefined;
  country?: string | null | undefined;
  timeZone?: string | null | undefined;
  city?: string | null | undefined;
  region?: string | null | undefined;
  postalCode?: string | null | undefined;
  language?: string | null | undefined;
  favoriteGame?: string | null | undefined;
  preferredGenre?: string | null | undefined;
  timeAvailability?: string | null | undefined;
  preferredTeammateAgeRange?: string | null | undefined;
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

function Profile({ signOut, user }: WithAuthenticatorProps) {
  const router = useRouter();

  const client = generateClient();

  //const router = useRouter();
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [singleProfile, setSingleProfile] = useState<Profile>();

  const [editingProfile, setEditingProfile] = useState(false);
  const [userProfilePicture, setUserProfilePicture] = useState(null);
  //const [formData, setFormData] = useState({
  /* initial form data */
  //s});
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

  // Load list of profiles
  const listProfile = client.graphql({
    query: queries.listProfiles,
  });

  useEffect(() => {
    // add profile list to profiles state
    listProfile.then((d) => {
      if (d.data.listProfiles.items) {
        setProfiles(d.data.listProfiles.items);
      }
    });
  }, []);

  useEffect(() => {
    // if no profiles create a profile with name and id
    if (profiles && profiles.length === 0) {
      client.graphql({
        query: mutations.createProfile,
        variables: {
          input: {
            name: user?.username ?? "",
            id: user?.userId ?? "",
          },
        },
      });
    }
    profiles?.forEach((p) => {
      //when profile name matches profile list show that profile
      if (user?.userId == p.id) {
        const single = {
          ...p,
          name: user?.username,
          id: user?.userId,
        };
        setSingleProfile(single);
      } else {
        if (user?.username && user?.userId) {
          const create = client.graphql({
            query: mutations.createProfile,
            variables: {
              input: {
                name: user?.username,
                id: user?.userId,
              },
            },
          });
          create;
        }
      }
    });
  }, [profiles]);

  return (
    // <div className="max-w-screen-lg mx-auto bg-gray-800 rounded-lg shadow-md p-6 mb-6 w-screen">
    //   <div className="max-w-screen-sm mx-auto p-4">
    <>
      {" "}
      {!editingProfile && (
        <>
          <div className="mb-4"></div>
          <ProfileDescription
            formData={singleProfile}
            handleEditProfile={() => setEditingProfile(true)}
          />
        </>
      )}
      {editingProfile && (
        <EditProfile
          formData={singleProfile}
          handleCancelProfile={() => setEditingProfile(false)}
        />
      )}
    </>
    // </div>
  );
}

export default withAuthenticator(Profile);

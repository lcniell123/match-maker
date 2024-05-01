"use client";
import React, { useEffect, useState } from "react";
import "@aws-amplify/ui-react/styles.css";
import * as mutations from "@/graphql/mutations";
import { getCurrentUser } from "aws-amplify/auth";
import { useRouter } from "next/navigation";
import { generateClient } from "aws-amplify/api";
import * as queries from "@/graphql/queries";
import ProfileDescription from "../../components/profiles/profileDescription";
import EditProfile from "../../components/profiles/editProfile";

import awsExports from "../../../amplifyconfiguration.json";
import { Amplify } from "aws-amplify";
//const router = useRouter();
const client = generateClient();
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

function Profile() {
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");

  async function currentAuthenticatedUser() {
    try {
      const { username, userId } = await getCurrentUser();

      setUserName(username);
      setUserId(userId);
    } catch (err) {
      console.log(err);
    }
  }
  currentAuthenticatedUser();

  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [singleProfile, setSingleProfile] = useState<Profile>();
  const [editingProfile, setEditingProfile] = useState(false);

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
            name: userName,
            id: userId,
          },
        },
      });
    }
    profiles?.forEach((p) => {
      //when profile name matches profile list show that profile
      if (userId == p.id) {
        const single = {
          ...p,
          name: userName,
          id: userId,
        };
        setSingleProfile(single);
      } else {
        if (userName && userId) {
          const create = client.graphql({
            query: mutations.createProfile,
            variables: {
              input: {
                name: userName,
                id: userId,
              },
            },
          });
          create;
        }
      }
    });
  }, [profiles]);

  return (
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
  );
  // return <></>;
}

export default Profile;

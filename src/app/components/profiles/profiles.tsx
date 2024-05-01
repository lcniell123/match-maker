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
import { ListProfilesQuery } from "@/API";

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
const client = generateClient();

export default function Profiles(profile: AuthUser | any) {
  //const router = useRouter();
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [singleProfile, setSingleProfile] = useState<Profile>();

  const [editingProfile, setEditingProfile] = useState(false);
  const [userProfilePicture, setUserProfilePicture] = useState(null);

  const [editingPicture, setEditingPicture] = useState(false);

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
            name: profile.profile.username,
            id: profile.profile.userId,
          },
        },
      });
    }
    profiles?.forEach((p) => {
      //when profile name matches profile list show that profile
      if (profile.profile.userId == p.id) {
        const single = {
          ...p,
          name: profile.profile.username,
          id: profile.profile.userId,
        };
        setSingleProfile(single);
      } else {
        if (profile.profile.username && profile.profile.userId) {
          const create = client.graphql({
            query: mutations.createProfile,
            variables: {
              input: {
                name: profile.profile.username,
                id: profile.profile.userId,
              },
            },
          });
          create;
        }
      }
    });
  }, [profiles]);

  return (
    <div className="max-w-screen-lg mx-auto bg-gray-800 rounded-lg shadow-md p-6 mb-6 w-screen">
      <div className="max-w-screen-sm mx-auto p-4">
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
      </div>{" "}
    </div>
  );
}

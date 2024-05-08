"use client";

import CoverPhoto from "@/app/components/photo/CoverPhoto";
import React, { useEffect, useState } from "react";
import { Container } from "@/app/components/Container";
import * as mutations from "@/graphql/mutations";

import "../../../styles/globals.css";
import { getCurrentUser, confirmUserAttribute } from "aws-amplify/auth";
import * as queries from "@/graphql/queries";
import { Profile } from "@/API";
import { generateClient } from "aws-amplify/api";
import Groups from "@/app/tabs/Groups";
import Matches from "@/app/tabs/Matches";
import Friends from "@/app/tabs/Friends";
import { Navigation } from "@/app/components/Navigation";

import { redirect, useRouter } from "next/navigation";

const Dashboard: React.FC = () => {
  const router = useRouter();

  const [activeTab, setActiveTab] = useState<string>("Groups");
  const [userName, setUserName] = useState("");
  const [completeProfile, setCompleteProfile] = useState(true);
  const [userId, setUserId] = useState("");
  const [profile, setProfile] = useState<Profile>();
  const client = generateClient();

  // Load list of profiles
  // async function currentAuthenticatedUser() {
  //   try {
  //     const { username, userId } = await getCurrentUser();
  //     setUserName(username);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
  // getCurrentUser().then((info) => {
  //   console.log("!!!!", info);
  //   if (info.username) {
  //     setUserName(info.username);
  //   }
  // });
  // currentAuthenticatedUser();

  const listProfile = client.graphql({
    query: queries.listProfiles,
  });

  useEffect(() => {
    async function fetchData() {
      getCurrentUser().then(async (info) => {
        if (info.username) {
          setUserName(info.username);
          setUserId(info.userId);
          const profileItem = await client.graphql({
            query: queries.getProfile,
            variables: { id: userId },
          });

          if (profileItem.data.getProfile) {
            setProfile(profileItem.data.getProfile);
          }
        }
      });

      listProfile.then(async (d) => {
        //const { username, userId } = await getCurrentUser();
        await getCurrentUser().then((info) => {
          if (info.username) {
            if (d.data.listProfiles.items) {
              d.data.listProfiles.items.forEach((profile) => {
                //console.log("pn", profile.name, username);
                if (profile.name == info.username) {
                  if (
                    !profile.name ||
                    !profile.age ||
                    !profile.languages ||
                    !profile.zipCode ||
                    !profile.country ||
                    !profile.preferredRole
                  ) {
                    setCompleteProfile(false);
                    router.refresh();
                  }
                } else {
                  // create new profile if it doesnt exist
                  console.log("@@@@", info.username, userId);
                  client.graphql({
                    query: mutations.createProfile,
                    variables: {
                      input: {
                        name: info.username,
                        id: userId,
                      },
                    },
                  });
                  router.refresh();
                }
              });
            }
          }
        });
      });
      // try {
      //   const { username, userId } = await getCurrentUser();
      //   setUserName(username);
      //   setUserId(userId);

      //   const profileItem = await client.graphql({
      //     query: queries.getProfile,
      //     variables: { id: userId },
      //   });

      //   if (profileItem.data.getProfile) {
      //     setProfile(profileItem.data.getProfile);
      //   }
      // } catch (err) {
      //   console.log(err);
      // }
    }
    fetchData();
  }, [userName, userId]);

  useEffect(() => {
    // add profile list to profiles state
    if (userId.length > 0 && userName.length > 0 && userName) {
      console.log("THISISID", userId, userName);
      // listProfile.then(async (d) => {
      //   //const { username, userId } = await getCurrentUser();
      //   await getCurrentUser().then((info) => {
      //     if (info.username) {
      //       if (d.data.listProfiles.items) {
      //         d.data.listProfiles.items.forEach((profile) => {
      //           //console.log("pn", profile.name, username);
      //           if (profile.name == info.username) {
      //             if (
      //               !profile.name ||
      //               !profile.age ||
      //               !profile.languages ||
      //               !profile.zipCode ||
      //               !profile.country ||
      //               !profile.preferredRole
      //             ) {
      //               setCompleteProfile(false);
      //               router.refresh();
      //             }
      //           } else {
      //             // create new profile if it doesnt exist
      //             console.log("@@@@", info.username, userId);
      //             client.graphql({
      //               query: mutations.createProfile,
      //               variables: {
      //                 input: {
      //                   name: info.username,
      //                   id: userId,
      //                 },
      //               },
      //             });
      //             router.refresh();
      //           }
      //         });
      //       }
      //     }
      //   });
      // });
    }
  }, [userId, userName]);

  // useEffect(() => {
  //   if (completeProfile == false) {
  //     console.log("rediretct to profile");
  //     redirect("/profile-form");
  //   }
  // }, [userId, userName, completeProfile]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Navigation />
      <CoverPhoto />
      <div className="flex flex-col items-start mt-8 mb-10">
        <div className="mt-10 ml-10">
          <h2 className="text-lg font-semibold">{userName}</h2>
          <p className="text-sm text-gray-600">{profile?.bio}</p>
        </div>
      </div>
      <div className="border-b border-t border-gray-900/10 px-5 mt-8 mb-10">
        <button
          className={`px-4 py-2 mx-2 text-sm font-medium focus:outline-none ${activeTab === "Groups" ? "border-b-2 border-blue-500 text-black" : "text-gray-600"}`}
          onClick={() => handleTabClick("Groups")}
        >
          Groups
        </button>
        <button
          className={`px-4 py-2 mx-2 text-sm font-medium focus:outline-none ${activeTab === "Friends" ? "text-black border-b-2 border-blue-500" : "text-gray-600"}`}
          onClick={() => handleTabClick("Friends")}
        >
          Friends
        </button>
        <button
          className={`px-4 py-2 mx-2 text-sm font-medium focus:outline-none ${activeTab === "Matches" ? "border-b-2 border-blue-500 text-black" : "text-gray-600"}`}
          onClick={() => handleTabClick("Matches")}
        >
          Matches
        </button>
      </div>
      <Container className="justify-center py-2">
        {activeTab === "Groups" && <Groups />}
        {activeTab === "Friends" && <Friends />}
        {activeTab === "Matches" && <Matches />}
      </Container>
    </>
  );
};

export default Dashboard;

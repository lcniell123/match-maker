"use client";

import React from "react";
import { Amplify } from "aws-amplify";

import { WithAuthenticatorProps } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { withAuthenticator } from "@aws-amplify/ui-react";

import awsExports from "../amplifyconfiguration.json";
import Profiles from "./components/profiles/profiles";
import ProfilePicture from "./components/profiles/profilePicture";
import { useRouter } from "next/navigation";

Amplify.configure(awsExports);

function App({ signOut, user }: WithAuthenticatorProps) {
  const router = useRouter();

  {
    /* <div className="flex justify-center mt-4 space-x-4">
          <button
            onClick={() => router.push("/profile")}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Profile
          </button>
          <button
            onClick={() => router.push("/friends")}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Friends
          </button>
          <button
            onClick={() => router.push("/groups")}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Groups
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            onClick={() => router.push("/matching")}
          >
            Matching
          </button>
        </div> */
  }
  return <>sdsdfdsfsdfsdf</>;
}

export default withAuthenticator(App);

"use client";

import React from "react";
import { Amplify } from "aws-amplify";

import { WithAuthenticatorProps } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { withAuthenticator } from "@aws-amplify/ui-react";

import awsExports from "../amplifyconfiguration.json";
import Profiles from "./components/profiles/profiles";
import ProfilePicture from "./components/profiles/profilePicture";

Amplify.configure(awsExports);

function App({ signOut, user }: WithAuthenticatorProps) {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 flex flex-col justify-center items-center">
        <header className="py-12">
          <h1 className="text-3xl font-bold text-center mb-4">
            Welcome, {user?.username}{" "}
          </h1>
          <main className="mt-8 flex-grow flex justify-center items-center">
            <div className="max-w-screen-lg mx-auto bg-gray-800 rounded-lg shadow-md p-6 mb-6 w-screen">
              <div className="max-w-screen-sm mx-auto p-4">
                <ProfilePicture
                  handleEditPicture={"setEditingPicture"}
                  userProfilePicture={"userProfilePicture"}
                />
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
                {user && <Profiles profile={user} />}
              </div>{" "}
            </div>
          </main>
          <button
            onClick={signOut}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          >
            Sign out
          </button>
        </header>
      </div>
    </>
  );
}

export default withAuthenticator(App);

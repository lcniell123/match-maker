"use client";

import React from "react";
import { Amplify } from "aws-amplify";

import { WithAuthenticatorProps } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import awsExports from "../amplifyconfiguration.json";

Amplify.configure(awsExports);

function App({ user }: WithAuthenticatorProps) {
  return (
    <div className="max-w-screen-lg mx-auto bg-white rounded-lg shadow-md p-6 mb-6 w-full">
      <h1>Welcome to MatchMaker {user?.username}!</h1>
    </div>
  );
}

export default App;

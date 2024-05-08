"use client";
import React from "react";
import { Amplify } from "aws-amplify";
import {
  Authenticator,
  View,
  useAuthenticator,
  Image,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "../amplifyconfiguration.json";
import { useRouter } from "next/navigation";
import Dashboard from "@/app/components/Dashboard";
import {
  getCurrentUser,
  ConfirmSignUpOutput,
  confirmSignUp,
} from "aws-amplify/auth";

Amplify.configure(awsExports);

export default function App() {
  //const router = useRouter();
  // const { route } = useAuthenticator((context) => [context.route]);
  console.log("confirm:d", confirmSignUp);
  const components = {
    Header: () => {
      return (
        <>
          <img
            style={{ width: "40%", margin: "auto", padding: "20px" }}
            src="/_next/image?url=%2Flogo.png&w=256&q=75"
          />
        </>
      );
    },
    SignIn: {
      Header: () => {
        return <></>;
      },
      Footer: () => {
        return <></>;
      },
    },
    Footer: () => {
      return <></>;
    },
  };
  return (
    <>
      <Authenticator components={components}>
        <>
          <Dashboard />
        </>
      </Authenticator>
    </>
  );
}

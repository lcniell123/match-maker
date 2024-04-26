"use client";
import React from "react";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "../../amplifyconfiguration.json";
import { useRouter } from "next/navigation";
import Dashboard from "@/app/components/Dashboard";

Amplify.configure(awsExports);

export default function App() {
  const router = useRouter();

  return <Authenticator>{() => <Dashboard />}</Authenticator>;
}

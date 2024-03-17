"use client";

import { useRouter } from "next/navigation";

import * as mutations from "@/graphql/mutations";
import * as queries from "@/graphql/queries";

import { generateClient } from "aws-amplify/api";
import { useEffect, useState } from "react";
import { ConsoleLogger } from "aws-amplify/utils";
import { AuthUser } from "aws-amplify/auth";
const client = generateClient();

export interface ProfileProps {
  name?: string;
  id: string;
  description?: string;
}
export default function Profile(profile: ProfileProps) {
  const router = useRouter();

  const [allProfiles, setAllProfiles] = useState<any>([]);
  const [newProfiles, setNewProfiles] = useState<any>([]);
  const [prof, setProf] = useState<ProfileProps>();
  const data = client.graphql({
    query: queries.listProfiles,
  });

  useEffect(() => {
    data.then((d) => {
      console.log(d.data.listProfiles.items);
      setAllProfiles(d.data.listProfiles.items);
    });
  }, []);

  useEffect(() => {
    setNewProfiles(allProfiles);
    allProfiles.forEach((p: ProfileProps) => {
      if (profile.id == p.id) {
        setProf(p);
      }
    });
  }, [allProfiles, profile.id]);

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "0 auto",
        textAlign: "center",
        marginTop: "100px",
      }}
    >
      <p>
        Name:<b>{prof?.name ?? "-"}</b>
      </p>

      <p>
        Description:
        <b>{prof ? prof.description : "-"}</b>
      </p>
    </div>
  );
}

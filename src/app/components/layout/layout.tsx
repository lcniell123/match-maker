import { Authenticator } from "@aws-amplify/ui-react";
import { getCurrentUser } from "aws-amplify/auth";
import Profile from "../layout/pages/profile/profile";

import { Amplify } from "aws-amplify";

import "@aws-amplify/ui-react/styles.css";
import * as queries from "@/graphql/queries";

import awsExports from "../../../amplifyconfiguration.json";
import { generateClient } from "aws-amplify/api";
import { useEffect, useState } from "react";
import { ListProfilesQuery } from "@/API";
import { AuthUser } from "aws-amplify/auth";
import Form from "./pages/form/form";

interface Profile {
  name?: string;
  id?: string;
  description?: string;
  age?: string;
  location?: string;
  occupation?: string;
}

export default function Layout() {
  const client = generateClient();

  const data = client.graphql({
    query: queries.listProfiles,
  });

  Amplify.configure(awsExports);

  // interface Profile  {
  //     name?:string,
  //     description?:string,
  // }
  const [content, setContent] = useState(<></>);
  const [userInfo, setUserInfo] = useState();
  const [userName, setUserName] = useState("");
  const [profile, setProfile] = useState<AuthUser>();
  const [profiles, setProfiles] = useState<Profile[]>([]);

  useEffect(() => {
    console.log(data);
    const profiles: Profile[] = [];
    data.then((d) => {
      d.data.listProfiles.items.forEach((profile) => {
        profiles.push({
          name: profile.name,
          id: profile.id,
          description: profile.description ?? "",
          // age: profile.age ?? "",
        });
      });
      setProfiles(profiles);
    });
  }, []);

  useEffect(() => {
    console.log("added");
    getCurrentUser().then((user) => {
      console.log("$$", user);
      setUserName(user.username);

      profiles.forEach((profile: Profile) => {
        if (profile.name == user.username) {
          if (profile.description) {
            setContent(
              <Profile
                id={profile.id ?? ""}
                name={profile.name ?? ""}
                description={profile.description ?? ""}
              />
            );
          } else {
            setContent(<Form />);
          }
        }
      });
    });
  }, [profiles]);

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user?.username}</h1>

          <button onClick={signOut}>Sign out</button>
          {content}
        </main>
      )}
    </Authenticator>
  );
}

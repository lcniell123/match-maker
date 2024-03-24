import React from "react";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import awsExports from "../../amplifyconfiguration.json";
//simport Todos from './todos/todos';
Amplify.configure(awsExports);

export default function Auth() {
  return (
    <></>
    //   <Todos/>
    //   // <Authenticator>
    //   //   {({ signOut, user }) => (
    //   //     <main>
    //   //       <h1>Hello {user?.username}</h1>

    //   //       <button onClick={signOut}>Sign out</button>
    //   //     </main>
    //   //   )}
    //   // </Authenticator>
  );
}


'use client';

import React from 'react';
import { Amplify } from 'aws-amplify';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from '../amplifyconfiguration.json';
import Profiles from './components/profiles/profiles';

Amplify.configure(awsExports);


export default function App() {

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 flex flex-col justify-center items-center">
          <header className="py-4">
            <h1 className="text-3xl font-bold text-center mb-4">Welcome, {user?.username} </h1>
            <main className="mt-8 flex-grow flex justify-center items-center">
              {user && <Profiles profile={user} />}
            </main>
            <button onClick={signOut} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
              Sign out
            </button>
          </header>
         
        </div>
      )}
    </Authenticator>
  );
}

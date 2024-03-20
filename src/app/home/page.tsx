'use client';
import CoverPhoto from '@/app/components/photo/CoverPhoto';
import React, { useState } from 'react';
import {Container} from "@/app/components/Container";
import ProfilePage from '@/app/components/profiles/ProfilePage';



const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('Profile');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
      <Container className="flex justify-center py-2">
    <div className="mx-auto px-4">
      <CoverPhoto />
      <div className="flex flex-col items-start mt-8 mb-10">
        <div className="mt-10 ml-10">
          <h2 className="text-lg font-semibold">John Doe</h2>
          <p className="text-sm text-gray-600">A brief bio about John Doe.</p>
        </div>
      </div>
      <div className="flex justify-center mt-8 mb-10">
        <button
            className={`px-4 py-2 mx-2 text-sm font-medium focus:outline-none ${
                activeTab === 'Profile' ? 'border-b-2 border-blue-500' : ''
            }`}
            onClick={() => handleTabClick('Profile')}
        >
          Profile
        </button>
        <button
            className={`px-4 py-2 mx-2 text-sm font-medium focus:outline-none ${
                activeTab === 'Matches' ? 'border-b-2 border-blue-500' : ''
            }`}
            onClick={() => handleTabClick('Matches')}
        >
          Matches
        </button>
        <button
            className={`px-4 py-2 mx-2 text-sm font-medium focus:outline-none ${
                activeTab === 'Friends' ? 'border-b-2 border-blue-500' : ''
            }`}
            onClick={() => handleTabClick('Friends')}
        >
          Friends
        </button>
        <button
            className={`px-4 py-2 mx-2 text-sm font-medium focus:outline-none ${
                activeTab === 'Groups' ? 'border-b-2 border-blue-500' : ''
            }`}
            onClick={() => handleTabClick('Groups')}
        >
          Groups
        </button>
      </div>
      {activeTab === 'Profile' && <ProfilePage/>}
    </div>
      </Container>
  );
};

export default Home;

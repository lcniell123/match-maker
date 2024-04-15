import CoverPhoto from '@/app/components/photo/CoverPhoto';
import React, { useEffect, useState } from 'react';
import { Container } from "@/app/components/Container";
import '../../../styles/globals.css'
import { getCurrentUser } from "aws-amplify/auth";
import * as queries from "@/graphql/queries";
import { Profile } from "@/API";
import { generateClient } from "aws-amplify/api";
import Groups from "@/app/tabs/Groups";
import Matches from "@/app/tabs/Matches";
import Friends from "@/app/tabs/Friends";
import { Navigation } from "@/app/components/Navigation";

const Dashboard: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('Groups');
    const [userName, setUserName] = useState("");
    const [userId, setUserId] = useState("");
    const [profile, setProfile] = useState<Profile>();
    const client = generateClient();

    useEffect(() => {
        async function fetchData() {
            try {
                const { username, userId } = await getCurrentUser();
                setUserName(username);
                setUserId(userId);

                const profileItem = await client.graphql({
                    query: queries.getProfile,
                    variables: { id: userId }
                });

                if (profileItem.data.getProfile) {
                    setProfile(profileItem.data.getProfile);
                }
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);

    const handleTabClick = (tab: string) => {
        setActiveTab(tab);
    };

    return (
        <>
            <Navigation />
            <CoverPhoto />
            <div className="flex flex-col items-start mt-8 mb-10">
                <div className="mt-10 ml-10">
                    <h2 className="text-lg font-semibold">{userName}</h2>
                    <p className="text-sm text-gray-600">{profile?.bio}</p>
                </div>
            </div>
            <div className="border-b border-t border-gray-900/10 px-5 mt-8 mb-10">
                <button
                    className={`px-4 py-2 mx-2 text-sm font-medium focus:outline-none ${activeTab === 'Groups' ? 'border-b-2 border-blue-500 text-black' : 'text-gray-600'}`}
                    onClick={() => handleTabClick('Groups')}
                >
                    Groups
                </button>
                <button
                    className={`px-4 py-2 mx-2 text-sm font-medium focus:outline-none ${activeTab === 'Friends' ? 'text-black border-b-2 border-blue-500' : 'text-gray-600'}`}
                    onClick={() => handleTabClick('Friends')}
                >
                    Friends
                </button>
                <button
                    className={`px-4 py-2 mx-2 text-sm font-medium focus:outline-none ${activeTab === 'Matches' ? 'border-b-2 border-blue-500 text-black' : 'text-gray-600'}`}
                    onClick={() => handleTabClick('Matches')}
                >
                    Matches
                </button>
            </div>
            <Container className="justify-center py-2">
                {activeTab === 'Groups' && <Groups />}
                {activeTab === 'Friends' && <Friends />}
                {activeTab === 'Matches' && <Matches />}
            </Container>
        </>
    );
};

export default Dashboard;

import React from "react";
import Profiles from "@/app/components/profiles/profiles";
import {AuthUser} from "@aws-amplify/auth";
interface ProfileProps {
    user: AuthUser | undefined;
}

const ProfilePage: React.FC = (user) => {
    return (
        <main className="mt-8 flex-grow flex justify-center items-center">
            {user && <Profiles profile={user}/>}
        </main>
    )
};

export default ProfilePage;
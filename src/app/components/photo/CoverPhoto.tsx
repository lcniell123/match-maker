import React, { useState } from "react";
import ProfilePicture from "@/app/components/profiles/profilePicture";
import { getCurrentUser } from "aws-amplify/auth";

const CoverPhoto: React.FC = () => {
  const [userName, setUserName] = useState("");

  async function currentAuthenticatedUser() {
    try {
      const { username, userId } = await getCurrentUser();
      setUserName(username);
    } catch (err) {
      console.log(err);
    }
  }
  currentAuthenticatedUser();

  return (
    <div className="relative h-64 w-full">
      <img
        src={`https://mm-bucket191228-dev.s3.us-east-2.amazonaws.com/public/${userName}-background-pic.jpg`}
        alt="Cover Photo"
        className="w-full h-full object-cover"
      />

      <div className="absolute bottom-0 left-5 transform translate-y-1/2">
        <ProfilePicture userName={userName} />
      </div>
    </div>
  );
};

export default CoverPhoto;

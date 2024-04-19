import React, { useState } from "react";
import ProfilePicture from "@/app/components/profiles/profilePicture";
import { getCurrentUser } from "aws-amplify/auth";

const CoverPhoto: React.FC = () => {
  const [editingPicture, setEditingPicture] = useState(false);
  const [userProfilePicture, setUserProfilePicture] = useState(null);
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");

  async function currentAuthenticatedUser() {
    try {
      const { username, userId } = await getCurrentUser();
      setUserName(username);
      setUserId(userId);
    } catch (err) {
      console.log(err);
    }
  }
  currentAuthenticatedUser();

  return (
    <div className="relative h-64 w-full">
      <img
        src="https://wallpapers.com/images/high/enemy-territory-quake-wars-live-gaming-itpl8s3iyfjs6gja.webp"
        alt="Cover Photo"
        className="w-full h-full object-cover"
      />

      <div className="absolute bottom-0 left-5 transform translate-y-1/2">
        <ProfilePicture
          userName={userName}
          //   handleEditPicture={setEditingPicture??null}
          //   userProfilePicture={userProfilePicture}
        />
      </div>
    </div>
  );
};

export default CoverPhoto;

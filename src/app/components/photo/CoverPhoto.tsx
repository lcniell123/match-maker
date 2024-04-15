import React, {useState} from 'react';
import ProfilePicture from "@/app/components/profiles/profilePicture";

const CoverPhoto: React.FC = () => {
    const [editingPicture, setEditingPicture] = useState(false);
    const [userProfilePicture, setUserProfilePicture] = useState(null);

  return (
      <div className="relative h-64 w-full">
          <img
              src="https://wallpapers.com/images/high/enemy-territory-quake-wars-live-gaming-itpl8s3iyfjs6gja.webp"
              alt="Cover Photo"
              className="w-full h-full object-cover"
          />

          <div className="absolute bottom-0 left-5 transform translate-y-1/2">
             <ProfilePicture
              handleEditPicture={setEditingPicture}
              userProfilePicture={userProfilePicture}
        />
          </div>
      </div>
  );
};

export default CoverPhoto;

import React, { useState, useEffect } from "react";

const ProfilePicture = ({ handleEditPicture, userProfilePicture }) => {
  const [image, setImage] = useState(null);

  useEffect(() => {
    const storedImage = localStorage.getItem("profilePicture");
    if (storedImage) {
      setImage(storedImage);
    }
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setImage(reader.result);
      localStorage.setItem("profilePicture", reader.result); // Save image URL in local storage
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      setImage(null); // Reset image state if no file is chosen
      localStorage.removeItem("profilePicture"); // Remove image URL from local storage
    }
  };

  const handleClickEditPicture = () => {
    handleEditPicture();
  };

  return (
    <div className="flex justify-center items-center h-full">
      <label htmlFor="profile-image" className="cursor-pointer">
        {image ? (
          <img
            src={image}
             alt="Profile Photo"
             className="w-32 h-32 rounded-full border-4 border-white"
          />
        ) : (
            <img
                src={"/placeholder_avatar.jpg"}
                alt="Profile Photo"
                className="w-32 h-32 rounded-full border-4 border-white"
            />
        )}
      </label>
      <input
          type="file"
          accept="image/*"
          id="profile-image"
          className="hidden"
          onChange={handleImageChange}
      />
    </div>
    
  );
};



export default ProfilePicture;

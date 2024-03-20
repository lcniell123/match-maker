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
            alt="Profile"
            style={{
              width: 100,
              height: 100,
              borderRadius: "50%",
              objectFit: "cover",
              marginTop: 10,
            }}
          />
        ) : (
          <div
            style={{
              width: 100,
              height: 100,
              borderRadius: "50%",
              backgroundColor: "#ccc",
              marginTop: 10,
            }}
          ></div>
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

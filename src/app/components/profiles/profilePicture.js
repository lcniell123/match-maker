import React, { useState, useEffect } from "react";
import { uploadData } from "aws-amplify/storage";
import { getCurrentUser } from "aws-amplify/auth";
import { getUrl } from "aws-amplify/storage";

const ProfilePicture = ({ userName }) => {
  const [image, setImage] = useState(
    "https://mm-bucket191228-dev.s3.us-east-2.amazonaws.com/public/default-profile-pic.jpg"
  );
  useEffect(() => {
    setImage(
      `https://mm-bucket191228-dev.s3.us-east-2.amazonaws.com/public/${userName}-profile-pic.jpg`
    );
  }, [userName]);

  //check to see if profile bg exists
  async function checkFileExists() {
    if (userName.length > 0) {
      const url = await getUrl({
        key: `${userName}-profile-pic.jpg`,
        options: {
          validateObjectExistence: true,
        },
      });
      if (url.url.length > 0) {
        setImage(url.url);
      }
    }
  }
  checkFileExists();
  async function handleImageChange(e) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = async () => {
      const filename = file.name;
      try {
        const result = await uploadData({
          key: `${userName}-profile-pic.jpg`,
          data: file,
          options: {
            accessLevel: "guest", // defaults to `guest` but can be 'private' | 'protected' | 'guest'
          },
        }).result;
        window.location.reload();
      } catch (error) {
        console.log("Error : ", error);
      }
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      setImage(null); // Reset image state if no file is chosen
      localStorage.removeItem("profilePicture"); // Remove image URL from local storage
    }
  }

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
        onClick={handleImageChange}
      />
    </div>
  );
};

export default ProfilePicture;

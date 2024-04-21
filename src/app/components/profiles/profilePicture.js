import React, { useState, useEffect } from "react";
import { uploadData } from "aws-amplify/storage";
import * as mutations from "@/graphql/mutations";
import {generateClient} from "aws-amplify/api";
import {getCurrentUser} from "aws-amplify/auth";



export default function ProfilePicture () {
  const [image, setImage] = useState(null);
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const client = generateClient();

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

  useEffect(() => {
    setImage(
      `https://matchmaker-storage-fb200466191228-dev.s3.us-east-2.amazonaws.com/public/${userName}-profile-pic.jpg`
    );
  }, [userName]);

  async function handleImageChange(e) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = async () => {
      try {
        const result = await uploadData({
          key: `${userName}-profile-pic.jpg`,
          data: file,
          options: {
            accessLevel: "guest", // defaults to `guest` but can be 'private' | 'protected' | 'guest'
          },
        }).result;
        console.log("Succeeded: ", result);

        await client.graphql({
            query: mutations.updateProfile,
            variables: {
                input: {
                    id: userId,
                    photo: image
                }
            }
        });

        window.location.reload();
      } catch (error) {
        console.log("Error : ", error);
      }
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }

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
        onClick={handleImageChange}
      />
    </div>
  );
};



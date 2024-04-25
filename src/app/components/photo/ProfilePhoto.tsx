import { getCurrentUser } from "aws-amplify/auth";
import { getUrl } from "aws-amplify/storage";
import React, { useState } from "react";

const ProfilePhoto: React.FC = () => {
  const [userName, setUserName] = useState("");
  const [fileName, setFileName] = useState("default-profile-pic.jpg");

  const user = getCurrentUser();
  user.then((item) => {
    setUserName(item.username);
  });

  //check to see if profile bg exists
  async function checkFileExists() {
    if (userName.length > 0) {
      const url = await getUrl({
        key: `${userName}-profile-pic.jpg`,
        options: {
          validateObjectExistence: true,
        },
      });
      if (url.url.pathname) {
        setFileName(`${userName}-profile-pic.jpg`);
      }
      console.log(url);
    }
  }

  checkFileExists();

  return (
    <>
      <img
        src={`https://mm-bucket191228-dev.s3.us-east-2.amazonaws.com/public/${fileName}`}
        alt="Profile Photo"
        className="w-32 h-32 rounded-full border-4 border-white"
      />
      <>rest</>
    </>
  );
};

export default ProfilePhoto;

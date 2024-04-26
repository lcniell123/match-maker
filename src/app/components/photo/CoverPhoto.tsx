import React, { useState } from "react";
import ProfilePicture from "@/app/components/profiles/profilePicture";
import { getCurrentUser } from "aws-amplify/auth";
import { list, getUrl } from "aws-amplify/storage";

const CoverPhoto: React.FC = () => {
  const [userName, setUserName] = useState("");
  const [hasBg, setHasBg] = useState(false);
  const [bgFileName, setBgFileName] = useState("default-bg.jpg");

  async function currentAuthenticatedUser() {
    try {
      const { username, userId } = await getCurrentUser();
      setUserName(username);
    } catch (err) {
      console.log(err);
    }
  }

  //create template name if no coverphoto is available
  async function checkFileExists() {
    if (userName && userName.length > 0) {
      const url = await getUrl({
        key: `${userName}-background-pic.jpg`,
        options: {
          validateObjectExistence: true,
        },
      });
      if (url.url.pathname) {
        setBgFileName(`${userName}-background-pic.jpg`);
      }
    }
  }

  const files = currentAuthenticatedUser().then(() => checkFileExists());
  files.then((file) => {
    console.log(file);
  });
  return (
    <div className="relative h-64 w-full">
      <img
        src={`https://mm-bucket191228-dev.s3.us-east-2.amazonaws.com/public/${bgFileName}`}
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

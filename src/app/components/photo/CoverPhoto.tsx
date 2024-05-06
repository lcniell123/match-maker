import React, { useEffect, useState } from "react";
import ProfilePicture from "@/app/components/profiles/profilePicture";
import { getCurrentUser } from "aws-amplify/auth";
import { list, getUrl } from "aws-amplify/storage";

const CoverPhoto: React.FC = () => {
  const [userName, setUserName] = useState("");
  const [hasBg, setHasBg] = useState(false);
  const [bgFileName, setBgFileName] = useState(
    "https://mm-bucket191228-dev.s3.us-east-2.amazonaws.com/public/default-bg.jpg"
  );

  async function currentAuthenticatedUser() {
    try {
      const { username, userId } = await getCurrentUser();
      setUserName(username);
      // setUserId(userId);

      if (username) {
        await getUrl({
          key: `${username}-background-pic.jpg`,
          options: {
            validateObjectExistence: true,
          },
        }).then((url) => {
          console.log("this is url:", url.url);
          if (url && url.url.pathname.includes(username)) {
            setBgFileName(
              `https://mm-bucket191228-dev.s3.us-east-2.amazonaws.com/public/${username}-background-pic.jpg`
            );
          }
        });
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    currentAuthenticatedUser();
  }, []);

  // async function currentAuthenticatedUser() {
  //   try {
  //     const { username, userId } = await getCurrentUser();
  //     setUserName(username);
  //     //checkFileExists();

  //     //setBgFileName(`${userName}-background-pic.jpg`);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  // currentAuthenticatedUser();

  // async function checkFileExists() {
  //   if (userName.length > 0) {
  //     const url = await getUrl({
  //       key: `${userName}-background-pic.jpg`,
  //       options: {
  //         validateObjectExistence: true,
  //       },
  //     });
  //     // console.log("THISISURL: ", url);
  //     if (url.url) {
  //       /// console.log("THISISURL: ", url.url);
  //       setBgFileName(`${userName}-background-pic.jpg`);
  //     }
  //   }
  // }

  //check to see if profile bg exists
  // async function checkFileExists() {
  //   if (userName.length > 0) {
  //     const url = await getUrl({
  //       key: `${userName}-background-pic.jpg`,
  //       options: {
  //         validateObjectExistence: true,
  //       },
  //     });
  //     if (url && url.url.pathname) {
  //       setBgFileName(`${userName}-background-pic.jpg`);
  //     }
  //     console.log(url);
  //   }
  // }

  // checkFileExists();

  return (
    <div className="relative h-64 w-full">
      <img
        src={bgFileName}
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

import { getCurrentUser } from "aws-amplify/auth";
import React, { useState } from "react";

const ProfilePhoto: React.FC = () => {
  const [userName, setUserName] = useState("");
  const user = getCurrentUser();
  user.then((item) => {
    setUserName(item.username);
  });

  return (
    <>
      <img
        src={`https://mm-bucket191228-dev.s3.us-east-2.amazonaws.com/public/${userName}-profile-pic.jpg`}
        alt="Profile Photo"
        className="w-32 h-32 rounded-full border-4 border-white"
      />
      <>rest</>
    </>
  );
};

export default ProfilePhoto;

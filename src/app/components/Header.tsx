import {
  WithAuthenticatorProps,
  withAuthenticator,
} from "@aws-amplify/ui-react";
import ProfilePicture from "./profiles/profilePicture";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { getCurrentUser } from "aws-amplify/auth";

function Header() {
  const router = useRouter();
  const [userName, setUserName] = useState("");

  async function currentAuthenticatedUser() {
    try {
      const { username } = await getCurrentUser();
      setUserName(username);
    } catch (err) {
      console.log(err);
    }
  }
  currentAuthenticatedUser();

  return (
    <>
      <h1 className="text-3xl font-bold text-center mb-4">
        Welcome, {userName}{" "}
      </h1>
      <header className="py-12 nav">
        <main className="mt-8 flex-grow flex justify-center items-center">
          <div className="max-w-screen-sm mx-auto p-4">
            <div className="flex justify-center mt-4 space-x-4"></div>
            <ProfilePicture
              handleEditPicture={"setEditingPicture"}
              userProfilePicture={"userProfilePicture"}
            />
            <div className="flex justify-center mt-4 space-x-4">
              <button
                onClick={() => router.push("/profile")}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Profile
              </button>
              <button
                onClick={() => router.push("/friends")}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Friends
              </button>
              <button
                onClick={() => router.push("/groups")}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Groups
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                onClick={() => router.push("/matching")}
              >
                Matching
              </button>
            </div>
          </div>
        </main>
      </header>
    </>
  );
}

export default Header;

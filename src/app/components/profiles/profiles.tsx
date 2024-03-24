"use client";

import { useRouter } from "next/navigation";
//import * as mutations from '@/graphql/mutations';
// 1. Add the queries as an import
//import * as queries from '@/graphql/queries';
import { generateClient } from "aws-amplify/api";
import { useEffect, useState } from "react";
import ProfileDescription from "./profileDescription";
import EditProfile from "./editProfile";
import ProfilePicture from "./profilePicture";

const client = generateClient();

export default function Profiles(profile: any) {
  const router = useRouter();

  const [allProfiles, setAllProfiles] = useState<any>([]);
  const [newProfiles, setNewProfiles] = useState<any>([]);

  const [editingProfile, setEditingProfile] = useState(false);
  const [userProfilePicture, setUserProfilePicture] = useState(null);
  const [formData, setFormData] = useState({
    /* initial form data */
  });
  const [editingPicture, setEditingPicture] = useState(false);

  useEffect(() => {
    // Fetch user profile data from the backend or wherever it's stored
    // Setting a mock user profile with attributes
    const mockUser = {
      /* mock user data */
    };
    setFormData(mockUser);
    //  setUserProfilePicture(mockUser.profilePicture);
  }, []);

  const handleEditProfile = () => {
    setEditingProfile(true);
  };

  const handleSaveProfile = () => {
    setEditingProfile(false);
    // Logic to save profile changes
  };

  const handleCancelEdit = () => {
    setEditingProfile(false);
    // Revert changes to the user's original profile data
  };

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDeleteProfile = () => {
    console.log("Deleting profile...");
    // Logic to delete the user's profile
  };

  async function updateProfile(formData: FormData) {
    const profileDetails = {
      id: "1f3cbde9-e3bb-471e-8c75-1175a8c21dcd",
      description: formData.get("description")?.toString() ?? "",
    };

    //     const {data} = await client.graphql({
    //         query: mutations.updateProfile,
    //         variables: { input: profileDetails }
    //       });
  }

  //     // console.log("data",data.data)
  //     const  data = client.graphql({
  //       query: queries.listProfiles
  //     });
  //     useEffect(()=>{

  //       data.then((d)=>{
  //         console.log(d.data.listProfiles.items)
  //         setAllProfiles(d.data.listProfiles.items)

  //       })
  //     },[])

  //     useEffect(()=>{
  //     setNewProfiles(allProfiles)
  //     },[allProfiles])

  //     const handleRefresh = () => {
  //       router.push('/')
  //       router.refresh();
  //     };

  return (
    <div className="max-w-screen-lg mx-auto bg-gray-800 rounded-lg shadow-md p-6 mb-6 w-screen">
      <div className="max-w-screen-sm mx-auto p-4">
        <div className="mb-4">
          <ProfilePicture
            handleEditPicture={setEditingPicture}
            userProfilePicture={userProfilePicture}
          />
          {/* Nav bar with buttons */}
          {!editingProfile && (
            <div className="flex justify-center mt-4 space-x-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Profile
              </button>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Friends
              </button>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Group Activities
              </button>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Matching
              </button>
            </div>
          )}
        </div>
        {!editingProfile && (
          <ProfileDescription
            formData={formData}
            handleEditProfile={() => setEditingProfile(true)}
          />
        )}
        {editingProfile && (
          <EditProfile
            formData={formData}
            handleChange={handleChange}
            editingProfile={editingProfile}
            handleSaveProfile={handleSaveProfile}
            handleCancelEdit={() => setEditingProfile(false)}
            handleDeleteProfile={handleDeleteProfile}
            handlePictureChange={undefined}
          />
        )}
      </div>

      {/* <form action={updateProfile}>
        <textarea name="description" placeholder={newProfiles[0] && newProfiles[0].description && newProfiles[0].description ? newProfiles[0].description : "add description"} />
        <br/>
        <button type="submit" onClick={handleRefresh} >Update</button>
      </form> */}
    </div>
  );
}

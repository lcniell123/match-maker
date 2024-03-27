import React, { useEffect, useState } from "react";
import * as mutations from "@/graphql/mutations";
import { generateClient } from "aws-amplify/api";

const EditProfile = ({ formData }) => {
  const [profileInfo, setProfileInfo] = useState();
  const client = generateClient();

  useEffect(() => {
    setProfileInfo(formData);
  }, []);

  function updateData() {
    const raw = client.graphql({
      query: mutations.updateProfile,
      variables: {
        input: {
          id: profileInfo.id,
          name: profileInfo.name,
          age: profileInfo.age,
          behaviour: profileInfo.behaviour,
          bio: profileInfo.bio,
          country: profileInfo.country,
          gamePreference: profileInfo.gamePreference,
          languages: profileInfo.languages,
          description: profileInfo.description,
          playStyle: profileInfo.playStyle,
          skillLevel: profileInfo.skillLevel,
          timeZone: profileInfo.timeZone,
          zipCode: profileInfo.zipCode,
        },
      },
    });
    raw.then((value) => {
      console.log("this is raw", value);
    });
  }

  return (
    <div className="max-w-screen-lg mx-auto bg-white rounded-lg shadow-md p-6 mb-6 w-full">
      {formData && (
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
          {profileInfo && (
            <>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name:
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder={profileInfo.name ?? "-"}
                value={profileInfo.name}
                onChange={(e) => {
                  setProfileInfo((prevState) => ({
                    ...prevState,
                    name: e.target.value,
                  }));
                }}
                className="border-b border-gray-300 p-2 w-full focus:outline-none"
              />
              <div className="mb-6">
                <label
                  htmlFor="age"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Age:{" "}
                </label>
                <input
                  id="age"
                  type="text"
                  name="age"
                  placeholder={profileInfo.age ?? "-"}
                  value={profileInfo.age}
                  onChange={(e) => {
                    setProfileInfo((prevState) => ({
                      ...prevState,
                      age: e.target.value,
                    }));
                  }}
                  className="border-b border-gray-300 p-2 w-full focus:outline-none"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="language"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Languages:{" "}
                </label>
                <input
                  id="language"
                  type="text"
                  name="language"
                  placeholder={profileInfo.languages ?? "-"}
                  value={profileInfo.languages}
                  onChange={(e) => {
                    setProfileInfo((prevState) => ({
                      ...prevState,
                      languages: e.target.value,
                    }));
                  }}
                  className="border-b border-gray-300 p-2 w-full focus:outline-none"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="bio"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Bio:{" "}
                </label>
                <input
                  id="bio"
                  type="text"
                  name="bio"
                  value={profileInfo.bio}
                  onChange={(e) => {
                    setProfileInfo((prevState) => ({
                      ...prevState,
                      bio: e.target.value,
                    }));
                  }}
                  className="border-b border-gray-300 p-2 w-full focus:outline-none"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Country:{" "}
                </label>
                <input
                  id="country"
                  type="text"
                  name="country"
                  value={profileInfo.country}
                  onChange={(e) => {
                    setProfileInfo((prevState) => ({
                      ...prevState,
                      country: e.target.value,
                    }));
                  }}
                  className="border-b border-gray-300 p-2 w-full focus:outline-none"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="zipCode"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Zip Code:{" "}
                </label>
                <input
                  id="zipCode"
                  type="text"
                  name="zipCode"
                  value={profileInfo.zipCode}
                  onChange={(e) => {
                    setProfileInfo((prevState) => ({
                      ...prevState,
                      zipcode: e.target.value,
                    }));
                  }}
                  className="border-b border-gray-300 p-2 w-full focus:outline-none"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="timeZone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Time Zone:{" "}
                </label>
                <input
                  id="timeZone"
                  type="text"
                  name="timeZone"
                  value={profileInfo.timeZone}
                  onChange={(e) => {
                    setProfileInfo((prevState) => ({
                      ...prevState,
                      timeZone: e.target.value,
                    }));
                  }}
                  className="border-b border-gray-300 p-2 w-full focus:outline-none"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="gamePreference"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Game Preference:{" "}
                </label>
                <input
                  id="gamePreference"
                  type="text"
                  name="gamePreference"
                  value={profileInfo.gamePreference}
                  onChange={(e) => {
                    setProfileInfo((prevState) => ({
                      ...prevState,
                      gamePreference: e.target.value,
                    }));
                  }}
                  className="border-b border-gray-300 p-2 w-full focus:outline-none"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="behavior"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Behavior:{" "}
                </label>
                <select
                  id="behavior"
                  name="behavior"
                  value={profileInfo.behaviour}
                  onChange={(e) => {
                    setProfileInfo((prevState) => ({
                      ...prevState,
                      behaviour: e.target.value,
                    }));
                  }}
                  className="border-b border-gray-300 p-2 w-full focus:outline-none"
                >
                  <option value="select">Select Behavior</option>
                  <option value="friendly">Friendly</option>
                  <option value="competitive">Competitive</option>
                  <option value="teamPlayer">Team Player</option>
                  <option value="helpfil">Helpful</option>
                  <option value="aggressive">Aggressive</option>
                  <option value="troll">Troll</option>
                </select>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="skillLevel"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Skill Level:{" "}
                </label>
                <select
                  id="skillLevel"
                  name="skillLevel"
                  value={profileInfo.skillLevel}
                  onChange={(e) => {
                    setProfileInfo((prevState) => ({
                      ...prevState,
                      skillLevel: e.target.value,
                    }));
                  }}
                  className="border-b border-gray-300 p-2 w-full focus:outline-none"
                >
                  <option value="Select">Select Skill Level</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="playStyle"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Play Style:{" "}
                </label>
                <select
                  id="playStyle"
                  name="playStyle"
                  value={profileInfo.playStyle}
                  onChange={(e) => {
                    setProfileInfo((prevState) => ({
                      ...prevState,
                      playStyle: e.target.value,
                    }));
                  }}
                  className="border-b border-gray-300 p-2 w-full focus:outline-none"
                >
                  <option value="select">Select Play Style</option>
                  <option value="aggressive">Aggressive/Offensive</option>
                  <option value="defensive">Defensive/Tactical</option>
                  <option value="supportive">Supportive/Team-oriented</option>
                  <option value="stealthy">Stealthy/Strategic</option>
                  <option value="explorative">Explorative/Completionist</option>
                  <option value="completitive">Completitive/PvP-focised</option>
                  <option value="casual">Casual/Relaxed</option>
                </select>
              </div>{" "}
              <button
                onClick={updateData}
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mr-2"
              >
                Save
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default EditProfile;

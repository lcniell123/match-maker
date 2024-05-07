import React, { useEffect, useState } from "react";
import * as mutations from "@/graphql/mutations";
import { generateClient } from "aws-amplify/api";
import { uploadData } from "aws-amplify/storage";
import { getCurrentUser } from "aws-amplify/auth";

// import { useRouter } from "next/navigation";
import { useRouter } from "next/navigation";
const EditProfile = ({ formData, handleCancelProfile }) => {
  // const router = useRouter();

  const [profileInfo, setProfileInfo] = useState({});
  const [userName, setUserName] = useState("");
  const [background, setBackground] = useState("");
  const [showInfo, setShowInfo] = useState(true);
  const client = generateClient();

  useEffect(() => {
    async function currentAuthenticatedUser() {
      try {
        const user = await getCurrentUser();
        console.log("this is the user:", user);
        setUserName(user.username);
      } catch (err) {
        console.log(err);
      }
    }

    currentAuthenticatedUser();
  }, []);

  // convert prop to state
  useEffect(() => {
    setProfileInfo(formData);
  }, []);

  // update Handler
  function updateData() {
    const values = {
      id: profileInfo.id ?? "",
      name: profileInfo.name ?? "",
      age: profileInfo.age ?? "",
      language: profileInfo.language ?? "",
      bio: profileInfo.bio ?? "",
      country: profileInfo.country ?? "",
      zipCode: profileInfo.zipCode ?? "",
      timeZone: profileInfo.timeZone ?? "",
      gamePreference: profileInfo.gamePreference ?? "",
      skillLevel: profileInfo.skillLevel ?? "",
      playStyle: profileInfo.playStyle ?? "",
      behaviour: profileInfo.behaviour ?? "",
      favoriteGame: profileInfo.favoriteGame ?? "",
      preferredGenre: profileInfo.preferredGenre ?? "",
      timeAvailability: profileInfo.timeAvailability ?? "",
      preferredTeammateAgeRange: profileInfo.preferredTeammateAgeRange ?? "",
      preferredGameMode: profileInfo.preferredGameMode ?? "",
      preferredRole: profileInfo.preferredRole ?? "",
      flexibility: profileInfo.flexibility ?? "",
      communicationPreference: profileInfo.communicationPreference ?? "",
      toleranceLevel: profileInfo.toleranceLevel ?? "",
      teamworkLevel: profileInfo.teamworkLevel ?? "",
      competitivenessLevel: profileInfo.competitivenessLevel ?? "",
    };
    const raw = client.graphql({
      query: mutations.updateProfile,
      variables: { input: values },
    });

    raw.then((value) => {
      window.location.reload();
    });
  }

  async function handleImageChange(e) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = async () => {
      const filename = file.name;
      try {
        const result = await uploadData({
          key: `${userName}-background-pic.jpg`,
          data: file,
          options: {
            accessLevel: "guest", // defaults to `guest` but can be 'private' | 'protected' | 'guest'
          },
        }).result;
        console.log("Succeeded: ", result);
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
    showInfo && (
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
                  Name*:
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  placeholder={profileInfo.name ?? "-"}
                  value={profileInfo.name ?? "-"}
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
                    Age*:{" "}
                  </label>
                  <input
                    id="age"
                    type="text"
                    name="age"
                    placeholder={profileInfo.age ?? "-"}
                    value={profileInfo.age ?? ""}
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
                    Language*:{" "}
                  </label>
                  <select
                      id="language"
                      type="text"
                      name="language"
                      placeholder={profileInfo.language ?? "-"}
                      value={profileInfo.language ?? ""}
                      onChange={(e) => {
                        setProfileInfo((prevState) => ({
                          ...prevState,
                          language: e.target.value,
                        }));
                      }}
                      className="border-b border-gray-300 p-2 w-full focus:outline-none"
                  >
                    <option value="">Select...</option>
                    <option value="English">English</option>
                    <option value="Spanish">Spanish</option>
                    <option value="Korean">Korean</option>
                    <option value="Japanese">Japanese</option>
                    <option value="Chinese">Chinese</option>
                    <option value="German">German</option>
                    <option value="Swedish">Swedish</option>
                    <option value="French">French</option>
                    <option value="Portuguese">Portuguese</option>
                  </select>
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
                    value={profileInfo.bio ?? ""}
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
                    Country*:{" "}
                  </label>
                  <select
                      id="country"
                      name="country"
                      value={profileInfo.country ?? ""}
                      onChange={(e) => {
                        setProfileInfo((prevState) => ({
                          ...prevState,
                          country: e.target.value,
                        }));
                      }}
                      className="border-b border-gray-300 p-2 w-full focus:outline-none"
                  >
                    <option value="select">Select...</option>
                    <option value="United States">United States</option>
                    <option value="Mexico">Mexico</option>
                    <option value="South Korea">South Korea</option>
                    <option value="Japan">Japan</option>
                    <option value="China">China</option>
                    <option value="Germany">Germany</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Sweden">Sweden</option>
                    <option value="Canada">Canada</option>
                    <option value="Brazil">Brazil</option>
                    <option value="Australia">Australia</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="zipCode"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Zip Code*:{" "}
                  </label>
                  <input
                    id="zipCode"
                    type="text"
                    name="zipCode"
                    value={profileInfo.zipCode ?? ""}
                    onChange={(e) => {
                      setProfileInfo((prevState) => ({
                        ...prevState,
                        zipCode: e.target.value,
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
                  <select
                    id="timeZone"
                    type="text"
                    name="timeZone"
                    value={profileInfo.timeZone ?? ""}
                    onChange={(e) => {
                      setProfileInfo((prevState) => ({
                        ...prevState,
                        timeZone: e.target.value,
                      }));
                    }}
                    className="border-b border-gray-300 p-2 w-full focus:outline-none"
                  >
                    <option value="">Select...</option>
                    <option value="(GMT-4:00) Eastern Time">(GMT-4:00) Eastern Time</option>
                    <option value="(GMT-5:00) Central Time">(GMT-5:00) Central Time</option>
                    <option value="(GMT-7:00) Pacific Time">(GMT-7:00) Pacific Time</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="favoriteGame"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Games you would like to find team mates for:{" "}
                  </label>
                  <select
                      id="favoriteGame"
                      type="text"
                      name="favoriteGame"
                      value={profileInfo.gamePreference ?? ""}
                      onChange={(e) => {
                        setProfileInfo((prevState) => ({
                          ...prevState,
                          gamePreference: e.target.value,
                        }));
                      }}
                      className="border-b border-gray-300 p-2 w-full focus:outline-none"
                  >
                    <option value="">Select...</option>
                    <option value="Call of Duty">Call of Duty</option>
                    <option value="Overwatch">Overwatch</option>
                    <option value="The Witcher 3: Wild Hunt">The Witcher 3: Wild Hunt</option>
                    <option value="Fortnite">Fortnite</option>
                    <option value="Apex Legends">Apex Legends</option>
                    <option value="FIFA series">FIFA series</option>
                    <option value="Red Dead Redemption 2">Red Dead Redemption 2</option>
                    <option value="Assassin's Creed Valhalla">Assassin's Creed Valhalla</option>
                    <option value="Final Fantasy XIV">Final Fantasy XIV</option>
                    <option value="Rocket League">Rocket League</option>
                    <option value="League of Legends">League of Legends</option>
                    <option value="Dota 2">Dota 2</option>
                    <option value="Counter-Strike: Global Offensive">Counter-Strike: Global Offensive</option>
                    <option value="Minecraft">Minecraft</option>
                    <option value="World of Warcraft">World of Warcraft</option>
                    <option value="Among Us">Among Us</option>
                    <option value="Valorant">Valorant</option>
                    <option value="Genshin Impact">Genshin Impact</option>
                    <option value="Halo Infinite">Halo Infinite</option>
                    <option value="Rainbow Six Siege">Rainbow Six Siege</option>
                  </select>
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
                      value={profileInfo.behaviour ?? ""}
                      onChange={(e) => {
                        setProfileInfo((prevState) => ({
                          ...prevState,
                          behaviour: e.target.value,
                        }));
                      }}
                      className="border-b border-gray-300 p-2 w-full focus:outline-none"
                  >
                    <option value="">Select...</option>
                    <option value="Friendly">Friendly</option>
                    <option value="Competitive">Competitive</option>
                    <option value="Team Player">Team Player</option>
                    <option value="Helpful">Helpful</option>
                    <option value="Aggressive">Aggressive</option>
                    <option value="Troll">Troll</option>
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
                    <option value="Select">Select...</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="preferredGenre"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Preferred Genre:{" "}
                  </label>
                  <select
                      id="preferredGenre"
                      type="text"
                      name="preferredGenre"
                      value={profileInfo.preferredGenre ?? ""}
                      onChange={(e) => {
                        setProfileInfo((prevState) => ({
                          ...prevState,
                          preferredGenre: e.target.value,
                        }));
                      }}
                      className="border-b border-gray-300 p-2 w-full focus:outline-none"
                  >
                    <option>Select...</option>
                    <option>Shooter</option>
                    <option>Action</option>
                    <option>Adventure</option>
                    <option>Simulation</option>
                    <option>Multiplayer Online Battle Arena</option>
                    <option>Role-Playing Game</option>
                    <option>Strategy</option>
                    <option>Puzzle</option>
                    <option>Sports</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label
                      htmlFor="timeAvailability"
                      className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Time Availability:{" "}
                  </label>
                  <select
                      id="timeAvailability"
                      type="text"
                      name="timeAvailability"
                      value={profileInfo.timeAvailability ?? ""}
                      onChange={(e) => {
                        setProfileInfo((prevState) => ({
                          ...prevState,
                          timeAvailability: e.target.value,
                        }));
                      }}
                      className="border-b border-gray-300 p-2 w-full focus:outline-none"
                  >
                    <option value="">Select...</option>
                    <option value="(6-12 AM) Weekdays Morning">(6-12 AM) Weekdays Morning</option>
                    <option value="(12-5 PM) Weekdays Afternoon">(12-5 PM) Weekdays Afternoon</option>
                    <option value="(5-9 PM) Weekdays Evening">(5-9 PM) Weekdays Evening</option>
                    <option value="(9-6 AM) Weekdays Night">(9-6 AM) Weekdays Night</option>
                    <option value="(6-12 AM) Weekends Morning">(6-12 AM) Weekends Morning</option>
                    <option value="(12-5 PM) Weekends Afternoon">(12-5 PM) Weekends Afternoon</option>
                    <option value="(5-9 PM) Weekends Evening">(5-9 PM) Weekends Evening</option>
                    <option value="(9-6 AM) Weekends Night">(9-6 AM) Weekends Night</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label
                      htmlFor="preferredTeammateAgeRange"
                      className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Preferred Teammates Age Range:{" "}
                  </label>
                  <select
                      id="preferredTeammateAgeRange"
                      type="text"
                      name="preferredTeammateAgeRange"
                      value={profileInfo.preferredTeammateAgeRange ?? ""}
                      onChange={(e) => {
                        setProfileInfo((prevState) => ({
                          ...prevState,
                          preferredTeammateAgeRange: e.target.value,
                        }));
                      }}
                      className="border-b border-gray-300 p-2 w-full focus:outline-none"
                  >
                    <option value="No preference">No preference</option>
                    <option value="16-24">16-24</option>
                    <option value="25-34">25-34</option>
                    <option value="35-44">35-44</option>
                    <option value="45-54">45-54</option>
                    <option value="55+">55+</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label
                      htmlFor="preferredGameMode"
                      className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Preferred Game Mode:{" "}
                  </label>
                  <select
                      id="preferredGameMode"
                      type="text"
                      name="preferredGameMode"
                    value={profileInfo.preferredGameMode ?? ""}
                    onChange={(e) => {
                      setProfileInfo((prevState) => ({
                        ...prevState,
                        preferredGameMode: e.target.value,
                      }));
                    }}
                    className="border-b border-gray-300 p-2 w-full focus:outline-none"
                  >
                    <option value="">Select...</option>
                    <option value="Ranked">Ranked</option>
                    <option value="Casual">Casual</option>
                    <option value="Cooperative">Cooperative</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="preferredRole"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Preferred Role*:{" "}
                  </label>
                  <select
                      id="preferredRole"
                      type="text"
                      name="preferredRole"
                      value={profileInfo.preferredRole ?? ""}
                      onChange={(e) => {
                        setProfileInfo((prevState) => ({
                          ...prevState,
                          preferredRole: e.target.value,
                        }));
                      }}
                      className="border-b border-gray-300 p-2 w-full focus:outline-none"
                  >
                    <option value="">Select...</option>
                    <option value="Tank">Tank</option>
                    <option value="Damage Per Second (DPS)">Damage Per Second (DPS)</option>
                    <option value="Support">Support</option>
                    <option value="Healer">Healer</option>
                    <option value="Utility">Utility</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="flexibility"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Flexibility:{" "}
                  </label>
                  <select
                    id="flexibility"
                    type="text"
                    name="flexibility"
                    value={profileInfo.flexibility ?? ""}
                    onChange={(e) => {
                      setProfileInfo((prevState) => ({
                        ...prevState,
                        flexibility: e.target.value,
                      }));
                    }}
                    className="border-b border-gray-300 p-2 w-full focus:outline-none"
                  >
                    <option value="">Select...</option>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="communicationPreference"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Communication Preference:{" "}
                  </label>
                  <select
                    id="communicationPreference"
                    type="text"
                    name="communicationPreference"
                    value={profileInfo.communicationPreference ?? ""}
                    onChange={(e) => {
                      setProfileInfo((prevState) => ({
                        ...prevState,
                        communicationPreference: e.target.value,
                      }));
                    }}
                    className="border-b border-gray-300 p-2 w-full focus:outline-none"
                  >
                    <option value="">Select...</option>
                    <option value="Voice Chat">Voice Chat</option>
                    <option value="Text Chat">Text Chat</option>
                    <option value="No Preference">No Preference</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="toleranceLevel"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Tolerance Level:{" "}
                  </label>
                  <select
                    id="toleranceLevel"
                    type="text"
                    name="toleranceLevel"
                    value={profileInfo.toleranceLevel ?? ""}
                    onChange={(e) => {
                      setProfileInfo((prevState) => ({
                        ...prevState,
                        toleranceLevel: e.target.value,
                      }));
                    }}
                    className="border-b border-gray-300 p-2 w-full focus:outline-none"
                  >
                    <option value="select">Select...</option>
                    <option value="Low">Low</option>
                    <option value="Average">Average</option>
                    <option value="High">High</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="teamworkLevel"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Teamwork Level:{" "}
                  </label>
                  <select
                    id="teamworkLevel"
                    type="text"
                    name="teamworkLevel"
                    value={profileInfo.teamworkLevel ?? ""}
                    onChange={(e) => {
                      setProfileInfo((prevState) => ({
                        ...prevState,
                        teamworkLevel: e.target.value,
                      }));
                    }}
                    className="border-b border-gray-300 p-2 w-full focus:outline-none"
                  >
                    <option value="select">Select...</option>
                    <option value="Low">Low</option>
                    <option value="Average">Average</option>
                    <option value="High">High</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="competitivenessLevel"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Competitiveness Level:{" "}
                  </label>
                  <select
                    id="competitivenessLevel"
                    type="text"
                    name="competitivenessLevel"
                    value={profileInfo.competitivenessLevel ?? ""}
                    onChange={(e) => {
                      setProfileInfo((prevState) => ({
                        ...prevState,
                        competitivenessLevel: e.target.value,
                      }));
                    }}
                    className="border-b border-gray-300 p-2 w-full focus:outline-none"
                  >
                    <option value="select">Select...</option>
                    <option value="Low">Low</option>
                    <option value="Average">Average</option>
                    <option value="High">High</option>
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
                    <option value="select">Select...</option>
                    <option value="Aggressive/Offensive">Aggressive/Offensive</option>
                    <option value="Defensive/Tactical">Defensive/Tactical</option>
                    <option value="Supportive/Team-oriented">Supportive/Team-oriented</option>
                    <option value="Stealthy/Strategic">Stealthy/Strategic</option>
                    <option value="Explorative/Completionist">Explorative/Completionist</option>
                    <option value="Competitive/PVP-focused">Competitive/PVP-focused</option>
                    <option value="Casual/Relaxed">Casual/Relaxed</option>
                  </select>
                </div>
                {" "}
                <div className="mb-6">
                  <label
                      htmlFor="playStyle"
                      className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Background Image:
                    <input type="file" onChange={handleImageChange}/>
                  </label>
                </div>
                <div className="flex justify-end">
                  <button
                      onClick={updateData}
                      className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mr-2"
                  >
                    Save
                  </button>
                  <button
                      onClick={handleCancelProfile}
                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mr-2"
                  >
                    Cancel
                  </button>
                  <button
                    //onClick={handleDeleteProfile}
                    className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                  >
                    Delete Profile
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    )
  );
};

export default EditProfile;

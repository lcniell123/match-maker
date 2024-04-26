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
      languages: profileInfo.languages ?? "",
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
                    Languages*:{" "}
                  </label>
                  <select
                    id="language"
                    type="text"
                    name="language"
                    placeholder={profileInfo.languages ?? "-"}
                    value={profileInfo.languages ?? ""}
                    onChange={(e) => {
                      setProfileInfo((prevState) => ({
                        ...prevState,
                        languages: e.target.value,
                      }));
                    }}
                    className="border-b border-gray-300 p-2 w-full focus:outline-none"
                  >
                    <option value="select">Select Language</option>
                    <option value="English">English</option>
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
                    type="text"
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
                    <option value="select">Select Country</option>
                    <option value="United States">United States</option>
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
                    <option value="select">Select Timezone</option>
                    <option value="EST">EST</option>
                    <option value="PST Korea">PST</option>
                    <option value="CT">CT</option>
                  </select>
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="gamePreference"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Favorite Game:{" "}
                  </label>
                  <select
                    id="gamePreference"
                    type="text"
                    name="gamePreference"
                    value={profileInfo.gamePreference ?? ""}
                    onChange={(e) => {
                      setProfileInfo((prevState) => ({
                        ...prevState,
                        gamePreference: e.target.value,
                      }));
                    }}
                    className="border-b border-gray-300 p-2 w-full focus:outline-none"
                  >
                    <option value="select">Select Game</option>
                    <option value="Call of Duty:">Call of Duty:</option>
                    <option value="Overwatch">Overwatch</option>
                    <option value="The Witcher 3: Wild Hunt">
                      The Witcher 3: Wild Hunt
                    </option>
                    <option value="Fortnite">Fortnite</option>
                    <option value="Apex Legends">Apex Legends</option>
                    <option value="FIFA series">FIFA series</option>
                    <option value="Red Dead Redemption 2">
                      Red Dead Redemption 2
                    </option>
                    <option value="Assassin's Creed Valhalla:">
                      Assassin's Creed Valhalla:
                    </option>
                    <option value="Final Fantasy XIV">Final Fantasy XIV</option>
                    <option value="Rocket League:">Rocket League:</option>
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
                    <option value="select">Select Behavior</option>
                    <option value="friendly">Friendly</option>
                    <option value="competitive">Competitive</option>
                    <option value="teamPlayer">Team Player</option>
                    <option value="helpful">Helpful</option>
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
                    <option value="select">Select Genre</option>
                    <option value="Action/Adventure:">Action/Adventure</option>
                    <option value="Role-Playing Game (RPG)">
                      Role-Playing Game (RPG)
                    </option>
                    <option value="Sports">Sports</option>
                    <option value="Strategy">Strategy</option>
                    <option value="First-Person Shooter (FPS)">
                      First-Person Shooter (FPS)
                    </option>
                    <option value="Platformer">Platformer</option>
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
                    <option value="select">Select Time</option>
                    <option value="Weekends Afternoon">
                      Weekends Afternoon
                    </option>
                    <option value="Weekends Evening">Weekends Evening</option>
                    <option value="Weekdays Afternoon">
                      Weekdays Afternoon
                    </option>
                    <option value="Weekdays Evening">Weekdays Evening</option>
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
                    <option value="select">Select Teammates Age Range</option>
                    <option value="18-25">18 - 25</option>
                    <option value="26-35">26 - 35</option>
                    <option value="36-45">36 - 45</option>
                    <option value="46-55">46 - 55</option>
                    <option value="56+">56+</option>
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
                    <option value="">Select Game Mode</option>
                    <option value="Single Player">Single Player</option>
                    <option value="Multiplayer">Multiplayer</option>
                    <option value="Cooperative">Cooperative</option>
                    <option value="Competitive">Competitive</option>
                    <option value="Battle Royale">Battle Royale</option>
                    <option value="Free for All">Free for All</option>
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
                    <option value="">Select Preferred Role</option>
                    <option value="Tank">Tank</option>
                    <option value="DPS (Damage Per Second)">
                      DPS (Damage Per Second)
                    </option>
                    <option value="Support/Healer">Support/Healer</option>
                    <option value="Bruiser/Off-Tank">Bruiser/Off-Tank</option>
                    <option value="Carry/Assassin">Carry/Assassin</option>
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
                    <option value="">Select Flexibility Level</option>
                    <option value="Very Flexible">Very Flexible</option>
                    <option value="Flexible">Flexible</option>
                    <option value="Moderate">Moderate</option>
                    <option value="Inflexible">Inflexible</option>
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
                    <option value="">Select Communication Preference</option>
                    <option value="Voice Chat">Voice Chat</option>
                    <option value="Text Chat">Text Chat</option>
                    <option value="No Communication">No Communication</option>
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
                    <option value="select">Select Tolerance Level</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
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
                    <option value="select">Select Teamwork Level</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
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
                    <option value="select">Select Competitiveness Level</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
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
                    <option value="select">Select Play Style</option>
                    <option value="aggressive">Aggressive/Offensive</option>
                    <option value="defensive">Defensive/Tactical</option>
                    <option value="supportive">Supportive/Team-oriented</option>
                    <option value="stealthy">Stealthy/Strategic</option>
                    <option value="explorative">
                      Explorative/Completionist
                    </option>
                    <option value="completitive">
                      Completitive/PvP-focised
                    </option>
                    <option value="casual">Casual/Relaxed</option>
                  </select>
                </div>{" "}
                <div className="mb-6">
                  <label
                    htmlFor="playStyle"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Background Image:
                    <input type="file" onChange={handleImageChange} />
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

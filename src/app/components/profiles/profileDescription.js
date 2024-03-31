import React from "react";

const ProfileDescription = ({ formData, handleEditProfile }) => {
  console.log("FFFFF", formData);
  return (
    <div className="max-w-screen-lg mx-auto bg-white rounded-lg shadow-md p-6 mb-6 w-full">
      {formData && (
        <>
          {" "}
          <h3 className="text-2xl font-semibold mb-4">Personal Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <p className="text-sm font-medium flex items-center mb-2">
                <span className="text-gray-600 mr-2">👤</span> Name: name{" "}
                {formData.name}
              </p>

              <p className="text-sm font-medium flex items-center mb-2">
                <span className="text-gray-600 mr-2">📅</span> Age:{" "}
                {formData.age}
              </p>
              <p className="text-sm font-medium flex items-center mb-2">
                <span className="text-gray-600 mr-2">🗣️</span> Languages:{" "}
                {formData.languages}
              </p>
              <p className="text-sm font-medium flex items-center mb-2">
                <span className="text-gray-600 mr-2">📝</span> Bio:{" "}
                {formData.bio}
              </p>
            </div>
            <div>
              <p className="text-sm font-medium flex items-center mb-2">
                <span className="text-gray-600 mr-2">🌍</span> Country:{" "}
                {formData.country}
              </p>
              <p className="text-sm font-medium flex items-center mb-2">
                <span className="text-gray-600 mr-2">🏠</span> Zip Code:{" "}
                {formData.zipCode}
              </p>
              <p className="text-sm font-medium flex items-center mb-2">
                <span className="text-gray-600 mr-2">⏰</span> Time Zone:{" "}
                {formData.timeZone}
              </p>
            </div>
          </div>
          <h3 className="text-2xl font-semibold mb-4">Gaming Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="mb-4">
              <p className="text-sm font-medium mb-2">
                <span className="text-gray-600 mr-2">🎮</span> Game Preference:{" "}
                {formData.gamePreference}
              </p>
              <p className="text-sm font-medium mb-2">
                <span className="text-gray-600 mr-2">💪</span> Skill Level:{" "}
                {formData.skillLevel}
              </p>
            </div>
            <div className="mb-4">
              <p className="text-sm font-medium mb-2">
                <span className="text-gray-600 mr-2">🎲</span> Play Style:{" "}
                {formData.playStyle}
              </p>
              <p className="text-sm font-medium mb-2">
                <span className="text-gray-600 mr-2">😊</span> Behaviour:{" "}
                {formData.behaviour}
              </p>
            </div>
          </div>
          <button
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 ease-in-out"
            onClick={handleEditProfile}
          >
            Edit
          </button>
        </>
      )}
    </div>
  );
};

export default ProfileDescription;

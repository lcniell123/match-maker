import React from "react";

const ProfileDescription = ({ formData, handleEditProfile }) => {
  return (
    <div className="max-w-screen-lg mx-auto bg-white rounded-lg shadow-md p-6 mb-6 w-full">
      {formData && (
        <>
          <div className="personal-info mb-8">
            <h3 className="text-2xl font-semibold mb-4">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium mb-2 flex items-center">
                  <span className="text-gray-600 mr-2">👤</span> Name: {formData.name}
                </p>
                <p className="text-sm font-medium mb-2 flex items-center">
                  <span className="text-gray-600 mr-2">📅</span> Age: {formData.age}
                </p>
                <p className="text-sm font-medium mb-2 flex items-center">
                  <span className="text-gray-600 mr-2">🗣️</span> Languages: {formData.languages}
                </p>
                <p className="text-sm font-medium mb-2 flex items-center">
                  <span className="text-gray-600 mr-2">📝</span> Bio: {formData.bio}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium mb-2 flex items-center">
                  <span className="text-gray-600 mr-2">🌍</span> Country: {formData.country}
                </p>
                <p className="text-sm font-medium mb-2 flex items-center">
                  <span className="text-gray-600 mr-2">🏠</span> Zip Code: {formData.zipCode}
                </p>
                <p className="text-sm font-medium mb-2 flex items-center">
                  <span className="text-gray-600 mr-2">⏰</span> Time Zone: {formData.timeZone}
                </p>
              </div>
            </div>
          </div>

          <div className="games mb-8">
            <h3 className="text-2xl font-semibold mb-4">Games</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium mb-2">
                  <span className="text-gray-600 mr-2">🎮</span> Favorite Game: {formData.gamePreference}
                </p>
                <p className="text-sm font-medium mb-2">
                  <span className="text-gray-600 mr-2">🎲</span> Preferred Genre: {formData.preferredGenre}
                </p>
                <p className="text-sm font-medium mb-2">
                  <span className="text-gray-600 mr-2">⏰</span> Time Availability: {formData.timeAvailability}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium mb-2">
                  <span className="text-gray-600 mr-2">👥</span> Preferred Teammates Age Range: {formData.preferredTeammateAgeRange}
                </p>
                <p className="text-sm font-medium mb-2">
                  <span className="text-gray-600 mr-2">⭐️</span> Skill Level: {formData.skillLevel}
                </p>
                <p className="text-sm font-medium mb-2">
                  <span className="text-gray-600 mr-2">🎮</span> Preferred Game Mode: {formData.preferredGameMode}
                </p>
              </div>
            </div>
          </div>

          <div className="gaming-approach mb-8">
            <h3 className="text-2xl font-semibold mb-4">Gaming Approach</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium mb-2">
                  <span className="text-gray-600 mr-2">🎮</span> Preferred Role in-game: {formData.preferredRole}
                </p>
                <p className="text-sm font-medium mb-2">
                  <span className="text-gray-600 mr-2">🎮</span> Play Style: {formData.playStyle}
                </p>
                <p className="text-sm font-medium mb-2">
                  <span className="text-gray-600 mr-2">🔄</span> Flexibility in Adopting: {formData.flexibility}
                </p>
              </div>
            </div>
          </div>

          <div className="attitude-communication mb-8">
            <h3 className="text-2xl font-semibold mb-4">Attitude and Communication</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium mb-2">
                  <span className="text-gray-600 mr-2">😊</span> Behaviour: {formData.behaviour}
                </p>
                <p className="text-sm font-medium mb-2">
                  <span className="text-gray-600 mr-2">💬</span> Communication Preference: {formData.communicationPreference}
                </p>
                <p className="text-sm font-medium mb-2">
                  <span className="text-gray-600 mr-2">🛑</span> Tolerance Level for Mistakes: {formData.toleranceLevel}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium mb-2">
                  <span className="text-gray-600 mr-2">🤝</span> Teamwork and Collaboration: {formData.teamworkLevel}
                </p>
                <p className="text-sm font-medium mb-2">
                  <span className="text-gray-600 mr-2">🏆</span> Competitiveness Level: {formData.competitivenessLevel}
                </p>
              </div>
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

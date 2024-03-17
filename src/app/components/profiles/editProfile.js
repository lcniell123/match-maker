import React from 'react';

const EditProfile = ({ formData, handleChange, handlePictureChange, editingProfile, handleSaveProfile, handleCancelEdit, handleDeleteProfile }) => {
  return (
    <div className="max-w-screen-lg mx-auto bg-white rounded-lg shadow-md p-6 mb-6 w-full">
    <div className='container mx-auto px-4 py-8'>
      <h2 className='text-2xl font-bold mb-4'>Edit Profile</h2>
      <form className='max-w-md mx-auto'>
      
          <div className='mb-6'>
            <label htmlFor='name' className='block text-sm font-medium text-gray-700 mb-1'>Name:</label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border-b border-gray-300 p-2 w-full focus:outline-none"

            />
          </div>

          <div className='mb-6'>
            <label htmlFor='age' className='block text-sm font-medium text-gray-700 mb-1'>Age: </label>
            <input
              id="age"
              type="text"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="border-b border-gray-300 p-2 w-full focus:outline-none"

            />
          </div>

          <div className='mb-6'>
            <label htmlFor='language' className='block text-sm font-medium text-gray-700 mb-1'>Languages: </label>
            <input
              id="language"
              type="text"
              name="language"
              value={formData.language}
              onChange={handleChange}
              className="border-b border-gray-300 p-2 w-full focus:outline-none"

            />
          </div>

          <div className='mb-6'>
            <label htmlFor='bio' className='block text-sm font-medium text-gray-700 mb-1'>Bio: </label>
            <input
              id="bio"
              type="text"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              className="border-b border-gray-300 p-2 w-full focus:outline-none"

            />
          </div>
          
          <div className='mb-6'>
            <label htmlFor='country' className='block text-sm font-medium text-gray-700 mb-1'>Country: </label>
            <input
              id="country"
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="border-b border-gray-300 p-2 w-full focus:outline-none"

            />
          </div>

          <div className='mb-6'>
            <label htmlFor='zipCode' className='block text-sm font-medium text-gray-700 mb-1'>Zip Code: </label>
            <input
              id="zipCode"
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              className="border-b border-gray-300 p-2 w-full focus:outline-none"

            />
          </div>

          <div className='mb-6'>
            <label htmlFor='timeZone' className='block text-sm font-medium text-gray-700 mb-1'>Time Zone: </label>
            <input
              id="timeZone"
              type="text"
              name="timeZone"
              value={formData.timeZone}
              onChange={handleChange}
              className="border-b border-gray-300 p-2 w-full focus:outline-none"

            />
          </div>

          <div className='mb-6'>
            <label htmlFor='gamePreference' className='block text-sm font-medium text-gray-700 mb-1'>Game Preference: </label>
            <input
              id="gamePreference"
              type="text"
              name="gamePreference"
              value={formData.gamePreference}
              onChange={handleChange}
              className="border-b border-gray-300 p-2 w-full focus:outline-none"

            />
          </div>

          <div className='mb-6'>
            <label htmlFor='behavior' className='block text-sm font-medium text-gray-700 mb-1'>Behavior: </label>
            <select
              id="behavior"
              name="behavior"
              value={formData.behavior}
              onChange={handleChange}
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

          <div className='mb-6'>
            <label htmlFor='skillLevel' className='block text-sm font-medium text-gray-700 mb-1'>Skill Level: </label>
            <select
              id="skillLevel"
              name="skillLevel"
              value={formData.skillLevel}
              onChange={handleChange}
              className="border-b border-gray-300 p-2 w-full focus:outline-none"

            >
              <option value="Select">Select Skill Level</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>

          <div className='mb-6'>
            <label htmlFor='playStyle' className='block text-sm font-medium text-gray-700 mb-1'>Play Style: </label>
            <select
              id="playStyle"
              name="playStyle"
              value={formData.playStyle}
              onChange={handleChange}
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
        </div>
        <div className="flex justify-end">
          
          <button onClick={handleSaveProfile} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mr-2">Save</button>
          <button onClick={handleCancelEdit} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 mr-2">Cancel</button>
          <button onClick={handleDeleteProfile} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Delete Profile</button>
        </div>
      </form>
      

    </div>
    </div>
  );
};

export default EditProfile;


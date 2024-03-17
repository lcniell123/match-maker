import React from 'react';

const HeaderImageUpload = ({ handleUpload }) => {
  return (
    <div className="bg-blue-500 p-4 mb-4">
      <input
        type="file"
        accept="image/*"
        onChange={handleUpload}
        className="hidden"
        id="headerImageUpload"
      />
      <label htmlFor="headerImageUpload" className="cursor-pointer text-white font-bold">
        Upload Header Image
      </label>
    </div>
  );
};

export default HeaderImageUpload;
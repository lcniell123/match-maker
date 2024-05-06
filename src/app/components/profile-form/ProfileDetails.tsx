import React, {useEffect, useState} from 'react';
import {PhotoIcon, UserCircleIcon} from '@heroicons/react/24/solid';
import {uploadData} from "aws-amplify/storage";
import {getCurrentUser} from "aws-amplify/auth";

interface ProfileDetailsProps {
    formData: any,
    handleChange: any
}

const ProfileDetails: React.FC<ProfileDetailsProps> = ({formData, handleChange}) => {
    const [profilePhoto, setProfilePhoto] = useState("");
    const [userId, setUserId] = useState("");
    const [userName, setUserName] = useState("");

    useEffect(() => {
        async function currentAuthenticatedUser() {
            try {
                const {username, userId} = await getCurrentUser();
                setUserName(username);
                setUserId(userId);
            } catch (err) {
                console.log(err);
            }
        }

        currentAuthenticatedUser();
    }, []);

    const handlePhotoChange = async (e: any, photoType: string) => {
        try {
            const file = e.target.files[0];
            const reader = new FileReader();

            reader.onload = async () => {
                try {
                    const result = await uploadData({
                        key: `${formData.name ?? file.filename}-${photoType}-pic.jpg`,
                        data: file,
                        options: {
                            accessLevel: "guest", // defaults to `guest` but can be 'private' | 'protected' | 'guest'
                        },
                    }).result;
                    console.log("Succeeded: ", result);
                    const storageLink = "https://matchmaker-storage-fb200466191228-dev.s3.us-east-2.amazonaws.com/public/";

                    // Update the form data state based on the photo type
                    if (photoType === 'profile') {
                        formData.photo = storageLink.concat(result.key);
                        setProfilePhoto(formData.photo);
                    } else if (photoType === 'cover') {
                        formData.coverPhoto = storageLink.concat(result.key);
                    }
                } catch (error) {
                    console.log("Error : ", error);
                }
            };

            if (file) {
                reader.readAsDataURL(file);
            }
        } catch (error) {
            console.error("Error uploading photo:", error);
        }
    };

    return (
        <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Profile Details</h2>
            <p className="mt-1+ text-sm leading-6 text-gray-600">
                This information will be visible to other users on the platform.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                        Username
                    </label>
                    <div className="mt-2">
                        <div
                            className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                            <input
                                readOnly
                                type="text"
                                name="name"
                                id="name"
                                value={userName}
                                className="p-2.5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                </div>
                <div className="col-span-full">
                    <label htmlFor="bio" className="block text-sm font-medium leading-6 text-gray-900">
                        Bio
                    </label>
                    <div className="mt-2">
                <textarea
                    required
                    id="bio"
                    name="bio"
                    rows={3}
                    value={formData.bio}
                    onChange={handleChange}
                    className="p-2.5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                    </div>
                    <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
                </div>

                <div className="col-span-full">
                    <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
                        Profile Photo
                    </label>
                    <div className="mt-2 flex items-center gap-x-3">
                        <label htmlFor="profile-image" className="cursor-pointer">
                            <img
                                src={profilePhoto || "/placeholder_avatar.jpg"}
                                alt="Profile Photo"
                                className="h-12 w-12 text-gray-300 rounded-full border-4 border-white"
                            />
                        </label>
                        <input
                            type="file"
                            id="photo"
                            name="photo"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => handlePhotoChange(e, 'profile')}
                            onClick={(e) => handlePhotoChange(e, 'profile')}
                        />
                    </div>
                </div>

                <div className="col-span-full">
                    <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                        Cover photo
                    </label>
                    <div
                        className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                        <div className="text-center">
                            <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true"/>
                            <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                <label
                                    htmlFor="cover-photo"
                                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                >
                                    <span>Upload a file</span>
                                    <input id="cover-photo"
                                           name="cover-photo"
                                           type="file"
                                           accept="image/*"
                                           className="sr-only"
                                           onChange={(e) => handlePhotoChange(e, 'cover')}
                                    />
                                </label>
                                <p className="pl-1">or drag and drop</p>
                            </div>
                            <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileDetails;
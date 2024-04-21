import React, { useEffect, useState } from 'react';
import ProfilePicture from "@/app/components/profiles/profilePicture";
import { getCurrentUser } from "aws-amplify/auth";
import * as queries from "@/graphql/queries";
import { generateClient } from "aws-amplify/api";
import { uploadData } from "aws-amplify/storage";
import * as mutations from "@/graphql/mutations";

const CoverPhoto: React.FC = () => {
    const [userName, setUserName] = useState("");
    const [userId, setUserId] = useState("");
    const [coverImage, setCoverImage] = useState("");
    const placeholderImage = '/placeholder_cover.jpg';
    const client = generateClient();

    useEffect(() => {
        async function fetchData() {
            try {
                const { username, userId } = await getCurrentUser();
                setUserName(username);
                setUserId(userId);

                const profileItem = await client.graphql({
                    query: queries.getProfile,
                    variables: { id: userId }
                });

                if (profileItem.data.getProfile) {
                    const fetchedCoverImage = profileItem.data.getProfile.coverPhoto ?? placeholderImage;
                    setCoverImage(fetchedCoverImage);
                }
            } catch (err) {
                console.log(err);
            }
        }
        fetchData();
    }, []);

    async function handleImageChange(e: any) {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = async () => {
            try {
                const result = await uploadData({
                    key: `${userName}-cover-pic.jpg`,
                    data: file,
                    options: {
                        accessLevel: "guest", // defaults to `guest` but can be 'private' | 'protected' | 'guest'
                    },
                }).result;
                console.log("Succeeded: ", result);
                setCoverImage(`https://matchmaker-storage-fb200466191228-dev.s3.us-east-2.amazonaws.com/public/${result.key}`);

                await client.graphql({
                    query: mutations.updateProfile,
                    variables: {
                        input: {
                            id: userId,
                            coverPhoto: coverImage,
                        }
                    }
                });

                window.location.reload();
            } catch (error) {
                console.log("Error : ", error);
            }
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    }

    return (
        <div className="relative h-64 w-full">
            <label htmlFor="cover-image" className="cursor-pointer">
                {coverImage ? (
                    <img
                        src={coverImage}
                        alt="Cover Photo"
                        className="w-full h-full object-cover"
                    />
                ) : (
                    <img
                        src={placeholderImage}
                        alt="Placeholder Cover Photo"
                        className="w-full h-full object-cover"
                    />
                )}
            </label>
            <input
                type="file"
                accept="image/*"
                id="cover-image"
                className="hidden"
                onChange={handleImageChange}
                onClick={handleImageChange}
            />
            <div className="absolute bottom-0 left-5 transform translate-y-1/2">
                <ProfilePicture />
            </div>
        </div>
    );
};

export default CoverPhoto;

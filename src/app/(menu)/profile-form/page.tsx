'use client';
import React, {useEffect, useState} from 'react';
import Stepper from "@/app/components/Stepper";
import ProfileDetails from '@/app/components/profile-form/ProfileDetails';
import PersonalInformation from "@/app/components/profile-form/PersonalInfomation";
import GamingPreferences from "@/app/components/profile-form/GamingPreferences";
import {Container} from "@/app/components/Container";
import {createProfile} from "@/graphql/mutations";
import {generateClient} from "aws-amplify/api";
import {getCurrentUser} from "aws-amplify/auth";

export default function ProfileForm() {
    const [currentStep, setCurrentStep] = React.useState(0);
    const steps = ["Profile Details", "Personal Information", "Gaming Preferences"];
    const numberOfSteps = steps.length;
    const client =  generateClient();
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

    const [formData, setFormData] = useState({
        name: userName,
        bio: "",
        photo: "",
        coverPhoto: "",
        firstName: "",
        lastName: "",
        age: 0,
        city: "",
        language: "",
        country: "",
        zipCode: "",
        region: "",
        timeZone: "",
        gamePreference: "",
        skillLevel: "",
        playStyle: "",
        behaviour: "",
        favoriteGame: "",
        preferredGenre: "",
        timeAvailability: "",
        preferredTeammateAgeRange: "",
        preferredGameMode: "",
        preferredRole: "",
        flexibility: false,
        communicationPreference: "",
        toleranceLevel: "",
        teamworkLevel: "",
        competitivenessLevel: "",
    });

    console.log(formData);

    const updateTimezone = (timeZone: string) => {
        setFormData(prevFormData => ({
            ...prevFormData,
            timeZone: timeZone
        }));
    };

    const updateGames = (selectedGames: any) => {
        setFormData((prevData) => ({
            ...prevData,
            favoriteGame: selectedGames.join(", ")
        }));
    };

    const handleChange = (e: any) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };
   const handleSave = async () => {
        try {
            await client.graphql({
                query: createProfile,
                variables: { input: formData },
            });

            console.log("Profile created successfully");
        } catch (error) {
            console.error("Error creating profile:", error);
        }
    };

    const goToNextStep = () => {
        setCurrentStep(prev => prev === numberOfSteps - 1 ? prev : prev + 1);

    };


    const goToPreviousStep = () => setCurrentStep(prev => prev <= 0 ? prev : prev - 1);
    const isLastStep = currentStep === numberOfSteps - 1;

    return (
        <Container className="flex justify-center py-2">
            <form>
                <div className="space-y-12">
                    <div>
                        <h1 className="text-lg font-medium leading-7 text-gray-900">Complete Your Profile</h1>
                        <p className="mt-1 text-sm leading-6 text-gray-600">We need a few more things before you are
                            ready to
                            start
                            finding teammates.</p>
                    </div>
                    <Stepper currentStep={currentStep} steps={steps}/>
                    {currentStep === 0 && <ProfileDetails formData={formData} handleChange={handleChange}/>}
                    {currentStep === 1 && <PersonalInformation formData={formData} handleChange={handleChange}
                                                               updateTimezone={updateTimezone}/>}
                    {currentStep === 2 && <GamingPreferences formData={formData} handleChange={handleChange} updateGames={updateGames}/>}
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button onClick={goToPreviousStep} type="button"
                            className="text-sm font-semibold leading-6 text-gray-900">
                        Back
                    </button>
                    {!isLastStep && (
                        <button
                            onClick={goToNextStep}
                            type="button"
                            className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                        >
                            Next
                        </button>
                    )}
                    {isLastStep && (
                        <button
                            onClick={handleSave}
                            type="button"
                            className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                        >
                            Save
                        </button>
                    )}
                </div>
            </form>
        </Container>
    );
}

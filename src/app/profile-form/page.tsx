'use client';
import React from 'react';
import Stepper from "@/app/components/Stepper";
import ProfileDetails from '@/app/components/profile-form/ProfileDetails';
import PersonalInformation from "@/app/components/profile-form/PersonalInfomation";
import GamingPreferences from "@/app/components/profile-form/GamingPreferences";
import {Container} from "@/app/components/Container";

export default function ProfileForm() {
  const [currentStep, setCurrentStep] = React.useState(0);
  const steps = ["Profile Details", "Personal Information", "Gaming Preferences"];
  const numberOfSteps = steps.length;

  const goToNextStep = () => setCurrentStep(prev => prev === numberOfSteps - 1 ? prev : prev + 1);
  const goToPreviousStep = () => setCurrentStep(prev => prev <= 0 ? prev : prev - 1);
  const isLastStep = currentStep === numberOfSteps - 1;

  return (
      <Container className="flex justify-center py-2">
        <form>
          <div className="space-y-12">
            <div>
              <h1 className="text-lg font-medium leading-7 text-gray-900">Complete Your Profile</h1>
              <p className="mt-1 text-sm leading-6 text-gray-600">We need a few more things before you are ready to
                start
                finding teammates.</p>
            </div>
            <Stepper currentStep={currentStep} steps={steps}/>
            {currentStep === 0 && <ProfileDetails/>}
            {currentStep === 1 && <PersonalInformation/>}
            {currentStep === 2 && <GamingPreferences/>}
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button onClick={goToPreviousStep} type="button" className="text-sm font-semibold leading-6 text-gray-900">
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
              type="submit"
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

import React from 'react';

interface StepProps {
  currentStep: number;
  steps: Array<String>;
}

const Stepper: React.FC<StepProps> = ({ currentStep, steps }) => {

    return (
        <div className="sticky top-0 z-50">
            <ol className="flex items-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4">
                {steps.map((step, index) => (
                    <li key={index} className={`flex items-center ${index === currentStep ? 'text-blue-600 dark:text-blue-500' : ''}`}>
                        {index < currentStep ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                        ) : (
                            <span
                                className={`flex items-center justify-center w-5 h-5 me-2 text-xs border ${index === currentStep ? 'border-blue-600 dark:border-blue-500' : 'border-gray-500 dark:border-gray-400'} rounded-full shrink-0`}
                            >
                                {index + 1}
                            </span>
                        )}
                        {step}
                        {index !== steps.length - 1 && (
                            <svg className="w-3 h-3 ms-2 sm:ms-4 rtl:rotate-180" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="m7 9 4-4-4-4M1 9l4-4-4-4"/>
                            </svg>
                        )}
                    </li>
                ))}
            </ol>
        </div>
    )
}
export default Stepper;

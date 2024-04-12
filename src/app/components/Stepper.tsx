import React from 'react';

interface StepProps {
    currentStep: number;
    steps: Array<String>;
}

const Stepper: React.FC<StepProps> = ({currentStep, steps}) => {

    // @ts-ignore
    return (
        <div className="sticky top-0 z-50">
            <ol className="flex items-center w-full p-3 space-x-2 text-sm font-medium text-center text-gray-500 bg-white border border-gray-200 rounded-lg shadow-sm dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-4 sm:space-x-4">
                {steps.map((step, index) => (
                    <li key={index}
                        className={`flex items-center ${index === currentStep ? 'text-blue-600 dark:text-blue-500' : ''}`}>
                        {index < currentStep ? (
                            <span
                                className={`flex items-center justify-center w-5 h-5 me-2 text-xs border border-blue-600 dark:border-blue-500 rounded-full shrink-0`}
                            >
                                <svg fill="#000000" viewBox="0 0 24 24" id="check" data-name="Flat Color"
                                     xmlns="http://www.w3.org/2000/svg" className="icon flat-color"><path id="primary"
                                     d="M10,18a1,1,0,0,1-.71-.29l-5-5a1,1,0,0,1,1.42-1.42L10,15.59l8.29-8.3a1,1,0,1,1,1.42,1.42l-9,9A1,1,0,0,1,10,18Z"
                                     style={{fill: "#1e88e5"}}></path></svg>
                                </span>

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

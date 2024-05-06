import React, {useState} from 'react';
import TimezoneSelect, {type ITimezone} from "react-timezone-select";

interface PersonalInformationProps {
    formData: any,
    handleChange: any,
    updateTimezone: (timezone: string) => void
}

const PersonalInformation: React.FC<PersonalInformationProps> = ({formData, handleChange, updateTimezone}) => {
    const [selectedTimezone, setSelectedTimezone] = useState<ITimezone>(
    Intl.DateTimeFormat().resolvedOptions().timeZone,
  )

    const handleTimezoneChange = (timezone: ITimezone) => {
    setSelectedTimezone(timezone);
    const timezoneLabel= JSON.parse(JSON.stringify(timezone, null, 2)).label;
    console.log(timezoneLabel);
    updateTimezone(timezoneLabel);
};

    return (
        <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">Helps us personalize your experience and connect you
                with
                others.</p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                    <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
                        First name
                    </label>
                    <div className="mt-2">
                        <input
                            value={formData.firstName}
                            onChange={handleChange}
                            type="text"
                            name="firstName"
                            id="firstName"
                            className="p-2.5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">
                        Last name
                    </label>
                    <div className="mt-2">
                        <input
                            value={formData.lastName}
                            onChange={handleChange}
                            type="text"
                            name="lastName"
                            id="lastName"
                            className="p-2.5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label htmlFor="age" className="block text-sm font-medium leading-6 text-gray-900">
                        Age
                    </label>
                    <div className="mt-2">
                        <input
                            value={formData.age}
                            onChange={handleChange}
                            type="number"
                            id="age"
                            name="age"
                            className="p-2.5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                        />
                    </div>
                </div>

                <div className="sm:col-span-3 sm:col-start-1">
                    <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                        Country
                    </label>
                    <div className="mt-2">
                        <select
                            onChange={handleChange}
                            value={formData.country}
                            id="country"
                            name="country"
                            autoComplete="country-name"
                            className="block bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"

                        >
                            <option value="">Select...</option>
                            <option value="United States">United States</option>
                            <option value="Mexico">Mexico</option>
                            <option value="South Korea">South Korea</option>
                            <option value="Japan">Japan</option>
                            <option value="China">China</option>
                            <option value="Germany">Germany</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="Sweden">Sweden</option>
                            <option value="Canada">Canada</option>
                            <option value="Brazil">Brazil</option>
                            <option value="Australia">Australia</option>
                        </select>
                    </div>
                </div>

                <div className="sm:col-span-3 sm:col-start-1">
                    <label htmlFor="timeZone" className="block text-sm font-medium leading-6 text-gray-900">
                        Time Zone
                    </label>
                    <div className="select-wrapper">
                        <TimezoneSelect value={selectedTimezone} onChange={handleTimezoneChange}/>
                    </div>
                </div>


                <div className="sm:col-span-2 sm:col-start-1">
                    <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                        City
                    </label>
                    <div className="mt-2">
                        <input
                            value={formData.city}
                            onChange={handleChange}
                            type="text"
                            name="city"
                            id="city"
                            autoComplete="address-level2"
                            className="p-2.5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                        State / Province
                    </label>
                    <div className="mt-2">
                        <input
                            value={formData.region}
                            onChange={handleChange}
                            type="text"
                            name="region"
                            id="region"
                            className="p-2.5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                        ZIP / Postal code
                    </label>
                    <div className="mt-2">
                        <input
                            value={formData.zipCode}
                            onChange={handleChange}
                            type="text"
                            name="zipCode"
                            id="zipCode"
                            autoComplete="zipCode"
                            className="p-2.5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div className="sm:col-span-3 sm:col-start-1">
                    <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                        Language
                    </label>
                    <div className="mt-2">
                        <select
                            value={formData.language}
                            onChange={handleChange}
                            id="language"
                            name="language"
                            className="block bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                            <option value="">Select...</option>
                            <option value="English">English</option>
                            <option value="Spanish">Spanish</option>
                            <option value="Korean">Korean</option>
                            <option value="Japanese">Japanese</option>
                            <option value="Chinese">Chinese</option>
                            <option value="German">German</option>
                            <option value="Swedish">Swedish</option>
                            <option value="French">French</option>
                            <option value="Portuguese">Portuguese</option>
                        </select>
                    </div>
                </div>

            </div>
        </div>
    )
        ;
};

export default PersonalInformation;



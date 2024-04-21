import React from 'react';
interface GamingPreferencesProps {
  formData: any,
  handleChange: any
}

const GamingPreferences:React.FC<GamingPreferencesProps> = ({formData, handleChange}) => {
    console.log(formData);

    return (
        <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">Gaming Preferences</h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
                Tell us about your gaming habits.
            </p>

            <div className="mt-10 space-y-10">
                <fieldset>
                    <legend className="text-sm font-semibold leading-6 text-gray-900">Games</legend>
                    <div className="mt-6 space-y-6">
                        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-4">
                                <label htmlFor="games" className="block text-sm font-medium leading-6 text-gray-900">Favorite
                                    game</label>
                                <div className="mt-2">
                                    <select
                                        id="favorite-game"
                                        name="favorite-game"
                                        className="block bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option>Fortnite</option>
                                        <option>Counter Strike</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                            </div>
                            <div className="sm:col-span-4">
                                <label htmlFor="genres"
                                       className="block text-sm font-medium leading-6 text-gray-900">Preferred gaming
                                    genre</label>
                                <div className="mt-2">
                                    <select
                                        id="preferred-genre"
                                        name="preferred-genre"
                                        className="block bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option>Shooter</option>
                                        <option>Action</option>
                                        <option>Adventure</option>
                                        <option>Simulation</option>
                                        <option>Multiplayer Online Battle Arena</option>
                                        <option>Role-Playing Game</option>
                                        <option>Strategy</option>
                                        <option>Puzzle</option>
                                        <option>Sports</option>
                                    </select>
                                </div>
                            </div>
                            <div className="sm:col-span-4">
                                <label htmlFor="games" className="block text-sm font-medium leading-6 text-gray-900">Time
                                    availability for gaming sessions</label>
                                <div className="mt-2">
                                    <select
                                        id="time-availability"
                                        name="time-availability"
                                        className="block bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option>Weekends Morning</option>
                                        <option>Weekends Afternoon</option>
                                        <option>Weekends Evening</option>
                                    </select>
                                </div>
                            </div>
                            <div className="sm:col-span-4">
                                <label htmlFor="age-range"
                                       className="block text-sm font-medium leading-6 text-gray-900">Preferred
                                    age range of teammates</label>
                                <div className="mt-2">
                                    <select
                                        id="age-range"
                                        name="age-range"
                                        className="block bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option value="">No preference</option>
                                        <option value="16-24">16-24</option>
                                        <option value="25-34">25-34</option>
                                        <option value="35-44">35-44</option>
                                        <option value="45-54">45-54</option>
                                        <option value="55+">55+</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <p className="block text-sm font-medium leading-6 text-gray-900">Skill level</p>
                        <div className="mt-6 space-y-6">
                            <div className="flex items-center gap-x-3">
                                <input
                                    id="beginner"
                                    name="skill-level"
                                    type="radio"
                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label htmlFor="beginner" className="block text-sm font-medium leading-6 text-gray-900">
                                    Beginner
                                </label>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <input
                                    id="intermediate"
                                    name="skill-level"
                                    type="radio"
                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label htmlFor="intermediate"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    Intermediate
                                </label>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <input
                                    id="advanced"
                                    name="skill-level"
                                    type="radio"
                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label htmlFor="advanced" className="block text-sm font-medium leading-6 text-gray-900">
                                    Advanced
                                </label>
                            </div>
                        </div>
                        <p className="block text-sm font-medium leading-6 text-gray-900">Preferred game mode</p>
                        <div className="mt-6 space-y-6">
                            <div className="flex items-center gap-x-3">
                                <input
                                    id="ranked"
                                    name="game-mode"
                                    type="radio"
                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label htmlFor="ranked" className="block text-sm font-medium leading-6 text-gray-900">
                                    Ranked
                                </label>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <input
                                    id="casual"
                                    name="game-mode"
                                    type="radio"
                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label htmlFor="casual" className="block text-sm font-medium leading-6 text-gray-900">
                                    Casual
                                </label>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <input
                                    id="cooperative"
                                    name="game-mode"
                                    type="radio"
                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label htmlFor="cooperative"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    Cooperative
                                </label>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </div>

            <div className="mt-10 space-y-10">
                <fieldset>
                    <legend className="text-sm font-semibold leading-6 text-gray-900">Gaming Approach</legend>
                    <div className="mt-6 space-y-6">
                        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-4">
                                <label htmlFor="role" className="block text-sm font-medium leading-6 text-gray-900">Preferred
                                    role
                                    in-game</label>
                                <div className="mt-2">
                                    <select
                                        id="role"
                                        name="role"
                                        className="block bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option>Tank</option>
                                        <option>Healer</option>
                                        <option>Support</option>
                                        <option>Damage Per Second (DPS)</option>
                                    </select>
                                </div>
                            </div>
                            <div className="sm:col-span-4">
                                <label htmlFor="play-style"
                                       className="block text-sm font-medium leading-6 text-gray-900">Play
                                    Style</label>
                                <div className="mt-2">
                                    <select
                                        id="play-style"
                                        name="play-style"
                                        className="block bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option value="Aggressive/Offensive">Aggressive/Offensive</option>
                                        <option value="Defensive/Tactical">Defensive/Tactical</option>
                                        <option value="Supportive/Team-oriented">Supportive/Team-oriented</option>
                                        <option value="Stealthy/Strategic">Stealthy/Strategic</option>
                                        <option value="Explorative/Completionist">Explorative/Completionist</option>
                                        <option value="Competitive/PVP-focused">Competitive/PVP-focused</option>
                                        <option value="Casual/Relaxed">Casual/Relaxed</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <p className="block text-sm font-medium leading-6 text-gray-900">Flexible in adapting to
                            different
                            strategies or roles?</p>
                        <div className="mt-6 space-y-6">
                            <div className="flex items-center gap-x-3">
                                <input
                                    id="yes"
                                    name="flexibility"
                                    type="radio"
                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label htmlFor="yes" className="block text-sm font-medium leading-6 text-gray-900">
                                    Yes
                                </label>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <input
                                    id="no"
                                    name="flexibility"
                                    type="radio"
                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label htmlFor="no" className="block text-sm font-medium leading-6 text-gray-900">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </div>

            <div className="mt-10 space-y-10">
                <fieldset>
                    <legend className="text-sm font-semibold leading-6 text-gray-900">Attitude and Communication
                    </legend>
                    <div className="mt-6 space-y-6">
                        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-4">
                                <label htmlFor="role"
                                       className="block text-sm font-medium leading-6 text-gray-900">Behavior</label>
                                <div className="mt-2">
                                    <select
                                        id="behavior"
                                        name="behavior"
                                        className="block bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option value="Friendly">Friendly</option>
                                        <option value="Competitive">Competitive</option>
                                        <option value="Team Player">Team Player</option>
                                        <option value="Helpful">Helpful</option>
                                        <option value="Aggressive">Aggressive</option>
                                        <option value="Troll">Troll</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <p className="block text-sm font-medium leading-6 text-gray-900">Communication preference</p>
                        <div className="mt-6 space-y-6">
                            <div className="flex items-center gap-x-3">
                                <input
                                    id="voice"
                                    name="communication"
                                    type="radio"
                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label htmlFor="voice" className="block text-sm font-medium leading-6 text-gray-900">
                                    Voice chat
                                </label>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <input
                                    id="text"
                                    name="communication"
                                    type="radio"
                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label htmlFor="text" className="block text-sm font-medium leading-6 text-gray-900">
                                    Text chat
                                </label>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <input
                                    id="none"
                                    name="communication"
                                    type="radio"
                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label htmlFor="none" className="block text-sm font-medium leading-6 text-gray-900">
                                    No preference
                                </label>
                            </div>
                        </div>
                        <p className="block text-sm font-medium leading-6 text-gray-900">Level of tolerance for
                            mistakes</p>
                        <div className="mt-6 flex gap-x-6">
                            <div className="flex items-center gap-x-3">
                                <input
                                    id="high"
                                    name="tolerance-level"
                                    type="radio"
                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label htmlFor="high" className="block text-sm font-medium leading-6 text-gray-900">
                                    High
                                </label>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <input
                                    id="average"
                                    name="tolerance-level"
                                    type="radio"
                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label htmlFor="average" className="block text-sm font-medium leading-6 text-gray-900">
                                    Average
                                </label>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <input
                                    id="low"
                                    name="tolerance-level"
                                    type="radio"
                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label htmlFor="low" className="block text-sm font-medium leading-6 text-gray-900">
                                    Low
                                </label>
                            </div>
                        </div>

                        <p className="block text-sm font-medium leading-6 text-gray-900">Level of teamwork and
                            collaboration</p>
                        <div className="mt-6 flex gap-x-6">
                            <div className="flex items-center gap-x-3">
                                <input
                                    id="high"
                                    name="teamwork-level"
                                    type="radio"
                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label htmlFor="high" className="block text-sm font-medium leading-6 text-gray-900">
                                    High
                                </label>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <input
                                    id="average"
                                    name="teamwork-level"
                                    type="radio"
                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label htmlFor="average" className="block text-sm font-medium leading-6 text-gray-900">
                                    Average
                                </label>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <input
                                    id="low"
                                    name="teamwork-level"
                                    type="radio"
                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label htmlFor="low" className="block text-sm font-medium leading-6 text-gray-900">
                                    Low
                                </label>
                            </div>
                        </div>
                        <p className="block text-sm font-medium leading-6 text-gray-900">Level of competitiveness</p>
                        <div className="mt-6 flex gap-x-6">
                            <div className="flex items-center gap-x-3">
                                <input
                                    id="high"
                                    name="competitiveness-level"
                                    type="radio"
                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label htmlFor="high" className="block text-sm font-medium leading-6 text-gray-900">
                                    High
                                </label>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <input
                                    id="average"
                                    name="competitiveness-level"
                                    type="radio"
                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label htmlFor="average" className="block text-sm font-medium leading-6 text-gray-900">
                                    Average
                                </label>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <input
                                    id="low"
                                    name="competitiveness-level"
                                    type="radio"
                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label htmlFor="low" className="block text-sm font-medium leading-6 text-gray-900">
                                    Low
                                </label>
                            </div>
                        </div>
                    </div>
                </fieldset>
            </div>
        </div>
    );
};

export default GamingPreferences;
import React from 'react';
import GameList from "@/app/components/GameList";

interface GamingPreferencesProps {
    formData: any,
    handleChange: any,
    updateGames: (games: string) => void
}

const games = [
    "Call of Duty",
    "Overwatch",
    "The Witcher 3: Wild Hunt",
    "Fortnite",
    "Apex Legends",
    "FIFA series",
    "Red Dead Redemption 2",
    "Assassin's Creed Valhalla",
    "Final Fantasy XIV",
    "Rocket League",
    "League of Legends",
    "Valorant",
    "Minecraft",
    "Counter-Strike: Global Offensive",
    "Genshin Impact",
    "Among Us",
    "World of Warcraft",
    "PlayerUnknown's Battlegrounds",
    "Dota 2",
    "Rainbow Six Siege",
];

const GamingPreferences: React.FC<GamingPreferencesProps> = ({formData, handleChange, updateGames}) => {
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
                                <label htmlFor="favoriteGame"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    Games you would like to find team mates for</label>
                                <div className="mt-2">
                                </div>
                            </div>
                            <div className="sm:col-span-4">
                                <label htmlFor="genres"
                                       className="block text-sm font-medium leading-6 text-gray-900">Preferred gaming
                                    genre</label>
                                <div className="mt-2">
                                    <select
                                        onChange={handleChange}
                                        value={formData.preferredGenre}
                                        id="preferredGenre"
                                        name="preferredGenre"
                                        className="block bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option>Select...</option>
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
                                        onChange={handleChange}
                                        value={formData.timeAvailability}
                                        id="timeAvailability"
                                        name="timeAvailability"
                                        className="block bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option value="">Select...</option>
                                        <option value="(6-12 AM) Weekdays Morning">(6-12 AM) Weekdays Morning</option>
                                        <option value="(12-5 PM) Weekdays Afternoon">(12-5 PM) Weekdays Afternoon
                                        </option>
                                        <option value="(5-9 PM) Weekdays Evening">(5-9 PM) Weekdays Evening</option>
                                        <option value="(9-6 AM) Weekdays Night">(9-6 AM) Weekdays Night</option>
                                        <option value="(6-12 AM) Weekends Morning">(6-12 AM) Weekends Morning</option>
                                        <option value="(12-5 PM) Weekends Afternoon">(12-5 PM) Weekends Afternoon
                                        </option>
                                        <option value="(5-9 PM) Weekends Evening">(5-9 PM) Weekends Evening</option>
                                        <option value="(9-6 AM) Weekends Night">(9-6 AM) Weekends Night</option>
                                    </select>
                                </div>
                            </div>
                            <div className="sm:col-span-4">
                                <label htmlFor="age-range"
                                       className="block text-sm font-medium leading-6 text-gray-900">Preferred
                                    age range of teammates</label>
                                <div className="mt-2">
                                    <select
                                        id="preferredTeammateAgeRange"
                                        name="preferredTeammateAgeRange"
                                        className="block bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option value="No preference">No preference</option>
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
                                    name="skillLevel"
                                    type="radio"
                                    value="Beginner"
                                    checked={formData.skillLevel === "Beginner"}
                                    onChange={handleChange}
                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label htmlFor="beginner" className="block text-sm font-medium leading-6 text-gray-900">
                                    Beginner
                                </label>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <input
                                    id="intermediate"
                                    name="skillLevel"
                                    type="radio"
                                    value="Intermediate"
                                    checked={formData.skillLevel === "Intermediate"}
                                    onChange={handleChange}
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
                                    name="skillLevel"
                                    type="radio"
                                    value="Advanced"
                                    checked={formData.skillLevel === "Advanced"}
                                    onChange={handleChange}
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
                                    name="preferredGameMode"
                                    type="radio"
                                    value="Ranked"
                                    checked={formData.preferredGameMode === "Ranked"}
                                    onChange={handleChange}
                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label htmlFor="ranked" className="block text-sm font-medium leading-6 text-gray-900">
                                    Ranked
                                </label>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <input
                                    id="casual"
                                    name="preferredGameMode"
                                    type="radio"
                                    value="Casual"
                                    checked={formData.preferredGameMode === "Casual"}
                                    onChange={handleChange}
                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label htmlFor="casual" className="block text-sm font-medium leading-6 text-gray-900">
                                    Casual
                                </label>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <input
                                    id="cooperative"
                                    name="preferredGameMode"
                                    type="radio"
                                    value="Cooperative"
                                    checked={formData.preferredGameMode === "Cooperative"}
                                    onChange={handleChange}
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
                                        onChange={handleChange}
                                        value={formData.preferredRole}
                                        id="preferredRole"
                                        name="preferredRole"
                                        className="block bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option value="">Select...</option>
                                        <option value="Tank">Tank</option>
                                        <option value="Damage Per Second (DPS)">Damage Per Second (DPS)</option>
                                        <option value="Support">Support</option>
                                        <option value="Healer">Healer</option>
                                        <option value="Utility">Utility</option>
                                    </select>
                                </div>
                            </div>
                            <div className="sm:col-span-4">
                                <label htmlFor="play-style"
                                       className="block text-sm font-medium leading-6 text-gray-900">Play
                                    Style</label>
                                <div className="mt-2">
                                    <select
                                        onChange={handleChange}
                                        value={formData.playStyle}
                                        id="playStyle"
                                        name="playStyle"
                                        className="block bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option value="">Select...</option>
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
                                    value="Yes"
                                    checked={formData.flexibility === "Yes"}
                                    onChange={handleChange}
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
                                    value="No"
                                    checked={formData.flexibility === "No"}
                                    onChange={handleChange}
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
                                <label htmlFor="behaviour"
                                       className="block text-sm font-medium leading-6 text-gray-900">Behavior</label>
                                <div className="mt-2">
                                    <select
                                        onChange={handleChange}
                                        value={formData.behaviour}
                                        id="behaviour"
                                        name="behaviour"
                                        className="block bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    >
                                        <option value="">Select...</option>
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
                                    name="communicationPreference"
                                    type="radio"
                                    value="Voice chat"
                                    checked={formData.communicationPreference === "Voice chat"}
                                    onChange={handleChange}
                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label htmlFor="voice" className="block text-sm font-medium leading-6 text-gray-900">
                                    Voice chat
                                </label>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <input
                                    id="text"
                                    name="communicationPreference"
                                    type="radio"
                                    value="Text chat"
                                    checked={formData.communicationPreference === "Text chat"}
                                    onChange={handleChange}
                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label htmlFor="text" className="block text-sm font-medium leading-6 text-gray-900">
                                    Text chat
                                </label>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <input
                                    id="none"
                                    name="communicationPreference"
                                    type="radio"
                                    value="No preference"
                                    checked={formData.communicationPreference === "No preference"}
                                    onChange={handleChange}
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
                                    id="highTolerance"
                                    name="toleranceLevel"
                                    value="High"
                                    type="radio"
                                    checked={formData.toleranceLevel === "High"}
                                    onChange={handleChange}
                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label htmlFor="highTolerance"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    High
                                </label>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <input
                                    id="averageTolerance"
                                    name="toleranceLevel"
                                    value="Average"
                                    type="radio"
                                    checked={formData.toleranceLevel === "Average"}
                                    onChange={handleChange}
                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label htmlFor="averageTolerance"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    Average
                                </label>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <input
                                    id="lowTolerance"
                                    name="toleranceLevel"
                                    value="Low"
                                    type="radio"
                                    checked={formData.toleranceLevel === "Low"}
                                    onChange={handleChange}
                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label htmlFor="lowTolerance"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    Low
                                </label>
                            </div>
                        </div>
                        <p className="block text-sm font-medium leading-6 text-gray-900">Level of teamwork and
                            collaboration</p>
                        <div className="mt-6 flex gap-x-6">
                            <div className="flex items-center gap-x-3">
                                <input
                                    id="highTeamwork"
                                    name="teamworkLevel"
                                    value="High"
                                    type="radio"
                                    checked={formData.teamworkLevel === "High"}
                                    onChange={handleChange}
                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label htmlFor="highTeamwork"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    High
                                </label>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <input
                                    id="averageTeamwork"
                                    name="teamworkLevel"
                                    value="Average"
                                    type="radio"
                                    checked={formData.teamworkLevel === "Average"}
                                    onChange={handleChange}
                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label htmlFor="averageTeamwork"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    Average
                                </label>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <input
                                    id="lowTeamwork"
                                    name="teamworkLevel"
                                    value="Low"
                                    type="radio"
                                    checked={formData.teamworkLevel === "Low"}
                                    onChange={handleChange}
                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label htmlFor="lowTeamwork"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    Low
                                </label>
                            </div>
                        </div>
                        <p className="block text-sm font-medium leading-6 text-gray-900">Level of competitiveness</p>
                        <div className="mt-6 flex gap-x-6">
                            <div className="flex items-center gap-x-3">
                                <input
                                    id="highCompetitiveness"
                                    name="competitivenessLevel"
                                    value="High"
                                    type="radio"
                                    checked={formData.competitivenessLevel === "High"}
                                    onChange={handleChange}
                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label htmlFor="highCompetitiveness"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    High
                                </label>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <input
                                    id="averageCompetitiveness"
                                    name="competitivenessLevel"
                                    value="Average"
                                    type="radio"
                                    checked={formData.competitivenessLevel === "Average"}
                                    onChange={handleChange}
                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label htmlFor="averageCompetitiveness"
                                       className="block text-sm font-medium leading-6 text-gray-900">
                                    Average
                                </label>
                            </div>
                            <div className="flex items-center gap-x-3">
                                <input
                                    id="lowCompetitiveness"
                                    name="competitivenessLevel"
                                    value="Low"
                                    type="radio"
                                    checked={formData.competitivenessLevel === "Low"}
                                    onChange={handleChange}
                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                />
                                <label htmlFor="lowCompetitiveness"
                                       className="block text-sm font-medium leading-6 text-gray-900">
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
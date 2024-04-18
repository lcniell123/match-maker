import React from "react";

interface AlertProps {
    message: string;
    type: string;
    onClose: () => void;
}

const Alert: React.FC<AlertProps> = ({ message, type, onClose }) => {
    let bgColorClass = "";
    let textColorClass = "";

    switch (type) {
        case "success":
            bgColorClass = "bg-green-200";
            textColorClass = "text-green-700";
            break;
        case "error":
            bgColorClass = "bg-red-200";
            textColorClass = "text-red-700";
            break;
        default:
            bgColorClass = "bg-gray-200";
            textColorClass = "text-gray-700";
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative w-auto max-w-md p-5 mx-auto my-6">
                <div
                    className={`border rounded-md ${bgColorClass} ${textColorClass} border-solid border-blueGray-200 bg-white shadow-lg`}
                >
                    <div className="relative p-6 flex-auto">
                        <p className="my-4 text-blueGray-700 text-lg leading-relaxed">{message}</p>
                        <button
                            className="mt-4 ml-auto text-sm font-semibold text-blue-500 uppercase focus:outline-none"
                            type="button"
                            onClick={onClose}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Alert;

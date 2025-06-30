import { useState } from "react";
import { FaClock, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { dayMap } from "@/constants/dayMap";

export default function WorkingHoursSection({ workingHours }) {
    const [isOpen, setIsOpen] = useState(true);

    const today = dayMap[new Date().getDay()];

    return (
        <div className="text-gray-800">
            <div
                className="flex items-center gap-3 mb-2 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <FaClock className="text-cyan-600" />
                <span className="font-normal">Working Hours</span>
                {isOpen ? (
                    <FaChevronUp className="text-cyan-600 ml-auto" />
                ) : (
                    <FaChevronDown className="text-cyan-600 ml-auto" />
                )}
            </div>

            {isOpen && (
                <ul className="pl-8 space-y-1 text-sm text-gray-700">
                    {Object.entries(workingHours).map(([day, time]) => {
                        const isToday = day === today;

                        return (
                            <li
                                key={day}
                                className={`flex justify-between ${
                                    isToday ? "text-cyan-600 font-semibold" : ""
                                }`}
                            >
                                <span className="w-24">{day}:</span>
                                <span className={`${time === "Closed" && "text-amber-500"}`}>{time}</span>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
}

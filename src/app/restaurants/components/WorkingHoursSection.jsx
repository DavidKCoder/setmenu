import { useState } from "react";
import { FaClock, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { dayMap } from "@/constants/dayMap";

export default function WorkingHoursSection({ workingHours }) {
    const [isOpen, setIsOpen] = useState(window?.innerWidth >= 500);

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

                        let isClosedNow = false;

                        if (time === "Closed") {
                            isClosedNow = true;
                        } else {
                            const [startStr, endStr] = time.split("–").map(s => s.trim());

                            const startDate = new Date();
                            const endDate = new Date();

                            const parseTime = (str) => {
                                const [timePart, ampm] = str.split(" ");
                                let [hours, minutes] = timePart.split(":").map(Number);

                                if (ampm === "PM" && hours !== 12) hours += 12;
                                if (ampm === "AM" && hours === 12) hours = 0;

                                return { hours, minutes };
                            };

                            const { hours: startHours, minutes: startMinutes } = parseTime(startStr);
                            const { hours: endHours, minutes: endMinutes } = parseTime(endStr);

                            startDate.setHours(startHours, startMinutes, 0, 0);
                            endDate.setHours(endHours, endMinutes, 0, 0);

                            const now = new Date();

                            if (endDate <= startDate) {
                                isClosedNow = !(now >= startDate || now <= endDate);
                            } else {
                                isClosedNow = !(now >= startDate && now <= endDate);
                            }
                        }

                        return (
                            <li
                                key={day}
                                className={`flex justify-between ${isToday ? "text-cyan-600 font-semibold" : ""}`}
                            >
                                <span className="w-32">{day}:</span>
                                <span className="flex gap-2 items-center">
                                <span className={time === "Closed" ? "text-amber-500" : ""}>{time}</span>
                                    {isToday && isClosedNow && time !== "Closed" && (
                                        <span className="text-red-500 text-xs">(Closed now)</span>
                                    )}
                                </span>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
}

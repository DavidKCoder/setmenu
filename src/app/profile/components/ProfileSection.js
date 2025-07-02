"use client";

import { useState } from "react";
import { FaChevronRight, FaUser } from "react-icons/fa";

export default function ProfileSection() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200 px-4">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center py-4 focus:outline-none"
            >
                <div className="flex items-center gap-2">
                    <FaUser className="text-gray-500" />
                    <span className="text-gray-700 font-medium">Profile details</span>
                </div>
                <FaChevronRight
                    className={`text-gray-500 transform transition-transform duration-300 ${
                        isOpen ? "rotate-90" : ""
                    }`}
                />
            </button>

            {isOpen && (
                <div className="pl-2 pb-4 space-y-3 min-w-32 sm:w-2/4">
                    <div className="flex items-center gap-2">
                        <input
                            type="text"
                            placeholder="First Name"
                            className="w-full border border-gray-300 rounded p-2"
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="w-full border border-gray-300 rounded p-2"
                        />
                    </div>
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full border border-gray-300 rounded p-2"
                    />
                    <input
                        type="phone"
                        placeholder="Phone Number"
                        className="w-full border border-gray-300 rounded p-2"
                    />
                </div>
            )}
        </div>
    );
}

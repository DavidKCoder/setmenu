"use client";

import { useState } from "react";
import { FaChevronRight, FaLock } from "react-icons/fa";
import { useTranslation } from "next-i18next";

export default function PasswordSection() {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200 px-4">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center py-4 focus:outline-none"
            >
                <div className="flex items-center gap-2">
                    <FaLock className="text-gray-500" />
                    <span className="text-gray-700 font-medium capitalize">{t("password")}</span>
                </div>
                <FaChevronRight
                    className={`text-gray-500 transform transition-transform duration-300 ${
                        isOpen ? "rotate-90" : ""
                    }`}
                />
            </button>

            {isOpen && (
                <div className="pl-2 pb-4 space-y-3 min-w-32 sm:w-2/4">
                    <input
                        type="password"
                        placeholder="New Password"
                        className="w-full border border-gray-300 rounded p-2"
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        className="w-full border border-gray-300 rounded p-2"
                    />
                </div>
            )}
        </div>
    );
}

"use client";

import { useState } from "react";
import { GrLanguage } from "react-icons/gr";
import { FaChevronRight } from "react-icons/fa";
import { US, RU, AM } from "country-flag-icons/react/3x2";
import i18n from "i18next";
import { useTranslation } from "next-i18next";

export default function LanguageSection() {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const languages = [
        { code: "en", name: "English", Flag: US },
        { code: "ru", name: "Русский", Flag: RU },
        { code: "hy", name: "Հայերեն", Flag: AM },
    ];

    const [selectedLang, setSelectedLang] = useState(languages[0]);

    return (
        <div className="border-b border-gray-200 px-4">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center py-4 focus:outline-none"
            >
                <div className="flex items-center gap-2">
                    <GrLanguage className="text-gray-500" />
                    <span className="text-gray-700 font-medium flex items-center gap-2 capitalize">
                        {t("language")}:
                        <selectedLang.Flag
                            title={selectedLang.name}
                            className="w-6 h-4 rounded-sm shadow-sm"
                        />
                    </span>
                </div>
                <FaChevronRight
                    className={`text-gray-500 transform transition-transform duration-300 ${
                        isOpen ? "rotate-90" : ""
                    }`}
                />
            </button>

            {isOpen && (
                <div className="pl-2 pb-4 space-y-2 min-w-32 sm:w-2/4">
                    {languages.map(({ code, name, Flag }) => (
                        <button
                            key={code}
                            onClick={() => {
                                setSelectedLang({ code, name, Flag });
                                setIsOpen(false);
                                i18n.changeLanguage(code);
                                sessionStorage.setItem("local", code);
                            }}
                            className={`flex items-center gap-2 w-full text-left px-3 py-2 rounded-md border ${
                                selectedLang.name === name
                                    ? "bg-gray-100 border-gray-400 font-semibold"
                                    : "border-gray-300 hover:bg-gray-50"
                            }`}
                        >
                            <Flag title={name} className="w-6 h-4 rounded-sm shadow-sm" />
                            {name}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

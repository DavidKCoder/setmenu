"use client";

import { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { US, RU, AM } from "country-flag-icons/react/3x2";
import LanguageSelect from "@/components/LanguageSelect";
import { useTranslation } from "next-i18next";

const languages = [
    { code: "en", label: "English", FlagIcon: US },
    { code: "ru", label: "Русский", FlagIcon: RU },
    { code: "hy", label: "Հայերեն", FlagIcon: AM },
];

export default function NavBar() {
    const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;

    const [isOpen, setIsOpen] = useState(false);
    const [language, setLanguage] = useState(currentLanguage);
    const dropdownRef = useRef(null);

    const navItems = [
        { label: t("categories"), href: "#categories" },
        { label: t("stats"), href: "#stats" },
        { label: t("popularRestaurants"), href: "#popular" },
        { label: t("testimonials"), href: "#testimonials" },
        { label: t("FAQ"), href: "#faq" },
    ];

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setDropdownOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleLanguageSelect = (code) => {
        setLanguage(code);
        i18n.changeLanguage(code);
    };

    return (
        <nav className="fixed top-0 left-0 w-full z-20 bg-black px-6 py-4 text-white">
            <div className="flex items-center justify-between w-full">
                {/* Logo */}
                <Link href="/" passHref>
                    <div className="flex items-center text-sm gap-2 cursor-pointer">
                        <Image src="/logo.webp" alt="logo" width="35" height="35" className="object-cover w-6 h-6 sm:w-10 sm:h-10" />
                        <div className="text-xl sm:text-3xl font-bold text-white select-none">SetMenu</div>
                    </div>
                </Link>

                {/* Desktop Nav + Language dropdown */}
                <div className="hidden md:flex flex-1 justify-end items-center gap-6">
                    <ul className={`flex gap-8 ${currentLanguage === "hy" ? "text-sm" : ""}`}>
                        {navItems.map(({ label, href }) => (
                            <li key={label}>
                                <a href={href} className="cursor-pointer hover:text-main capitalize">
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Language dropdown */}
                    <LanguageSelect
                        languages={languages}
                        language={language}
                        setLanguage={handleLanguageSelect}
                    />
                </div>

                {/* Mobile Menu Icon + Language dropdown */}
                <div className="md:hidden flex items-center gap-4">
                    {/* Language dropdown */}
                    <LanguageSelect
                        languages={languages}
                        language={language}
                        setLanguage={handleLanguageSelect}
                    />

                    <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Items */}
            {isOpen && (
                <div className="md:hidden mt-4">
                    <ul className="flex flex-col gap-4 text-lg text-right">
                        {navItems.map(({ label, href }) => (
                            <li
                                key={label}
                                className="cursor-pointer hover:text-emerald-400"
                                onClick={() => setIsOpen(false)}
                            >
                                <a href={href}>{label}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}

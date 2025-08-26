"use client";

import React from "react";
import { useTranslation } from "next-i18next";
import { forum_splash, splash } from "@/app/fonts";
import { FiSearch } from "react-icons/fi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { FaMapMarkedAlt, FaUtensils, FaSmileBeam } from "react-icons/fa";

const HowItWorks = React.memo(() => {
    const { t } = useTranslation();

    const steps = [
        {
            icon: <FiSearch  />,
            title: t("howSteps.discoverTitle"),
            description: t("howSteps.discoverDescription"),
        },
        // {
        //     icon: <MdOutlineRestaurantMenu  />,
        //     title: t("howSteps.selectTitle"),
        //     description: t("howSteps.selectDescription"),
        // },
        {
            icon: <FaMapMarkedAlt  />,
            title: t("howSteps.exploreTitle"),
            description: t("howSteps.exploreDescription"),
        },
        {
            icon: <FaUtensils  />,
            title: t("howSteps.setTitle"),
            description: t("howSteps.setDescription"),
        },
        {
            icon: <FaSmileBeam  />,
            title: t("howSteps.enjoyTitle"),
            description: t("howSteps.enjoyDescription"),
        },
    ];

    return (
        <main className="min-h-96 bg-orange-50 py-8 text-black px-4">
            <div className="max-w-5xl mx-auto text-center">
                <h1
                    className={`text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 sm:mb-12 uppercase tracking-widest text-main ${forum_splash.className}`}
                >
                    {t("howItWorks")}
                </h1>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-5 sm:gap-10 sm:flex sm:justify-center">
                    {steps.map(({ icon, title, description }, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col items-center text-center px-2"
                        >
                            <div
                                className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-main text-white flex items-center justify-center text-xl sm:text-2xl font-bold mb-2 ${splash.className}`}
                            >
                                {icon}
                            </div>
                            <h2
                                className={`text-lg sm:text-2xl text-gray-700 ${forum_splash.className}`}
                                style={{ fontWeight: 600 }}
                            >
                                {title}
                            </h2>
                            {/*<p className="text-gray-700 text-xs sm:text-sm">*/}
                            {/*    {description}*/}
                            {/*</p>*/}
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
});

export default HowItWorks;

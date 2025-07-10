"use client";

import React from "react";
import { useTranslation } from "next-i18next";
import { forum_splash, splash } from "@/app/fonts";

export default function HowItWorks() {
    const { t } = useTranslation();

    const steps = [
        {
            title: t("howSteps.discoverTitle"),
            description: t("howSteps.discoverDescription"),
        },
        {
            title: t("howSteps.selectTitle"),
            description: t("howSteps.selectDescription"),
        },
        {
            title: t("howSteps.exploreTitle"),
            description: t("howSteps.exploreDescription"),
        },
        {
            title: t("howSteps.setTitle"),
            description: t("howSteps.setDescription"),
        },
        {
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
                <div className="grid grid-cols-2 md:grid-cols-5 gap-5 sm:gap-10">
                    {steps.map(({ title, description }, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col items-center text-center px-2"
                        >
                            <div
                                className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-main text-white flex items-center justify-center text-xl sm:text-2xl font-bold mb-4 ${splash.className}`}>
                                {idx + 1}
                            </div>
                            <h2
                                className={`text-lg sm:text-2xl mb-2 text-gray-700 ${forum_splash.className}`}
                                style={{ fontWeight: 600 }}
                            >
                                {title}
                            </h2>
                            <p className="text-gray-700 text-xs sm:text-sm">{description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}

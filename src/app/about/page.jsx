"use client";

import Link from "next/link";
import Image from "next/image";
import { forum_splash } from "@/app/fonts";
import { useTranslation, Trans } from "next-i18next";

export default function AboutPage() {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen flex flex-col">
            {/* Hero section */}
            <div className="relative h-72 sm:h-80 md:h-96 flex items-center justify-center text-center z-10">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('https://images.pexels.com/photos/17294735/pexels-photo-17294735.jpeg')`,
                    }}
                ></div>
                <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
                <div className="relative z-20 px-4 text-white">
                    <h1 className={`text-4xl md:text-5xl uppercase ${forum_splash.className}`}>
                        {t("about.title")}
                    </h1>
                    <p className="mt-4 max-w-xl mx-auto text-gray-200 text-sm md:text-base">
                        {t("about.hero")}
                    </p>
                </div>
            </div>

            {/* Content section */}
            <div
                className="w-11/12 sm:max-w-6xl sm:w-full mx-auto bg-white -mt-12 sm:-mt-16 rounded-lg shadow-lg overflow-hidden z-50">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                    <div>
                        <h2 className={`text-2xl md:text-3xl font-bold text-gray-800 mb-4 ${forum_splash.className}`}>
                            {t("about.mission_heading")}
                        </h2>
                        <p className="text-gray-600 mb-4">
                            <Trans
                                i18nKey="about.mission_paragraph_1"
                                components={{
                                    1: <Link
                                        className="text-custom-beige font-semibold hover:underline hover:text-amber-500"
                                        href="/" />,
                                }}
                            />
                        </p>
                        <p className="text-gray-800 font-semibold italic mb-4">
                            {t("about.mission_paragraph_2")}
                        </p>
                        <p className="text-gray-600">
                            {t("about.mission_paragraph_3")}
                        </p>
                    </div>

                    <div className="flex items-center justify-center">
                        <div className="relative w-full h-64 md:h-80 rounded overflow-hidden border border-gray-300">
                            <Image
                                src="/new_bg.jpeg"
                                alt="Our Mission"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

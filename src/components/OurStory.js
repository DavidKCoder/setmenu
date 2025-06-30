"use client";

import Image from "next/image";
import { useTranslation } from "next-i18next";
import { forum_splash, oswald_splash } from "@/app/fonts";

export default function OurStory() {
    const { t } = useTranslation();

    return (
        <section className="relative py-16 px-6 bg-orange-50 text-black">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                <div>
                    <h2 className={`text-3xl mb-4 text-gray-800 capitalize ${oswald_splash.className} font-normal`}>
                        {t("ourStory")}
                    </h2>
                    <p className={`text-lg leading-relaxed font-light ${forum_splash.className}`}>
                        {t("eventDescription")}
                    </p>
                </div>
                <div
                    className={`absolute whitespace-nowrap uppercase opacity-10 font-medium text-gray-400 tracking-wide ${forum_splash.className} z-0 pointer-events-none`}
                    style={{
                        top: -50,
                        right: 280,
                        fontSize: 250,
                    }}
                >
                    OUR STORY
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="relative w-full h-40">
                        <Image
                            src="/story_1.jpg"
                            alt="Story 1"
                            fill
                            className="object-cover rounded-xl shadow"
                        />
                    </div>
                    <div className="relative w-full h-40">
                        <Image
                            src="/story_2.jpg"
                            alt="Story 2"
                            fill
                            className="object-cover rounded-xl shadow"
                        />
                    </div>
                    <div className="relative w-full h-52 col-span-2">
                        <Image
                            src="/story_3.jpg"
                            alt="Story 3"
                            fill
                            className="object-cover rounded-xl shadow"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
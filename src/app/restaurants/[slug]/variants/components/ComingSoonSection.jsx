"use client";

import Link from "next/link";
import { Trans, useTranslation } from "next-i18next";
import { forum_splash } from "@/app/fonts";

export default function ComingSoonSection() {
    const { t } = useTranslation();

    return (
        <section
            className="relative grid w-full h-screen items-center bg-white text-black my-auto"
            style={{
                backgroundImage: "url('https://images.pexels.com/photos/19403350/pexels-photo-19403350.jpeg')",
                backgroundSize: "cover",
            }}
        >
            <div className="ova-section bg-white relative h-56 text-center flex flex-col items-center justify-center px-2">
                <div className={`text-2xl sm:text-4xl text-secondary uppercase ${forum_splash.className}`}>
                    {t("chefWorking")}
                </div>

                <div
                    className={`absolute items-center whitespace-nowrap uppercase opacity-10 font-medium text-gray-400 tracking-wide ${forum_splash.className} z-0 pointer-events-none animate-fadeIn`}
                    style={{ fontSize: 120 }}
                >
                    {t("comingSoon")}
                </div>
                <p className="text-gray-500 text-sm">
                    <Trans
                        i18nKey="comingSoonMessage"
                        components={[
                            <Link key="0" href="/" className="text-rose-500 underline" />,
                            <Link key="1" href="/restaurants" className="text-rose-500 underline" />,
                        ]}
                    />
                </p>
            </div>
        </section>
    );
}

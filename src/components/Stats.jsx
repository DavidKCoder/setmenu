"use client";

import CountUp from "react-countup";
import { forum_splash, splash } from "@/app/fonts";
import { useTranslation } from "next-i18next";

export default function Stats() {
    const { t } = useTranslation();

    return (
        <div className="bg-white py-0 sm:py-10">
            <div
                className="sm:bg-fixed bg-cover bg-center py-20sm:py-16 sm:py-16"
                style={{
                    backgroundImage: "url('https://images.pexels.com/photos/14280792/pexels-photo-14280792.jpeg')",
                }}
            >
                <div className="bg-white/80 backdrop-blur-md rounded-xl mx-auto max-w-7xl px-6 py-16 lg:px-8">
                    <dl className="grid grid-cols-3 sm:grid-cols-3 text-center">
                        <div className="mx-auto flex max-w-xs flex-col gap-y-0 sm:gap-y-4">
                            <dt className={`text-sm sm:text-xl leading-7 text-white p-1 uppercase ${forum_splash.className}`}>
                                {t("restaurantsListed")}
                            </dt>
                            <dd className={`order-first text-2xl sm:text-4xl font-bold tracking-tight text-white italic ${splash.className}`}>
                                <CountUp end={50} duration={2.5} separator="," suffix="+" enableScrollSpy />
                            </dd>
                        </div>
                        <div className="mx-auto flex max-w-xs flex-col gap-y-0 sm:gap-y-4">
                            <dt className={`text-sm sm:text-xl leading-7 text-white p-1 uppercase ${forum_splash.className}`}>
                                {t("menusAvailable")}
                            </dt>
                            <dd className={`order-first text-2xl sm:text-4xl font-bold tracking-tight text-white italic ${splash.className}`}>
                                <CountUp end={100} duration={2.5} separator="," suffix="+" enableScrollSpy />
                            </dd>
                        </div>
                        <div className="mx-auto flex max-w-xs flex-col gap-y-0 sm:gap-y-4">
                            <dt className={`text-sm sm:text-xl leading-7 text-white p-1 uppercase ${forum_splash.className}`}>
                                {t("monthlyUsers")}
                            </dt>
                            <dd className={`order-first text-2xl sm:text-4xl font-bold tracking-tight text-white italic ${splash.className}`}>
                                <CountUp end={2500} duration={2.5} separator="," suffix="+" enableScrollSpy />
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    );
}
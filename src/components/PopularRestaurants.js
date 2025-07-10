"use client";

import Link from "next/link";
import { restaurants } from "@/constants/restaurants";
import { forum_splash } from "@/app/fonts";
import { useTranslation } from "next-i18next";
import Carousel from "@/components/Carousel";

const popularRestaurants = restaurants.slice(0, 5);

export default function PopularRestaurants() {
    const { t } = useTranslation();

    return (
        <section className="relative py-16 px-0 sm:px-6 bg-white text-black">
            {/* Heading */}
            <div className="flex items-center my-4">
                <div className="flex-grow border-t border-gray-300" />
                <h2
                    className={`mx-4 text-3xl text-gray-400 text-center font-semibold uppercase ${forum_splash.className}`}
                >
                    {t("popularRestaurants")}
                </h2>
                <div className="flex-grow border-t border-gray-300" />
            </div>

            {/* Watermark text */}
            <div
                className={`absolute whitespace-nowrap pt-5 -top-24 right-40 sm:right-96 md:right-96 lg:right-96 uppercase opacity-10 font-medium text-gray-400 tracking-wide ${forum_splash.className} z-0 pointer-events-none`}
                style={{ fontSize: 250 }}
            >
                RESTAURANTS
            </div>

            {/* Carousel wrapper */}
            <div className="bg-gray-100 flex justify-center items-center">
                <Carousel popularRestaurants={popularRestaurants} />
            </div>

            {/* See All link */}
            <div className="flex items-center my-4">
                <div className="flex-grow border-t border-dashed border-gray-300" />
                <Link
                    href="/restaurants"
                    prefetch
                    className={`mx-4 text-lg text-gray-400 text-center hover:text-amber-500 uppercase ${forum_splash.className}`}
                >
                    {t("seeAll")}
                </Link>
                <div className="flex-grow border-t border-dashed border-gray-300" />
            </div>
        </section>
    );
}

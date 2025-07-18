"use client";

import RestaurantSearchBar from "@/components/RestaurantSearchBar";
import { restaurants } from "@/constants/restaurants";
import { useTranslation } from "next-i18next";
import i18n from "i18next";
import { forum_splash, kids_splash } from "@/app/fonts";
import React from "react";

export default function Hero() {
    const { t } = useTranslation();

    const currentLanguage = i18n.language;
    const isHy = currentLanguage === "hy";

    const url = `url('https://images.pexels.com/photos/16120242/pexels-photo-16120242.jpeg')`;
    // const url = `url('https://images.pexels.com/photos/16120265/pexels-photo-16120265.jpeg')`;
    // const url = `url('https://cdn0.weddingwire.com/article/3408/original/1280/jpg/18043-chart-house.jpeg')`;

    const urlImage = url;

    return (
        <div
            className="w-full min-h-[60vh] sm:min-h-screen bg-center bg-cover relative flex flex-col justify-center mt-10 shadow"
            style={{ backgroundImage: urlImage }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-40"></div>

            {/* Text Content */}
            <div
                className="relative z-10 flex flex-col items-center justify-center text-center py-12">
                <h1 className={`${isHy ? "text-xl" : "text-3xl"} sm:text-5xl md:text-6xl font-extrabold text-white max-w-2xl uppercase`}>
                    {t("title")}
                </h1>
                <p className={`${isHy ? "text-xs" : "sm:text-lg"} text-white mt-4 max-w-xl font-bold`}>
                    {t("subTitle")}
                </p>
            </div>

            {/* Search Bar */}
            <div className="relative z-10 flex justify-center pb-10 sm:pb-20">
                <RestaurantSearchBar
                    restaurants={restaurants}
                    onResults={() => {
                    }}
                />
            </div>
        </div>
    );
}

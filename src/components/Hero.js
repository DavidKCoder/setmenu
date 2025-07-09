"use client";

import RestaurantSearchBar from "@/components/RestaurantSearchBar";
import { restaurants } from "@/constants/restaurants";
import { useTranslation } from "next-i18next";

export default function Hero() {
    const { t } = useTranslation();
    const url = `url('https://images.pexels.com/photos/16120242/pexels-photo-16120242.jpeg')`;
    // const url = `url('https://cdn0.weddingwire.com/article/3408/original/1280/jpg/18043-chart-house.jpeg')`;

    const urlImage = url;

    return (
        <div
            className="w-full min-h-[60vh] sm:min-h-screen bg-center bg-cover relative flex flex-col justify-center py-5"
            style={{ backgroundImage: urlImage }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Text Content */}
            <div
                className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-12 sm:px-8 sm:py-20">
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white max-w-2xl uppercase">
                    {t("title")}
                </h1>
                <p className="text-white text-base sm:text-lg md:text-xl mt-4 max-w-xl font-bold">
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

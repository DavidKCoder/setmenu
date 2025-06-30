"use client";

import RestaurantSearchBar from "@/components/RestaurantSearchBar";
import { restaurants } from "@/constants/restaurants";
import { useTranslation } from "next-i18next";

export default function Hero() {
    const { t } = useTranslation();
    const urlImage = `url('/hero_bg.jpeg')`

    return (
        <div
            className="w-full h-auto sm:h-screen bg-fixed bg-center bg-cover py-12 sm:p-0 xl:p-0"
            style={{ backgroundImage: urlImage }}
        >
            <div className="relative inset-0 bg-black/40 px-6 py-10 top-24 flex items-start justify-start">
                <div className="max-w-xl space-y-6">
                    <h1 className="text-3xl md:text-6xl font-extrabold text-white">
                        {t("title")}
                    </h1>
                    <p className="text-white text-lg font-light">
                        {t("subTitle")}
                    </p>
                </div>
            </div>
            <div className="relative max-w-6xl m-auto top-16">
                <RestaurantSearchBar
                    restaurants={restaurants}
                    onResults={() => {
                    }}
                />
            </div>
        </div>
    );
}


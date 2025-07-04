"use client";

import React, { Suspense, useState } from "react";
import { restaurants } from "@/constants/restaurants";
import RestaurantCard from "@/app/restaurants/components/RestaurantCard";
import Link from "next/link";
import "react-datepicker/dist/react-datepicker.css";
import RestaurantSearchBar from "@/components/RestaurantSearchBar";
import Image from "next/image";
import { forum_splash } from "@/app/fonts";
import { useTranslation } from "next-i18next";

export default function AllRestaurantsPage() {
    const { t } = useTranslation();
    const [filteredRestaurants, setFilteredRestaurants] = useState(restaurants);

    return (
        <>
            <section className="bg-white text-black">
                <section
                    className="relative w-full bg-center bg-cover grid items-center h-auto md:h-96 lg:h-96 xl:h-96"
                    style={{ backgroundImage: `url('https://images.pexels.com/photos/27626757/pexels-photo-27626757.png')` }} // замените на своё изображение
                >
                    <h1 className={`relative text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl py-8 sm:py-8 md:py-0 lg:py-0 xl:py-0 text-white text-center uppercase tracking-widest ${forum_splash.className}`}
                        style={{ fontWeight: 600 }}>
                        All Restaurants
                    </h1>
                    <div className="flex justify-center items-center sm:mt-20">
                        <Suspense fallback={<div>Loading search...</div>}>
                            <RestaurantSearchBar
                                restaurants={restaurants}
                                onResults={setFilteredRestaurants}
                            />
                        </Suspense>
                    </div>
                </section>
                <div
                    className="ova-section relative h-40 sm:h-56 text-center flex flex-col items-center justify-center">
                    <div
                        className={`text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl uppercase ${forum_splash.className}`}
                        style={{ color: "#C8A96A" }}
                    >
                        Reserve your favorite restaurant
                    </div>

                    <div
                        className={`absolute whitespace-nowrap uppercase opacity-10 font-medium text-gray-400 tracking-wide ${forum_splash.className} z-0 pointer-events-none`}
                        style={{
                            right: 200,
                            fontSize: 150,
                        }}
                    >
                        All Restaurants
                    </div>

                    <div
                        className={`text-gray-600 text-xl uppercase ${forum_splash.className} mt-1`}
                    >
                        Best restaurants for you & family
                    </div>
                </div>

                <div className="max-w-6xl mt-10 mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8 pb-10 px-3">
                    {filteredRestaurants.length > 0 ? (
                        filteredRestaurants.map((restaurant) => (
                            <Link href={`/restaurants/${restaurant.slug}`} key={restaurant.slug}>
                                <RestaurantCard restaurant={restaurant} />
                            </Link>
                        ))
                    ) : (
                        <div
                            className="col-span-full text-center flex flex-col items-center justify-center py-2 text-gray-500">
                            <Image
                                priority
                                src="/no-search-results.svg"
                                alt="No results"
                                width={220}
                                height={120}
                                className="mb-4 opacity-80"
                            />
                            <p className="text-xl font-semibold">{t("noRestaurantsTitle")}</p>
                            <p className="text-sm text-gray-400 mt-1">{t("noRestaurantsSubtitle")}</p>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
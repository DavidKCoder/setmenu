"use client";

import Link from "next/link";
import { restaurants } from "@/constants/restaurants";
import RestaurantCard from "@/app/restaurants/components/RestaurantCard";
import RestaurantSearchBar from "@/components/RestaurantSearchBar";
import React, { useMemo, use, useState } from "react";
import Image from "next/image";
import { FaRegUserCircle } from "react-icons/fa";
import { useTranslation } from "next-i18next";
import { forum_splash, kids_splash } from "@/app/fonts";

export default function CategoryPage({ params }) {
    const { slug } = use(params);
    const { t } = useTranslation();

    const isKids = slug === "kids";
    const urlImage = isKids ? `url('/restaurants//kids_cafe.jpg')` : `url('https://images.pexels.com/photos/27626757/pexels-photo-27626757.png')`;

    const specificRestaurants = useMemo(() => {
        return restaurants.filter((res) => res.categories?.includes(slug));
    }, [slug]);

    const [filteredRestaurants, setFilteredRestaurants] = useState(specificRestaurants);

    const headline = t(`eventHeadlines.${slug}`) || t(`${slug}`) || "Restaurants";
    const subHeadline = t(`eventPageTitles.${slug}`) || t(`${slug}`) || "Restaurants";


    return (
        <>
            <div className="bg-orange-50 mx-auto flex justify-between text-right py-2 px-2">
                <Link href="/" passHref>
                    <div className="flex items-center text-sm gap-2">
                        <Image
                            src="/logo.webp"
                            alt="logo"
                            width="20"
                            height="20"
                            className="object-cover"
                        />
                        <div className="text-lg font-bold text-gray-300 hover:text-gray-400">SetMenu</div>
                    </div>
                </Link>
                <div className="flex items-center text-sm">
                    <div className="text-gray-400 px-1">{" | "}</div>
                    <Link href="/login" passHref>
                        <div
                            className="flex items-center justify-center gap-2 uppercase text-gray-400 tracking-wide text-sm hover:text-amber-500 cursor-pointer">
                            <FaRegUserCircle />
                            Log In
                        </div>
                    </Link>
                </div>
            </div>
            <section className="bg-white text-black">
                <section
                    className="relative w-full bg-center bg-cover grid items-center h-auto md:h-96 lg:h-96 xl:h-96"
                    style={{ backgroundImage: urlImage }}
                >
                    <h1 className={`relative text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl py-8 sm:py-8 md:py-0 lg:py-0 xl:py-0 text-white text-center uppercase tracking-widest ${isKids ? kids_splash.className : forum_splash.className}`}
                        style={{ fontWeight: 600 }}>
                        {slug.replace("-", " ")} Restaurants
                    </h1>

                    <div className="relative max-w-6xl mx-auto">
                        <RestaurantSearchBar
                            restaurants={specificRestaurants}
                            onResults={setFilteredRestaurants}
                        />
                    </div>
                </section>

                <div className="ova-section relative h-40 sm:h-56 text-center flex flex-col items-center justify-center">
                    <div
                        className={`text-3xl md:text-4xl lg:text-4xl xl:text-5xl uppercase ${forum_splash.className}`}
                        style={{ color: "#C8A96A" }}
                    >
                        {headline}
                    </div>

                    <div
                        className={`absolute whitespace-nowrap uppercase opacity-10 font-medium text-gray-400 tracking-wide ${forum_splash.className} z-0 pointer-events-none`}
                        style={{
                            right: 200,
                            fontSize: 150,
                        }}
                    >
                        {slug.replace("-", " ")} Restaurants
                    </div>

                    <div
                        className={`text-gray-600 text-lg capitalize ${forum_splash.className} mt-1`}
                    >
                        {isKids ? `${subHeadline}  ⋆｡‧˚ʚ🧸ɞ˚‧｡⋆` : subHeadline}
                    </div>
                </div>

                <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8 pb-10 px-3">
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

"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { restaurants } from "@/constants/restaurants";
import RestaurantCard from "@/app/restaurants/components/RestaurantCard";
import { forum_splash, splash } from "@/app/fonts";
import { useTranslation } from "next-i18next";

const popularRestaurants = restaurants.slice(0, 5);

export default function PopularRestaurants() {
    const {t} = useTranslation();
    const carouselRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (carouselRef.current) {
                carouselRef.current.scrollBy({ left: 200, behavior: "smooth" });
                if (
                    carouselRef.current.scrollLeft +
                    carouselRef.current.clientWidth >=
                    carouselRef.current.scrollWidth - 200
                ) {
                    carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
                }
            }
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative py-16 px-6 bg-white text-black">
            <div className="flex items-center my-4">
                <div className="flex-grow border-t border-gray-300" />
                <h2 className={`mx-4 text-3xl text-gray-400 text-center font-semibold capitalize ${splash.className}`}>
                    {t("popularRestaurants")}
                </h2>
                <div className="flex-grow border-t border-gray-300" />
            </div>
            <div
                className={`absolute whitespace-nowrap uppercase opacity-10 font-medium text-gray-400 tracking-wide ${forum_splash.className} z-0 pointer-events-none`}
                style={{
                    top: -100,
                    right: 400,
                    fontSize: 250
                }}
            >
                RESTAURANTS
            </div>
            <div
                ref={carouselRef}
                className="relative z-10 flex gap-6 overflow-x-auto scroll-smooth no-scrollbar px-4 py-4"
            >
                {[...popularRestaurants, ...popularRestaurants].map((restaurant, i) => (
                    <div
                        key={`${restaurant.name}-${i}`}
                        className="w-full sm:w-1/2 md:w-1/3 flex-shrink-0 rounded-xl shadow hover:shadow-emerald-400 transition overflow-hidden"
                    >
                        <Link href={`/restaurants/${restaurant.slug}`} passHref>
                            <RestaurantCard restaurant={restaurant} />
                        </Link>
                    </div>
                ))}
            </div>
            <div className="flex items-center my-4">
                <div className="flex-grow border-t border-dashed border-gray-300" />
                <Link href="/restaurants" prefetch
                      className={`mx-4 text-lg text-gray-400 text-center hover:text-amber-500 uppercase ${forum_splash.className}`}>
                    {t("seeAll")}
                </Link>
                <div className="flex-grow border-t border-dashed border-gray-300" />
            </div>
        </section>
    );
}
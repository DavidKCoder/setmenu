"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { restaurants } from "@/constants/restaurants";
import RestaurantCard from "@/app/restaurants/components/RestaurantCard";
import { forum_splash } from "@/app/fonts";
import { useTranslation } from "next-i18next";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const popularRestaurants = restaurants.slice(0, 5);

export default function PopularRestaurants() {
    const { t } = useTranslation();
    const carouselRef = useRef(null);

    const scrollAmount = typeof window !== "undefined" ? window.innerWidth - 16 : 300;

    useEffect(() => {
        const interval = setInterval(() => {
            if (carouselRef.current) {
                carouselRef.current.scrollBy({
                    left: scrollAmount,
                    behavior: "smooth",
                });

                if (
                    carouselRef.current.scrollLeft + carouselRef.current.clientWidth >=
                    carouselRef.current.scrollWidth - scrollAmount
                ) {
                    carouselRef.current.scrollTo({
                        left: 0,
                        behavior: "smooth",
                    });
                }
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [scrollAmount]);

    const scrollPrev = () => {
        carouselRef.current?.scrollBy({
            left: -scrollAmount,
            behavior: "smooth",
        });
    };

    const scrollNext = () => {
        carouselRef.current?.scrollBy({
            left: scrollAmount,
            behavior: "smooth",
        });
    };

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
            <div className="relative">
                {/* Carousel container */}
                <div
                    ref={carouselRef}
                    className="relative z-10 flex gap-6 overflow-x-auto scroll-smooth no-scrollbar px-2 sm:px-4 py-4"
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

                {/* Prev Button */}
                <button
                    onClick={scrollPrev}
                    className="hidden sm:flex absolute top-1/2 left-2 transform -translate-y-1/2 bg-main hover:bg-orange-300 text-white p-3 rounded-full z-20"
                    aria-label="Scroll previous"
                >
                    <FaChevronLeft />
                </button>

                {/* Next Button */}
                <button
                    onClick={scrollNext}
                    className="hidden sm:flex absolute top-1/2 right-2 transform -translate-y-1/2 bg-main hover:bg-orange-300 text-white p-3 rounded-full z-20"
                    aria-label="Scroll next"
                >
                    <FaChevronRight />
                </button>
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

"use client";

import Image from "next/image";
import { forum_splash } from "@/app/fonts";
import { useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useTranslation } from "next-i18next";

export default function Testimonials() {
    const { t } = useTranslation();
    const testimonials = [
        {
            name: "Emily R.",
            feedback:
                "SetMenu helped me find the perfect menu for my wedding! The restaurant options were amazing, and the process was so easy.",
            avatar: "https://ui-avatars.com/api/?name=Emily+R&background=E0F2F1&color=00695C&rounded=true",
            rating: 5,
        },
        {
            name: "David M.",
            feedback:
                "As an event planner, SetMenu is my go-to. It saves me time and connects me with top-tier restaurants effortlessly.",
            avatar: "https://ui-avatars.com/api/?name=David+R&background=E0F2F1&color=00695C&rounded=true",
            rating: 4,
        },
        {
            name: "Lucy A.",
            feedback:
                "I discovered local gems I’d never tried before. My birthday dinner was unforgettable thanks to SetMenu.",
            avatar: "https://ui-avatars.com/api/?name=Lucy+R&background=E0F2F1&color=00695C&rounded=true",
            rating: 5,
        },
        {
            name: "Emily R.",
            feedback:
                "SetMenu helped me find the perfect menu for my wedding! The restaurant options were amazing, and the process was so easy.",
            avatar: "https://ui-avatars.com/api/?name=Emily+R&background=E0F2F1&color=00695C&rounded=true",
            rating: 5,
        },
        {
            name: "David M.",
            feedback:
                "As an event planner, SetMenu is my go-to. It saves me time and connects me with top-tier restaurants effortlessly.",
            avatar: "https://ui-avatars.com/api/?name=David+R&background=E0F2F1&color=00695C&rounded=true",
            rating: 4,
        },
        {
            name: "Lucy A.",
            feedback:
                "I discovered local gems I’d never tried before. My birthday dinner was unforgettable thanks to SetMenu.",
            avatar: "https://ui-avatars.com/api/?name=Lucy+R&background=E0F2F1&color=00695C&rounded=true",
            rating: 5,
        },
    ];

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
                    {t("whatOurClientSays")}
                </h2>
                <div className="flex-grow border-t border-gray-300" />
            </div>

            {/* Watermark text */}
            <div
                className={`absolute whitespace-nowrap pt-5 -top-24 right-40 sm:right-96 md:right-96 lg:right-96 uppercase opacity-10 font-medium text-gray-400 tracking-wide ${forum_splash.className} z-0 pointer-events-none`}
                style={{ fontSize: 250 }}
            >
                our clients
            </div>

            {/* Carousel wrapper */}
            <div className="relative">
                {/* Carousel container */}
                <div
                    ref={carouselRef}
                    className="relative w-full bg-orange-50 z-10 flex gap-6 overflow-x-auto scroll-smooth no-scrollbar px-2 sm:px-4 py-8"
                >
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className="w-full sm:w-1/2 md:w-1/3 bg-white p-6 rounded-xl shadow-md hover:shadow-emerald-300 transition flex-shrink-0"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                    <Image
                                        src={t.avatar}
                                        alt={t.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="font-semibold text-emerald-700">{t.name}</p>
                                    <div className="text-yellow-500 text-sm">
                                        {"★".repeat(t.rating)}{"☆".repeat(5 - t.rating)}
                                    </div>
                                </div>
                            </div>
                            <p className="italic text-gray-800">“{t.feedback}”</p>
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
        </section>
    );
}

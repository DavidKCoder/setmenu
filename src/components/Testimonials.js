"use client";

import { forum_splash } from "@/app/fonts";
import { useTranslation } from "next-i18next";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";

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
            <div className="relative bg-gray-50 py-6">
                <TestimonialsCarousel testimonials={testimonials} />
            </div>
        </section>
    );
}

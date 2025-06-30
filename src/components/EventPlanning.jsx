"use client";

import { oswald_splash, splash } from "@/app/fonts";
import { useTranslation } from "next-i18next";

export default function EventPlanning() {
    const { t } = useTranslation();

    return (
        <section className="bg-white py-16">
            <div className="flex items-center my-4">
                <div className="flex-grow border-t border-gray-300" />
                <h2 className={`mx-4 text-3xl text-gray-400 text-center font-semibold capitalize ${splash.className}`}>
                    {t("event planning")}
                </h2>
                <div className="flex-grow border-t border-gray-300" />
            </div>

            {/*<p className="text-gray-500 mt-2 tracking-widest uppercase text-sm">For all your catering needs</p>*/}


            {/* Wave line */}
            <div className="relative mb-12 hidden sm:hidden md:block lg:block xl:block">
                <svg viewBox="0 0 1440 70" fill="none" xmlns="http://www.w3.org/2000/svg"
                     className="absolute inset-0 w-full h-24">
                    <path d="M0,60 C360,140 1080,25 1440,85 L1440,120 L0,120 Z" fill="#f9f9f9" />
                </svg>
            </div>

            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8 text-center">
                {[
                    {
                        step: "01",
                        title: "Submit Your Request",
                        desc: "Choose the restaurant, event type, and preferred date.",
                    },
                    {
                        step: "02",
                        title: "Confirm Details",
                        desc: "Review and confirm your menu, number of guests, and reservation info.",
                    },
                    {
                        step: "03",
                        title: "We Plan Everything",
                        desc: "Our team coordinates with the restaurant to prepare your perfect event.",
                    },
                    {
                        step: "04",
                        title: "Enjoy Your Event!",
                        desc: "Arrive, relax, and enjoy a beautifully organized dining experience.",
                    },
                ].map(({ step, title, desc }) => (
                    <div key={step}>
                        <div className={`text-6xl font-bold text-gray-200 mb-4 ${oswald_splash.className}`}>{step}</div>
                        <h3 className="text-lg font-semibold text-gray-600">{title}</h3>
                        <p className="text-gray-500 text-sm mt-2">{desc}</p>
                    </div>
                ))}
            </div>

        </section>

    );
}

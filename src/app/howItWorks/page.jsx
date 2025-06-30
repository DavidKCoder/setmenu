import React from "react";
import { forum_splash } from "@/app/fonts"; // Your font import, optional

const steps = [
    {
        title: "Discover Restaurants",
        description:
            "Browse top-rated venues perfect for any occasion — birthdays, weddings, corporate events, and more.",
    },
    {
        title: "Select Your Event",
        description:
            "Pick your event type, date, and number of guests to see tailored recommendations.",
    },
    {
        title: "Explore Menus",
        description:
            "View curated menus, pricing, and unique dishes offered by each restaurant.",
    },
    {
        title: "Set Your Menu",
        description:
            "Customize your menu and reserve your event directly through SetMenu.",
    },
    {
        title: "Enjoy Your Event!",
        description:
            "Relax and enjoy a seamless dining experience for you and your guests.",
    },
];

export default function HowItWorks() {
    return (
        <main className="min-h-96 bg-orange-50 py-8 text-black px-4">
            <div className="max-w-5xl mx-auto text-center">
                <h1
                    className={`text-4xl md:text-5xl font-extrabold mb-12 uppercase tracking-widest text-main ${forum_splash.className}`}
                >
                    How It Works
                </h1>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
                    {steps.map(({ title, description }, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center px-2">
                            <div
                                className="w-16 h-16 rounded-full bg-main text-white flex items-center justify-center text-2xl font-bold mb-4">
                                {idx + 1}
                            </div>
                            <h2 className={`text-lg mb-2 text-gray-700 ${forum_splash.className}`} style={{fontWeight: 600}}>{title}</h2>
                            <p className="text-gray-700 text-sm">{description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}

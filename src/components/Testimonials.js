"use client";

import Image from "next/image";
import { forum_splash } from "@/app/fonts";

export default function Testimonials() {
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
    ];

    return (
        <section className="py-16 px-6 bg-orange-50 text-black">
            <h2 className={`text-3xl text-secondary font-semibold mb-10 text-center uppercase ${forum_splash.className}`}>What Our Clients Say</h2>
            <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
                {testimonials.map((t, i) => (
                    <div
                        key={i}
                        className="bg-white p-6 rounded-xl shadow-md hover:shadow-emerald-300 transition"
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
        </section>
    );
}

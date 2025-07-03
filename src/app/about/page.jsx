"use client";

import Link from "next/link";
import { forum_splash } from "@/app/fonts";
import { FaChevronLeft } from "react-icons/fa";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Hero section */}
            <div className="relative h-80 md:h-96 flex items-center justify-center text-center z-10">
                {/* background image layer */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('https://images.pexels.com/photos/17294735/pexels-photo-17294735.jpeg`,
                    }}
                ></div>

                {/* dark overlay on top of background */}
                <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

                {/* text content */}
                <div className="relative z-20 px-4 text-white">
                    <h1
                        className={`text-4xl md:text-5xl uppercase ${forum_splash.className}`}
                    >
                        About Us
                    </h1>
                    <p className="mt-4 max-w-xl mx-auto text-gray-200 text-sm md:text-base">
                        At SetMenu, we’re dedicated to bringing people together through great food
                        and unforgettable moments. Our mission is to help you discover the perfect
                        restaurant for any occasion, effortlessly.
                    </p>
                </div>
            </div>


            {/* Content section */}
            <div
                className="max-w-6xl w-full mx-auto bg-white -mt-12 md:-mt-16 rounded-lg shadow-lg overflow-hidden z-50">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
                    {/* Text block */}
                    <div>
                        <h2
                            className={`text-2xl md:text-3xl font-bold text-gray-800 mb-4 ${forum_splash.className}`}
                        >
                            Our Mission
                        </h2>
                        <p className="text-gray-600 mb-4">
                            At <Link className="text-custom-beige font-semibold hover:underline hover:text-amber-500" href="/">SetMenu</Link>, our mission is
                            to empower people to celebrate life’s moments
                            with ease and elegance. We aim to bridge the gap between diners and
                            restaurants by providing a transparent, user-friendly, and delightful
                            experience.
                        </p>
                        <p className="text-gray-800 font-semibold italic mb-4">
                            We believe in creating unforgettable dining experiences for every event. From
                            intimate gatherings to grand celebrations, our mission is to connect people
                            through exceptional cuisine and impeccable service.
                        </p>
                        <p className="text-gray-600">
                            From first search to final booking — we’re here to make every event
                            unforgettable. Donec sollicitudin molestie malesuada. Vivamus suscipit
                            tortor eget felis porttitor volutpat.
                        </p>
                    </div>

                    {/* Image block */}
                    <div className="flex items-center justify-center">
                        <div className="relative w-full h-64 md:h-80 rounded overflow-hidden border border-gray-300">
                            <Image
                                src="/new_bg.jpeg"
                                alt="Our Mission"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

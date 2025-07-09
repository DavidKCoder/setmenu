"use client";

import { MapPin } from "lucide-react";
import { FaCalendarAlt, FaMoneyBillWave, FaUsers, FaUtensils } from "react-icons/fa";
import React from "react";
import { MdLocationOn, MdRestaurantMenu } from "react-icons/md";
import { LuNotebookText } from "react-icons/lu";
import { IoVideocam } from "react-icons/io5";
import { forum_splash } from "@/app/fonts";
import { useRouter } from "next/navigation";

export default function RestaurantBookInfoPage({
                                                   date,
                                                   restaurantName,
                                                   people,
                                                   menuVariant,
                                                   location,
                                                   eventType,
                                                   pricePerPerson,
                                               }) {
    const router = useRouter();

    const handleBookEvent = () => {
        const confirmationUrl = `/confirmation/book/?restaurant_name=${encodeURIComponent(name)}&menu_variant=${menuVariant}&eventType=${eventType}&people=${people}&date=${date}&location=${location}&price_per_person=${pricePerPerson}`;
        router.push(confirmationUrl);
    };

    return (
        <main className="min-h-screen flex justify-center items-center bg-gradient-to-br from-gray-900 to-black p-4">
            <div
                className="relative bg-white rounded-3xl w-full max-w-sm md:max-w-4xl shadow-xl overflow-hidden md:flex md:gap-8">
                <div className="relative h-max sm:h-max md:w-1/2 flex-shrink-0">
                    <div className="w-full h-full object-cover relative border-2 overflow-hidden mb-4">
                        <div
                            className="relative h-24 sm:h-full text-center flex items-center justify-center">
                            <div className={`text-3xl sm:text-5xl text-secondary uppercase ${forum_splash.className}`}>
                                {restaurantName}
                            </div>

                            <div
                                className={`absolute whitespace-nowrap uppercase opacity-10 font-medium text-gray-400 tracking-wide ${forum_splash.className} z-0 pointer-events-none animate-fadeIn`}
                                style={{ fontSize: 150 }}
                            >
                                {restaurantName}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right side: Content */}
                <div className="p-5 md:py-8 md:pr-8 md:w-1/2 flex flex-col justify-between">
                    <div>
                        <h2 className="text-xl md:text-3xl font-bold text-gray-800">
                            {restaurantName}
                        </h2>
                        <hr className="py-1 border-t border-amber-400 opacity-30 font-mono" />
                        <div className="flex items-center text-gray-500 text-sm md:text-base mt-1">
                            <MapPin className="w-4 h-4 mr-1" />
                            <span>
                                <a
                                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline"
                                >
                                    {location}
                                </a>
                            </span>
                        </div>
                    </div>
                    <div className="mt-2">
                        <ul className="space-y-1.5 text-sm sm:text-md">
                            <li className="flex items-center gap-2 text-gray-50 font-mono">
                                <FaCalendarAlt className="text-custom-beige" />
                                <span className="text-gray-400">Phone:</span>
                                <a href={`tel:${"+37455753272"}`} className="hover:underline text-gray-800">
                                    {"+37455753272"}
                                </a>
                            </li>
                            <li className="flex items-center gap-2 text-gray-800 font-mono">
                                <FaCalendarAlt className="text-custom-beige" />
                                <span className="text-gray-400">Date:</span> {date}
                            </li>
                            <li className="flex items-center gap-2 text-gray-800 font-mono">
                                <MdRestaurantMenu className="text-custom-beige" />
                                <span className="text-gray-400">Restaurant:</span> {restaurantName}
                            </li>
                            <li className="flex items-center gap-2 text-gray-800 font-mono">
                                <MdLocationOn className="text-custom-beige" />
                                <span className="text-gray-400">Location:</span>
                                <a
                                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline"
                                >
                                    {location}
                                </a>
                            </li>
                            <li className="flex items-center gap-2 text-gray-800 font-mono">
                                <FaUsers className="text-custom-beige" />
                                <span className="text-gray-400">Guests:</span> {people}
                            </li>
                            <li className="flex items-center gap-2 text-gray-800 font-mono capitalize">
                                <FaUtensils className="text-custom-beige" />
                                <span className="text-gray-400">Event Type:</span> {eventType}
                            </li>
                            <li className="flex items-center gap-2 text-gray-800 font-mono">
                                <LuNotebookText className="text-custom-beige" />
                                <span className="text-gray-400">Menu:</span> {menuVariant}
                            </li>
                            <li className="flex items-center gap-2 text-gray-800 font-mono">
                                <LuNotebookText className="text-custom-beige" />
                                <span
                                    className="text-gray-400">Price per person:</span> {(+pricePerPerson).toLocaleString("de-DE")} AMD
                            </li>
                        </ul>
                        <hr className="my-6 border-t border-amber-400 opacity-30 font-mono" />
                        <ul className="space-y-1.5 text-sm sm:text-md font-mono">
                            <li className="flex items-center gap-2 text-gray-800">
                                <FaMoneyBillWave className="text-custom-beige" />
                                <span className="text-gray-400">Total:</span>{" "}
                                {(+people * +pricePerPerson).toLocaleString("de-DE")} AMD
                            </li>
                            <li className="flex items-center gap-2 text-gray-800">
                                <IoVideocam className="text-custom-beige" />
                                <span className="text-gray-400">Extra options:</span>
                                Անվճար DJ / Ֆոտո նկարահանում
                            </li>
                        </ul>
                    </div>

                    <button
                        className="mt-6 w-full bg-custom-beige text-white py-3 rounded-full font-semibold hover:bg-custom-blue transition"
                        onClick={handleBookEvent}
                    >
                        Book Now
                    </button>
                </div>
            </div>
        </main>
    );
}

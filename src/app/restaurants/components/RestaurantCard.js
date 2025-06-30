"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { HiOutlineClock } from "react-icons/hi";
import { dayMap } from "@/constants/dayMap";
import { BsBookmarkStar, BsBookmarkStarFill } from "react-icons/bs";

export default function RestaurantCard({ restaurant }) {
    const today = dayMap[new Date().getDay()];
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("favorite_restaurants")) || [];
        setIsFavorite(stored.includes(restaurant.slug));
    }, [restaurant.slug]);


    const addToFavorite = () => {
        const key = "favorite_restaurants";
        const stored = JSON.parse(localStorage.getItem(key)) || [];

        let updated;
        if (stored.includes(restaurant.slug)) {
            updated = stored.filter(slug => slug !== restaurant.slug);
        } else {
            updated = [...stored, restaurant.slug];
        }
        setIsFavorite(!isFavorite);
        localStorage.setItem(key, JSON.stringify(updated));
    };

    return (
        <div
            className="bg-white rounded-xl shadow overflow-hidden w-[300px] transition-transform duration-200 hover:scale-105 hover:shadow-lg">
            {/* Image with overlay and inner shadow */}
            <div className="relative h-48">
                <div className="relative w-full h-full overflow-hidden rounded-t-xl">
                    <Image
                        src={restaurant.mainImage}
                        alt={restaurant.name}
                        fill
                        className="object-cover"
                    />
                    <div className="absolute top-0 right-0 bottom-0 left-0"
                         style={{
                             background: "linear-gradient(to bottom, transparent 0, transparent 40%, transparent 40%, rgba(0, 0, 0, .7) 100%)",
                         }} />
                    <button className="absolute right-2 top-1" onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        addToFavorite();
                    }}>
                        {isFavorite ?
                            <BsBookmarkStarFill className="text-yellow-500 text-2xl" /> :
                            <BsBookmarkStar className="text-gray-200 text-2xl" />}
                    </button>
                </div>
                <div
                    className="absolute bottom-0 left-0 right-0 bg-black/50 px-4 py-2 flex justify-between items-center">
                    <h3 className="text-white text-lg font-semibold truncate">{restaurant.name}</h3>
                    <div className="flex items-center text-yellow-400 text-sm ml-2">
                        <FaStar className="mr-1" />
                        <span>{restaurant.rating}</span>
                    </div>
                </div>
            </div>

            {/* Info section */}
            <div className="p-4 space-y-2">
                <div className="flex flex-wrap gap-2">
                    {restaurant.categories.map((cat, index) => (
                        <span key={index}
                              className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
                              <span
                                  className="size-1.5 inline-block rounded-full w-1 h-1 bg-blue-800 dark:bg-blue-500"></span>
                            {cat}
                        </span>
                    ))}
                </div>
                <div className="flex justify-between items-center gap-2 text-gray-700 text-sm">
                    <div className="flex justify-between items-center">
                        <FaMapMarkerAlt className="text-cyan-600" />
                        <span className="mx-1 font-bold">{restaurant.location}</span>
                    </div>
                    <span>
                        <span className="list-item">{restaurant.cuisine}</span>
                    </span>
                </div>
                <div className="flex justify-between items-center gap-2 text-gray-600 text-sm">
                    <div className="flex justify-between items-center">
                        <HiOutlineClock className="text-cyan-600" />
                        <span className="mx-1 font-semibold">{restaurant.workingHours[today]}</span>
                    </div>
                </div>
                <div className="flex justify-between items-center gap-2 text-gray-500 text-xs">
                    <div className="flex justify-between items-center">
                        <span className="mx-1">{restaurant.about}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
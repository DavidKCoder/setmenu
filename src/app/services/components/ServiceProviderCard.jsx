"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import { HiOutlineClock } from "react-icons/hi";
import { dayMap } from "@/constants/dayMap";
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";

export default function ServiceProviderCard({ provider }) {
    const [today, setToday] = useState(null);

    useEffect(() => {
        const localDay = new Date().getDay();
        setToday(dayMap[localDay]);
    }, []);

    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("favorite_serviceProviders")) || [];
        setIsFavorite(stored.includes(provider.slug));
    }, [provider.slug]);


    const addToFavorite = () => {
        const key = "favorite_serviceProviders";
        const stored = JSON.parse(localStorage.getItem(key)) || [];

        let updated;
        if (stored.includes(provider.slug)) {
            updated = stored.filter(slug => slug !== provider.slug);
        } else {
            updated = [...stored, provider.slug];
        }
        setIsFavorite(!isFavorite);
        localStorage.setItem(key, JSON.stringify(updated));
    };

    return (
        <div
            className="bg-white h-full flex-shrink-0 overflow-hidden rounded-xl shadow w-[300px] transition-transform duration-200 hover:scale-105 hover:shadow-lg">
            {/* Image with overlay and inner shadow */}
            <div className="relative h-48">
                <div className="relative w-full h-full overflow-hidden rounded-t-xl">
                    <Image
                        src={provider.mainImage}
                        alt={provider.name}
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
                            <MdOutlineFavorite className="text-red-500 text-2xl" /> :
                            <MdOutlineFavoriteBorder className="text-gray-200 text-2xl" />}
                    </button>
                </div>
                <div
                    className="absolute bottom-0 left-0 right-0 bg-black/50 px-4 py-2 flex justify-between items-center">
                    <h3 className="text-white text-lg font-semibold truncate">{provider.name}</h3>
                </div>
            </div>

            {/* Info section */}
            <div className="p-4 space-y-2">
                <div className="flex justify-between items-center gap-2 text-gray-600 text-sm">
                    <div className="flex justify-between items-center">
                        <HiOutlineClock className="text-cyan-600" />
                        <span className="mx-1 font-semibold">{provider.workingHours[today]}</span>
                    </div>
                </div>
                <div className="flex justify-between items-center gap-2 text-gray-500 text-xs">
                    <div className="flex justify-between items-center">
                        <span
                            className="mx-1 block"
                            style={{
                                display: "-webkit-box",
                                WebkitBoxOrient: "vertical",
                                overflow: "hidden",
                                WebkitLineClamp: 3,
                            }}
                        >
                            {provider.about}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
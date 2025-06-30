import { FaMapMarkerAlt, FaMoneyBillWave, FaStar, FaUtensils } from "react-icons/fa";
import { IoShareOutline } from "react-icons/io5";
import { BsLink45Deg } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";
import { forum_splash } from "@/app/fonts";
import React, { use, useState } from "react";
import RestaurantRating from "@/app/restaurants/components/RestaurantRating";

export default function RestaurantHeader({ name, slug, rating, cuisine, location, price }) {
    const [copied, setCopied] = useState(false);

    const handleCopyLink = () => {
        navigator.clipboard
            .writeText(window.location.href)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 1000);
            })
            .catch(() => {
                console.error("Failed to copy");
            });
    };

    const handleEmail = () => {
        const subject = encodeURIComponent("Check out this page!");
        const body = encodeURIComponent(`I thought you might like this:\n\n${window.location.href}`);

        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&su=${subject}&body=${body}`;

        window.open(gmailUrl, "_blank");
    };

    return (
        <>
            <div className="flex gap-5 items-center overflow-hidden mb-4 px-3 bg-orange-50 h-40 rounded-xl">
                <img className="w-15 rounded-full"
                     src={`https://ui-avatars.com/api/?color=fbfefb&background=e9c0a4&name=${name}`}
                     alt="Rounded avatar" />
                <div className="ova-section relative h-56 text-center flex flex-col items-center justify-center">
                    <div className={`text-4xl text-secondary uppercase ${forum_splash.className}`}>
                        {name}
                    </div>

                    <div
                        className={`absolute whitespace-nowrap uppercase opacity-10 font-medium text-gray-400 tracking-wide ${forum_splash.className} z-0 pointer-events-none animate-fadeIn`}
                        style={{ fontSize: 160 }}
                    >
                        {name}
                    </div>
                </div>


            </div>
            <div className="flex flex-wrap items-center justify-between gap-6 mb-6 text-gray-700">
                <div className="flex flex-wrap items-center gap-2">
                    <RestaurantRating rating={rating} />
                    <span className="flex items-center gap-1"><FaUtensils /> {cuisine}</span>
                    <span className="flex items-center gap-1"><FaMapMarkerAlt /> {location}</span>
                    <span className="flex items-center gap-1"><FaMoneyBillWave /> {price}</span>
                </div>

                {/* Dropdown section*/}
                <div className="bg-white justify-center z-50">
                    <div className="flex items-center justify-center">
                        <div className="relative inline-block text-left dropdown">
                        <span className="rounded-md shadow-sm">
                        <button
                            className="inline-flex items-center gap-2 justify-center w-full px-4 py-2 font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
                            type="button" aria-haspopup="true" aria-expanded="true"
                            aria-controls="headlessui-menu-items-117">
                            <span className="text-xl items-center"><IoShareOutline /></span>
                            <span>Share</span>
                        </button>
                        </span>
                            <div
                                className="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
                                <div
                                    className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg z-50"
                                    role="menu"
                                >
                                    <button
                                        onClick={handleEmail}
                                        className="w-full px-4 py-3 flex items-center gap-2 hover:bg-gray-100 text-gray-700 text-sm"
                                    >
                                        <MdOutlineMail className="text-lg" />
                                        <span>Email</span>
                                    </button>
                                    <button
                                        onClick={handleCopyLink}
                                        className={`w-full px-4 py-3 flex items-center gap-2 hover:bg-gray-100 ${copied ? "text-green-500" : "text-gray-700"} text-sm`}
                                    >
                                        <BsLink45Deg className="text-lg" />
                                        <span>{copied ? "Link copied!" : "Copy link"}</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

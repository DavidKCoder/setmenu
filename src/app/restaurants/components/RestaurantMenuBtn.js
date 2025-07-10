"use client";

import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useRouter } from "next/navigation";
import { BiDish } from "react-icons/bi";
import { forum_splash } from "@/app/fonts";

export default function RestaurantMenuBtn({ slug, categories }) {
    const router = useRouter();

    const handleNavigateMenu = () => {
        router.push(`/restaurants/${slug}/variants`);
    };

    return (
        <>
            <div className="w-full h-40 relative overflow-hidden">
                <div
                    className="ova-section relative h-40 text-center flex items-center justify-center">
                    <div
                        className="text-xl text-secondary uppercase border rounded-lg border-main p-2 hover:bg-gray-200">
                        <button
                            type="button"
                            className="px-3 py-2.5 flex items-center cursor-pointer text-white tracking-wider font-medium border-none rounded-md outline-none bg-main hover:bg-orange-400 active:bg-red-600"
                            onClick={() => handleNavigateMenu(true)}
                        >
                            <BiDish size={22} />
                            <span className="px-2">
                                Choose menu
                            </span>
                        </button>
                    </div>

                    <div
                        className={`absolute whitespace-nowrap uppercase opacity-10 font-medium text-gray-400 tracking-wide ${forum_splash.className} z-0 pointer-events-none animate-fadeIn`}
                        style={{ fontSize: 120 }}
                    >
                        {slug} menu
                    </div>
                </div>
            </div>
            <hr className="my-6 border-t border-main opacity-30 font-mono" />
        </>
    );
}

"use client";

import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useRouter } from "next/navigation";
import { BiDish } from "react-icons/bi";

export default function RestaurantMenuBtn({ slug, categories }) {
    const router = useRouter();

    const handleNavigateMenu = () => {
        router.push(`/restaurants/${slug}/variants`);
    };

    return (
        <>
            <div className="my-10 text-left">
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
        </>
    );
}

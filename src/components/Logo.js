"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo({ size = 20, textColor = "text-gray-300" }) {
    const userName = "David Karapetyan";

    return (
        <div className="w-full flex justify-between items-center">
            <Link href="/" passHref>
                <div className="flex items-center text-sm gap-2 cursor-pointer">
                    <Image
                        src="/logo.webp"
                        alt="logo"
                        width={size}
                        height={size}
                        className="object-cover"
                    />
                    <div className={`text-base font-bold ${textColor} hover:text-gray-400 ml-1`}>
                        SetMenu
                    </div>
                </div>
            </Link>
            <Link href="/profile" passHref>
                {/*<PiUserCircleGearFill size={30} />*/}
                <img className="w-6 sm:w-8 rounded-full border-custom-beige border-2"
                     src={`https://ui-avatars.com/api/?color=fbfefb&background=e9c0a4&name=${userName}`}
                     alt="Rounded avatar" />
            </Link>
        </div>
    );
}
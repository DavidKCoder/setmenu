"use client";

import Image from "next/image";
import Link from "next/link";
import { PiUserCircleGearFill } from "react-icons/pi";
import React from "react";

export default function Logo({ size = 20, textColor = "text-gray-300" }) {
    return (
        <>
            <Link href="/" passHref>
                <div className="flex items-center text-sm gap-2 cursor-pointer">
                    <Image
                        src="/logo.webp"
                        alt="logo"
                        width={size}
                        height={size}
                        className="object-cover"
                    />
                    <div className={`text-lg font-bold ${textColor} hover:text-gray-400 ml-1`}>
                        SetMenu
                    </div>
                </div>
            </Link>
            <div className="flex items-center text-gray-100 p-1 bg-custom-beige rounded-full">
                <Link href="/profile" passHref>
                    <PiUserCircleGearFill size={30} />
                </Link>
            </div>
        </>
    );
}
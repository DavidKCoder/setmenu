"use client";

import React from "react";
import { forum_splash } from "@/app/fonts";

export default function MainPageLoader() {

    return (
        <div className="w-full h-screen flex justify-center items-center bg-white">
            <div className="w-full h-screen relative overflow-hidden">
                <div
                    className="ova-section relative h-screen text-center flex items-center justify-center">
                    <div
                        className="text-xl text-secondary uppercase">
                        <div className="loader"></div>
                    </div>

                    <div
                        className={`absolute uppercase opacity-10 font-medium text-gray-400 tracking-wide ${forum_splash.className} z-0 pointer-events-none animate-fadeIn`}
                        style={{ fontSize: 200 }}
                    >
                        menu
                    </div>
                </div>
            </div>
        </div>
    );
}

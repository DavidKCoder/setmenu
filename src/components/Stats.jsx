"use client";

import CountUp from "react-countup";
import { forum_splash, splash } from "@/app/fonts";

export default function Stats() {
    return (
        <div className="bg-white py-10 sm:py-10">
            <div
                className="sm:bg-fixed bg-cover bg-center py-16 sm:py-16"
                style={{
                    backgroundImage: "url('https://images.pexels.com/photos/14280792/pexels-photo-14280792.jpeg')",
                }}
            >
                <div className="bg-white/80 backdrop-blur-md rounded-xl mx-auto max-w-7xl px-6 py-16 lg:px-8">
                    <dl className="grid grid-cols-3 sm:grid-cols-3 gap-x-8 gap-y-16 text-center">
                        <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className={`text-xl leading-7 text-white p-1 uppercase ${forum_splash.className}`}>Restaurants
                                Listed
                            </dt>
                            <dd className={`order-first text-4xl font-bold tracking-tight text-white sm:text-6xl italic ${splash.className}`}>
                                <CountUp end={50} duration={2.5} separator="," suffix="+" enableScrollSpy />
                            </dd>
                        </div>
                        <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className={`text-xl leading-7 text-white p-1 uppercase ${forum_splash.className}`}>Menus
                                Available
                            </dt>
                            <dd className={`order-first text-4xl font-bold tracking-tight text-white sm:text-6xl italic ${splash.className}`}>
                                <CountUp end={100} duration={2.5} separator="," suffix="+" enableScrollSpy />
                            </dd>
                        </div>
                        <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className={`text-xl leading-7 text-white p-1 uppercase ${forum_splash.className}`}>Monthly
                                Users
                            </dt>
                            <dd className={`order-first text-4xl font-bold tracking-tight text-white sm:text-6xl italic ${splash.className}`}>
                                <CountUp end={2500} duration={2.5} separator="," suffix="+" enableScrollSpy />
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    );
}
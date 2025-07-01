"use client";

import CountUp from "react-countup";
import { splash } from "@/app/fonts";

export default function Stats() {
    return (
        <div className="bg-white py-10 sm:py-10">
            <div
                className="bg-fixed bg-cover bg-center py-16 sm:py-16"
                style={{ backgroundImage: "url('/stats_cover.jpg')" }}
            >
                <div className="bg-white/80 backdrop-blur-md rounded-xl mx-auto max-w-7xl px-6 py-16 lg:px-8">
                    <dl className="grid grid-cols-3 sm:grid-cols-3 gap-x-8 gap-y-16 text-center">
                        <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className="text-xl leading-7 text-white">Restaurants Listed</dt>
                            <dd className={`order-first text-4xl font-bold tracking-tight text-white sm:text-6xl italic ${splash.className}`}>
                                <CountUp end={20} duration={2.5} separator="," suffix="+" enableScrollSpy />
                            </dd>
                        </div>
                        <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className="text-xl leading-7 text-white">Menus Available</dt>
                            <dd className={`order-first text-4xl font-bold tracking-tight text-white sm:text-6xl italic ${splash.className}`}>
                                <CountUp end={60} duration={2.5} separator="," suffix="+" enableScrollSpy />
                            </dd>
                        </div>
                        <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                            <dt className="text-xl leading-7 text-white">Monthly Users</dt>
                            <dd className={`order-first text-4xl font-bold tracking-tight text-white sm:text-6xl italic ${splash.className}`}>
                                <CountUp end={1200} duration={2.5} separator="," suffix="+" enableScrollSpy />
                            </dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    );
}
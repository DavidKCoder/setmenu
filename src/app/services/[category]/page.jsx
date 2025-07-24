"use client";

import { useTranslation } from "next-i18next";
import React, { use, useEffect, useState } from "react";
import Logo from "@/components/Logo";
import { forum_splash } from "@/app/fonts";
import Link from "next/link";

import { cakeProviders } from "@/constants/serviceProviders/cakeProviders";
import { decorationProviders } from "@/constants/serviceProviders/decorationProviders";
import ServiceProviderCard from "@/app/services/components/ServiceProviderCard";

export default function ServicesPage({ params }) {
    const { category } = use(params);
    const { t } = useTranslation();

    const [filteredProviders, setFilteredProviders] = useState([]);

    useEffect(() => {
        if (category === "cakes") {
            setFilteredProviders(cakeProviders);
        } else if (category === "decorations") {
            setFilteredProviders(decorationProviders);
        } else {
            setFilteredProviders([]); // fallback if category not found
        }
    }, [category]);

    const getTitle = () => {
        if (category === "cakes") return t("cakeProviders.title");
        if (category === "decorations") return t("decorationProviders.title");
        return t("unknownCategory.title");
    };

    const getSubtitle = () => {
        if (category === "cakes") return t("cakeProviders.subtitle");
        if (category === "decorations") return t("decorationProviders.subtitle");
        return "";
    };

    const getReserveText = () => {
        if (category === "cakes") return t("cakeProviders.reserveText");
        if (category === "decorations") return t("decorationProviders.reserveText");
        return "";
    };

    const getAllLabel = () => {
        if (category === "cakes") return t("cakeProviders.allLabel");
        if (category === "decorations") return t("decorationProviders.allLabel");
        return "";
    };

    return (
        <>
            <div className="bg-gray-100 mx-auto flex justify-between text-right py-1 px-2">
                <Logo />
            </div>
            <section className="bg-white text-black">
                <section
                    className="relative w-full bg-center bg-cover grid items-center h-auto py-2 sm:py-0 md:h-96 lg:h-96 xl:h-96"
                    style={{
                        backgroundImage: `url(${
                            category === "cakes" ?
                                "https://images.pexels.com/photos/16120218/pexels-photo-16120218.jpeg"
                                : "https://images.pexels.com/photos/15928649/pexels-photo-15928649.jpeg"})`,
                    }}
                >
                    <h1
                        className={`relative text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl py-8 text-white text-center uppercase tracking-widest ${forum_splash.className}`}
                        style={{ fontWeight: 600 }}
                    >
                        {getTitle()}
                    </h1>
                </section>

                <div
                    className="ova-section relative h-40 sm:h-48 text-center flex flex-col items-center justify-center">
                    <div
                        className={`text-3xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl uppercase ${forum_splash.className}`}
                        style={{ color: "#C8A96A" }}
                    >
                        {getReserveText()}
                    </div>

                    <div
                        className={`absolute whitespace-nowrap uppercase opacity-10 font-medium text-gray-400 tracking-wide ${forum_splash.className} z-0 pointer-events-none`}
                        style={{
                            right: 200,
                            fontSize: 150,
                        }}
                    >
                        {getAllLabel()}
                    </div>

                    <div
                        className={`text-gray-600 text-xl uppercase ${forum_splash.className} mt-1`}
                    >
                        {getSubtitle()}
                    </div>
                </div>

                <div className="max-w-6xl mt-10 mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8 pb-10 px-3">
                    {filteredProviders.length > 0 ? (
                        filteredProviders.map((provider) => (
                            <Link href={`/services/${category}/${provider.slug}`} key={provider.slug}>
                                <ServiceProviderCard provider={provider} />
                            </Link>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-12 text-gray-500">
                            <p className="text-xl font-semibold">{t("noProvidersTitle")}</p>
                            <p className="text-sm text-gray-400 mt-1">{t("noProvidersSubtitle")}</p>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}

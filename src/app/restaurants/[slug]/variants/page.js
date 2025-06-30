"use client";

import React, { use } from "react";
import { restaurants } from "@/constants/restaurants";
import { useRouter } from "next/navigation";
import MenuVariantCard from "@/app/restaurants/[slug]/variants/components/MenuVariantCard";
import Image from "next/image";
import Link from "next/link";
import { forum_splash } from "@/app/fonts";
import { useTranslation } from "next-i18next";
import ComingSoonSection from "@/app/restaurants/[slug]/variants/components/ComingSoonSection";

export default function MenuVariantSelector({ params }) {
    const router = useRouter();
    const { t } = useTranslation();
    const { slug } = use(params);

    const restaurant = restaurants.find(r => r.slug === slug);

    const onSelectVariant = (variant) => {
        const isLoggedIn = localStorage.getItem("token");

        const nextUrl = `/restaurants/${slug}/menu?variant=${variant}`;

        if (!isLoggedIn) {
            router.push(`/login?redirect=${encodeURIComponent(nextUrl)}`);
            return;
        }

        router.push(nextUrl);
    };

    if (!restaurant?.menuVariants.length) return <ComingSoonSection />;

    return (
        <div className="relative min-h-screen overflow-hidden">
            <div
                className="absolute top-0 left-0 w-full h-full -z-10 bg-fixed bg-cover bg-center"
                style={{ backgroundImage: "url('https://images.pexels.com/photos/1741285/pexels-photo-1741285.jpeg')" }}
            />
            <div
                className="w-full items-center bg-white border rounded-xl gap-6 max-w-5xl mx-auto px-6 my-2 relative py-8 bg-opacity-80 text-black">
                <Link href="/" passHref className="hidden sm:block md:block lg:block xl:block">
                    <div className="absolute flex items-center gap-2">
                        <Image
                            src="/logo.webp"
                            alt="SetMenu logo"
                            width="20"
                            height="20"
                            className="object-cover"
                        />
                        <div className="text-lg font-bold text-gray-800">SetMenu</div>
                    </div>
                </Link>
                <h1 className={`text-3xl  text-center uppercase underline ${forum_splash.className}`}
                    style={{ textDecorationColor: "#E9C0A4", textUnderlineOffset: 4, textDecorationThickness: 3 }}>
                    {restaurant.name} Menu
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 py-8">
                    {restaurant?.menuVariants.map((variant) => (
                        <MenuVariantCard
                            key={variant.id}
                            variant={variant}
                            onSelectVariant={onSelectVariant}
                        />
                    ))}
                </div>

            </div>
        </div>
    );
}

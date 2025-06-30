"use client";

import { use } from "react";
import { restaurants } from "@/constants/restaurants";
import NoMenuCase from "@/app/restaurants/[slug]/menu/components/NoMenuCase";
import Menu from "@/app/restaurants/[slug]/menu/components/Menu";
import { useSearchParams } from "next/navigation";

export default function MenuPage({ params }) {
    const { slug } = use(params);
    const searchParams = useSearchParams();
    const variantType = searchParams.get("variant");

    const restaurant = restaurants.find(r => r.slug === slug);

    if (!restaurant.menuVariants) return <NoMenuCase />;

    const selectedVariant = restaurant.menuVariants.find(r => r.id === variantType);

    return (
        <div className="relative min-h-screen overflow-hidden py-6 px-4">
            <div
                className="absolute top-0 left-0 w-full h-full -z-10 bg-fixed bg-cover bg-center"
                style={{ backgroundImage: "url('/menu_cover.jpg')" }}
            />
            <Menu
                restaurant={restaurant}
                selectedVariant={selectedVariant}
            />
        </div>
    );
}

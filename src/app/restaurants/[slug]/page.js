"use client";

import React, { use } from "react";
import { restaurants } from "@/constants/restaurants";
import RestaurantHeader from "@/app/restaurants/components/RestaurantHeader";
import RestaurantGallery from "@/app/restaurants/components/RestaurantGallery";
import RestaurantDetails from "@/app/restaurants/components/RestaurantDetails";
import RestaurantMap from "@/app/restaurants/components/RestaurantMap";
import RestaurantReviews from "@/app/restaurants/components/RestaurantReviews";
import RestaurantMenuBtn from "@/app/restaurants/components/RestaurantMenuBtn";
import RestaurantCategories from "@/app/restaurants/components/RestaurantCategories";
import { notFound } from "next/navigation";

export default function RestaurantPage({ params }) {
    const { slug } = use(params);
    const restaurant = restaurants.find(r => r.slug === slug);

    if (!restaurant) return notFound();

    return (
        <main className="px-3 py-2 sm:py-4 md:py-4 bg-white text-black max-w-6xl mx-auto">
            <RestaurantHeader {...restaurant} />
            <RestaurantGallery mainImage={restaurant.mainImage} images={restaurant.images} />
            <RestaurantDetails
                about={restaurant.about}
                features={restaurant.features}
                workingHours={restaurant.workingHours}
                location={restaurant.location}
                phone={restaurant.phone}
                email={restaurant.email}
            />
            <RestaurantCategories categories={restaurant.categories} />
            <RestaurantMenuBtn slug={restaurant.slug} categories={restaurant.categories} />
            <RestaurantMap location={restaurant.location} />
            <RestaurantReviews />
        </main>
    );
}

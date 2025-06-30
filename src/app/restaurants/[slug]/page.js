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

export default function RestaurantPage({ params }) {
    const { slug } = use(params);
    const restaurant = restaurants.find(r => r.slug === slug);

    if (!restaurant) return <div className="p-12 text-center text-xl">Restaurant not found</div>;

    return (
        <main className="px-3 py-4 bg-white text-black max-w-6xl mx-auto">
            <RestaurantHeader {...restaurant} />
            <RestaurantGallery mainImage={restaurant.mainImage} images={restaurant.images} />
            <RestaurantDetails
                about={restaurant.about}
                features={restaurant.features}
                workingHours={restaurant.workingHours}
                location={restaurant.location}
                phone={restaurant.phone}
            />
            <RestaurantCategories categories={restaurant.categories} />
            <RestaurantMenuBtn slug={restaurant.slug} categories={restaurant.categories} />
            <RestaurantMap location={restaurant.location} />
            <RestaurantReviews />
        </main>
    );
}

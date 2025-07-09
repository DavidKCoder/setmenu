"use client";

import { Suspense } from "react";

export const dynamic = "force-dynamic";

import { useSearchParams } from "next/navigation";
import "react-phone-number-input/style.css";
import RestaurantBookInfoPage from "@/app/confirmation/components/RestaurantBookInfoPage";

function ConfirmationContent() {
    const params = useSearchParams();

    const restaurantName = params.get("restaurant_name");
    const eventType = params.get("eventType");
    const menuVariant = params.get("menu_variant");
    const people = params.get("people");
    const date = params.get("date");
    const location = params.get("location");
    const pricePerPerson = params.get("price_per_person");

    return (
        <RestaurantBookInfoPage
            date={date}
            restaurantName={restaurantName}
            menuVariant={menuVariant}
            people={people}
            location={location}
            eventType={eventType}
            pricePerPerson={pricePerPerson}
        />
    );
}

export default function ConfirmationPage() {
    return (
        <Suspense fallback={<div className="text-white p-8 text-center">Loading reservation details...</div>}>
            <ConfirmationContent />
        </Suspense>
    );
}

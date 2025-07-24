"use client";

import React, { use } from "react";
import { cakeProviders } from "@/constants/serviceProviders/cakeProviders";
import { decorationProviders } from "@/constants/serviceProviders/decorationProviders";
import { notFound } from "next/navigation";
import ProviderHeader from "./components/ProviderHeader";
import ProviderImageCard from "./components/ProviderCard";
import ProviderDetails from "@/app/services/[category]/[provider]/components/ProviderDetails";

export default function ServiceProviderPage({ params }) {
    const { category, provider } = use(params);

    const isCakeProviders = category === "cakes";

    const providerInfo = isCakeProviders ? cakeProviders.find(r => r.slug === provider) : decorationProviders.find(r => r.slug === provider);

    if (!providerInfo) return notFound();

    console.log("providerInfo", providerInfo);

    return (
        <main className="px-3 py-2 sm:py-4 md:py-4 bg-white text-black max-w-6xl mx-auto">
            <ProviderHeader {...providerInfo} />
            <ProviderDetails {...providerInfo} />
            <ProviderImageCard providerCakes={providerInfo.cakes} />
        </main>
    );
}
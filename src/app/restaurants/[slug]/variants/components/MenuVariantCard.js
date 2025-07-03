"use client";

import React from "react";
import { BiDish } from "react-icons/bi";
import { useTranslation } from "next-i18next";
import { oswald_splash } from "@/app/fonts";

export default function MenuVariantCard({ variant, onSelectVariant }) {
    const { t } = useTranslation();

    return (
        <div
            className="flex flex-col justify-between text-center rounded-xl p-6 border bg-white text-gray-800 border-gray-200 hover:shadow-lg">
            {/* Title */}
            <h3
                className={`text-xl text-custom-beige uppercase tracking-wide mb-4 ${oswald_splash.className}`}>
                {variant.title}
            </h3>

            {/* Price */}
            <div className="text-3xl font-bold mb-1">
                {variant.pricePerPerson?.toLocaleString("de-LU")} AMD
            </div>
            <div className={`text-xs mb-6 uppercase text-gray-500`}>
                {t("perPerson")}
            </div>

            <ul className={`text-sm space-y-2 mb-8 text-left text-gray-600`}>
                {!variant.features?.length && (
                    <>
                        <li className="flex gap-2 items-center ">
                            <span className="text-lg leading-none">•</span>
                            <span>{variant.description}</span>
                        </li>
                        {variant.fullDescription && (
                            <li className="flex gap-2 items-center">
                                <span className="text-lg leading-none">•</span>
                                <span>{variant.fullDescription}</span>
                            </li>
                        )}
                    </>
                )}
            </ul>

            <button
                type="button"
                onClick={() => onSelectVariant(variant.id)}
                className={`w-full flex justify-center items-center gap-2 rounded-full px-4 py-3 text-sm font-bold uppercase transition text-white bg-main hover:bg-custom-beige`}
            >
                <BiDish size={18} />
                {t("checkMenu")}
            </button>
        </div>
    );
}

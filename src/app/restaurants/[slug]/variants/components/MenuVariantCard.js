"use client";

import React from "react";
import Image from "next/image";
import { BiDish } from "react-icons/bi";
import "react-datepicker/dist/react-datepicker.css";
import { useTranslation } from "next-i18next";

export default function MenuVariantCard({ variant, onSelectVariant }) {
    const { t } = useTranslation();

    return (
        <div
            className="bg-white hover:bg-gray-100 grid sm:grid-cols-2 items-center [box-shadow:0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-2xl max-sm:max-w-sm rounded-lg overflow-hidden mx-auto border-2 border-black"
        >
            <div className="">
                <Image
                    width={250}
                    height={150}
                    sizes="100vw"
                    className="w-full h-full object-cover"
                    src={variant.image}
                    alt={variant.title}
                />
            </div>

            <div className="px-5 py-4 flex flex-col justify-between">
                <h3 className="text-xl font-semibold text-slate-900 mt-1">{variant.title}</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                    {variant.description}
                </p>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                    {variant.fullDescription}
                </p>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                    <span
                        className="relative inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-sm font-semibold text-amber-500 ring-1 ring-orange-300 ring-inset mr-1">
                        {variant.pricePerPerson} /amd {t("perPerson")}
                    </span>
                </p>

                <div
                    className="flex flex-wrap items-center text-center cursor-pointer border border-gray-300 rounded-lg w-full mt-2 p-1">
                    <button
                        type="button"
                        className="px-3 py-2.5 w-full flex items-center justify-center cursor-pointer text-white text-sm tracking-wider font-medium border-none rounded-md outline-none bg-red-600 hover:bg-red-700 active:bg-red-600"
                        onClick={() => onSelectVariant(variant.id)}
                    >
                        <BiDish size={22} />
                        <span className="px-2">
                        {t("checkMenu")}
                    </span>
                    </button>
                </div>
            </div>
        </div>
    );
}
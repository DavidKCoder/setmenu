"use client";

import Link from "next/link";
import Image from "next/image";
import { categories } from "@/constants/categories";
import { forum_splash, splash } from "@/app/fonts";
import { useTranslation } from "next-i18next";

export default function Categories() {
    const { t } = useTranslation();

    return (
        <section className="relative py-4 sm:py-10 md:py-12 px-6 bg-white text-black">
            <div className="flex items-center my-4">
                <div className="flex-grow border-t border-gray-300" />
                <h2 className={`mx-4 text-3xl text-gray-400 text-center font-semibold uppercase ${forum_splash.className}`}>
                    {t("choose your event category")}
                </h2>
                <div className="flex-grow border-t border-gray-300" />
            </div>
            <div
                className={`absolute whitespace-nowrap pt-5 -top-24 right-40 sm:right-96 md:right-96 lg:right-96 uppercase opacity-10 font-medium text-gray-400 tracking-wide ${forum_splash.className} z-0 pointer-events-none`}
                style={{ fontSize: 250 }}
            >
                CATEGORY
            </div>
            <div
                className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 sm sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
                {categories.map((category) => (
                    <Link href={`/categories/${category.slug}`} key={category.slug}>
                        <div
                            className="category-card flex flex-col group bg-white opacity-100 items-center justify-start p-6 border rounded-lg shadow-md hover:bg-teal-500 hover:text-white cursor-pointer transition text-center h-auto sm:h-52">
                            <Image
                                width={55}
                                height={25}
                                src={category.img}
                                alt="category img"
                                className="object-cover mb-2 sm:mb-4 transition-all duration-200"
                            />
                            <span
                                className="text-lg font-medium capitalize">{`${t(category.name.toLowerCase())}`}</span>
                            <p className="text-sm mt-2 line-clamp-2">{category.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
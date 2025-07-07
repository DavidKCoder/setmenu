"use client";

import { useState } from "react";
import { useTranslation } from "next-i18next";
import { forum_splash } from "@/app/fonts";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";

const QuestionIcon = (
    <svg className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20"
         xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
              clipRule="evenodd"></path>
    </svg>
);

export default function FAQ() {
    const { t } = useTranslation();
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = t("faqs", { returnObjects: true });

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="relative bg-white dark:bg-gray-900 z-10">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <h2
                    className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white underline decoration-orange-300"
                    style={{ textDecorationColor: "#E9C0A4FF", textUnderlineOffset: "4px", textDecorationThickness: 5 }}
                >
                    {t("faq_title")}
                </h2>
                <div
                    className={`absolute whitespace-nowrap uppercase opacity-10 font-medium text-gray-400 tracking-wide ${forum_splash.className} z-0 pointer-events-none`}
                    style={{ top: -60, left: -60, fontSize: 250 }}
                >
                    FAQ
                </div>
                <div className="grid gap-6 md:grid-cols-2 border-t pt-8 border-gray-200 dark:border-gray-700">
                    {Array.isArray(faqs) && faqs.map((item, index) => (
                        <div key={index} className="mb-4 px-4">
                            <button
                                onClick={() => toggle(index)}
                                className="flex justify-between items-center w-full text-left text-lg font-medium text-gray-900 dark:text-white focus:outline-none"
                            >
                                <span className="flex items-center">
                                    {QuestionIcon}
                                    {item.question}
                                </span>
                                <span>
                                    {openIndex === index ? <IoIosArrowDown /> : <IoIosArrowForward />}
                                </span>
                            </button>
                            {openIndex === index && (
                                <p className="mt-2 text-gray-500 dark:text-gray-400 px-6">{item.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
"use client";

import { useRef } from "react";
import html2pdf from "html2pdf.js";
import { notFound, useRouter } from "next/navigation";

export default function Menu({ restaurant, eventType, personCount, eventDate, selectedVariant, pdfUrl }) {
    const router = useRouter();
    const menuRef = useRef();

    const handleDownload = () => {
        if (!menuRef.current) return;

        const opt = {
            margin: 0.5,
            filename: `${restaurant.name}-${eventType}-menu.pdf`,
            image: { type: "jpeg", quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
        };

        html2pdf().set(opt).from(menuRef.current).save();
    };

    const handleConfirm = () => {
        const details = {
            restaurant: restaurant.name,
            date: eventDate,
            eventType: eventType,
            people: personCount,
            location: restaurant.location,
        };

        const queryString = encodeURIComponent(JSON.stringify(details));
        const queryVariantString = encodeURIComponent(JSON.stringify(selectedVariant));

        router.push(`/confirmation?data=${queryString}&variantData=${queryVariantString}`);
    };

    if (!selectedVariant.menu.length) return notFound();

    return (
        <main id="menu-content"
              className="relative px-6 py-8 bg-white text-black max-w-3xl mx-auto rounded-2xl border-2 border-black">
            <div className="flex justify-end mb-4">
                <button
                    onClick={handleDownload}
                    title="Download menu"
                    className="flex items-center gap-2 text-sm font-medium bg-red-200 text-white px-4 py-2 rounded cursor-pointer shadow hover:bg-red-600 transition"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
                    </svg>
                    Download PDF
                </button>
            </div>

            <div ref={menuRef}>
                <h1
                    className="text-3xl font-bold mb-10 text-center text-black capitalize underline"
                    style={{ textDecorationColor: "#E9C0A4", textUnderlineOffset: 4, textDecorationThickness: 3 }}
                >
                    {restaurant.name} {eventType} Menu for {personCount} Persons
                </h1>
                <div className="space-y-12">
                    {selectedVariant.menu.map((section, index) => (
                        <div
                            key={index}
                            className={`flex flex-col md:flex-row ${
                                index % 2 !== 0 ? "md:flex-row" : ""
                            } items-center gap-6`}
                        >
                            {/* Menu Items */}
                            <div className="w-full md:w-1/2">
                                <h2 className="text-2xl font-bold mb-px pb-2 text-black">{section.category}</h2>
                                <ul className="space-y-2">
                                    {section.items.map((item, i) => (
                                        <div key={i}>
                                            <div className="flex justify-between items-center">
                                                <span className="font-semibold text-black">{item.name}</span>
                                                <div
                                                    className="flex-grow border-b border-dotted border-gray-400 mx-2" />
                                                {/*<span className="text-gray-700 whitespace-nowrap">{item.price}</span>*/}
                                                {item.badge &&
                                                    <span
                                                        className="relative inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-amber-500 ring-1 ring-orange-300 ring-inset">
                                                        {item.badge}
                                                    </span>
                                                }
                                            </div>
                                            <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                                        </div>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-12">
                <button
                    className="w-full bg-main hover:bg-cyan-500 text-white italic py-2 text-xl font-semibold rounded-xl transition"
                    onClick={handleConfirm}
                >
                    Confirm Menu
                </button>
            </div>
        </main>
    );
}

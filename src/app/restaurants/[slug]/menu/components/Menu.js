"use client";

import { useRef, useState } from "react";
import { notFound } from "next/navigation";
import { oswald_splash } from "@/app/fonts";
import Modal from "./Modal";
import { GrDocumentDownload } from "react-icons/gr";
import html2pdf from "html2pdf.js";

export default function Menu({ restaurant, selectedVariant }) {
    const menuRef = useRef(null);

    const [showModal, setShowModal] = useState(false);

    const handleDownload = () => {
        if (!menuRef.current) return;

        const opt = {
            margin: 0.5,
            filename: `${restaurant.name}-${selectedVariant.title}-menu.pdf`,
            image: { type: "jpeg", quality: 0.98 },
            html2canvas: {
                scale: 2,
                useCORS: true,
                logging: true,
                allowTaint: false,
                scrollY: 0,
            },
            jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
        };

        html2pdf().set(opt).from(menuRef.current).save();
    };

    if (!selectedVariant.menu.length) return notFound();

    return (
        <>
            <main id="menu-content"
                  className="relative px-6 py-8 bg-white text-black max-w-3xl mx-auto rounded-2xl border-2 border-black">
                <div className="absolute right-5 flex justify-end mb-4">
                    <button
                        onClick={handleDownload}
                        title="Download menu"
                        className="flex items-center gap-2 text-sm font-medium bg-red-200 text-white px-2 py-2 sm:px-4 sm:py-2 rounded cursor-pointer shadow hover:bg-red-600 transition"
                    >
                        <GrDocumentDownload size={18} />
                        <span className="hidden sm:block">Download PDF</span>
                    </button>
                </div>

                <div ref={menuRef}>
                    <h1
                        className={`text-2xl md:text-3xl font-bold mb-10 text-center text-black capitalize underline ${oswald_splash.className}`}
                        style={{ textDecorationColor: "#E9C0A4", textUnderlineOffset: 4, textDecorationThickness: 3 }}
                    >
                        {restaurant.name}
                        <p>{selectedVariant.title} Menu</p>
                    </h1>
                    <div className="space-y-5">
                        {selectedVariant.menu.map((section, index) => (
                            <div
                                key={index}
                                className={`flex flex-col md:flex-row ${
                                    index % 2 !== 0 ? "md:flex-row" : ""
                                } items-center gap-6`}
                            >
                                {/* Menu Items */}
                                <div className="w-full md:w-1/2">
                                    <h2 className={`text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl font-bold mb-px pb-2 text-black ${oswald_splash.className}`}>
                                        {section.category}
                                    </h2>
                                    <ul className="space-y-1">
                                        {section.items.map((item, i) => (
                                            <div key={i}>
                                                <div className="flex justify-between items-center">
                                                    <span
                                                        className={`font-normal text-black ${oswald_splash.className}`}>{item.name}</span>
                                                    <div
                                                        className="flex-grow border-b border-dotted border-gray-400 mx-2" />
                                                    {item.badge &&
                                                        <span
                                                            className="rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-amber-500 ring-1 ring-orange-300 ring-inset">
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
                        className="w-full bg-main hover:bg-cyan-500 text-white py-2 text-lg font-semibold rounded-xl transition capitalize"
                        onClick={() => setShowModal(!showModal)}
                    >
                        continue
                    </button>
                </div>
            </main>
            {showModal &&
                <Modal
                    name={restaurant.name}
                    price={selectedVariant.pricePerPerson}
                    showModal={showModal}
                    setShowModal={setShowModal}
                    location={restaurant.location}
                    categories={restaurant.categories}
                    selectedVariant={selectedVariant}
                />}
        </>
    );
}

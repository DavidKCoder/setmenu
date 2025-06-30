"use client";

import Image from "next/image";
import { BiDish } from "react-icons/bi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays } from "date-fns";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslation } from "next-i18next";
import { forum_splash } from "@/app/fonts";

export default function MenuVariantCard({ slug, variant, categories, onSelectVariant }) {
    const router = useRouter();
    const { t } = useTranslation();

    const [showModal, setShowModal] = useState(false);
    const [eventType, setEventType] = useState("");
    const [peopleCount, setPeopleCount] = useState("2");
    const [eventDate, setEventDate] = useState(null);
    const [errors, setErrors] = useState({});

    const handleSubmit = () => {
        const newErrors = {};
        if (!eventType) newErrors.eventType = "Please select an event type.";
        if (!peopleCount || Number(peopleCount) < 1) newErrors.peopleCount = "Enter a valid number of people.";
        if (!eventDate) newErrors.eventDate = "Please choose a date.";

        setErrors(newErrors);
        if (Object.keys(newErrors).length > 0) return;

        const formattedDate = eventDate.toISOString().split("T")[0];
        const nextUrl = `/restaurants/${slug}/variants?event=${eventType}&people=${peopleCount}&date=${formattedDate}`;

        router.push(nextUrl);
    };

    return (
        <div
            className="bg-white hover:bg-gray-100 grid sm:grid-cols-2 items-center [box-shadow:0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-2xl max-sm:max-w-sm rounded-lg overflow-hidden mx-auto border-2 border-black"
        >
            <div className="h-80">
                <Image
                    width={250}
                    height={150}
                    sizes="100vw"
                    className="w-full h-full object-cover"
                    src={variant.image}
                    alt={variant.title}
                />
            </div>

            <div className="h-72 px-5 overflow-clip inline-grid">
                <h3 className="text-xl font-semibold text-slate-900 mt-1">{variant.title}</h3>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                    {variant.description}
                </p>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                    {variant.fullDescription}
                </p>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                    <span
                        className="relative inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-semibold text-amber-500 ring-1 ring-orange-300 ring-inset mr-1">
                        {variant.pricePerPerson} /amd {t("perPerson")}
                    </span>
                </p>

                <div
                    className="flex flex-wrap items-center text-center cursor-pointer border border-gray-300 rounded-lg w-full mt-2 p-1">
                    <button
                        type="button"
                        className="px-3 py-2.5 w-full flex items-center cursor-pointer text-white text-sm tracking-wider font-medium border-none rounded-md outline-none bg-red-600 hover:bg-red-700 active:bg-red-600"
                        onClick={() => onSelectVariant(variant.id)}
                        // onClick={() => setShowModal(true)}
                    >
                        <BiDish size={22} />
                        <span className="px-2">
                            {t("checkMenu")}
                        </span>
                    </button>
                </div>
            </div>

            {showModal && (
                <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center">
                    <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md relative">
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-2 right-4 text-gray-400 text-2xl">
                            &times;
                        </button>

                        <h2 className={`text-2xl font-bold mb-4 text-center underline ${forum_splash.className}`}
                            style={{
                                textDecorationColor: "#E9C0A4",
                                textDecorationThickness: 1,
                                textUnderlineOffset: 4,
                            }}>
                            {t("checkYourMenu")}
                        </h2>

                        <div className="mb-4">
                            <label className={`block mb-2 font-medium ${forum_splash.className}`}>Select Event
                                Type:</label>
                            <select
                                className="w-full border border-gray-300 p-2 rounded bg-white"
                                value={eventType}
                                onChange={e => setEventType(e.target.value)}
                            >
                                <option value="">-- Choose --</option>
                                {categories.map((option, index) => (
                                    <option key={index} value={option}>{option}</option>
                                ))}
                            </select>
                            {errors.eventType && <p className="text-red-500 text-sm mt-1">{errors.eventType}</p>}
                        </div>

                        <div className="mb-6">
                            <label className={`block mb-2 font-medium ${forum_splash.className}`}>Select person:</label>
                            <input
                                type="number"
                                min="2"
                                max="400"
                                className="w-full border border-gray-300 p-2 rounded bg-white"
                                value={peopleCount}
                                onChange={e => setPeopleCount(e.target.value)}
                            />
                            {errors.peopleCount && <p className="text-red-500 text-sm mt-1">{errors.peopleCount}</p>}
                        </div>

                        {/* Date Picker */}
                        <div className="mb-6">
                            <label className={`block mb-2 font-medium ${forum_splash.className}`}>Select Date:</label>
                            <DatePicker
                                selected={eventDate}
                                onChange={date => setEventDate(date)}
                                minDate={new Date()}
                                placeholderText="Choose a date"
                                className="w-full border border-gray-300 p-2 rounded"
                                dateFormat="yyyy-MM-dd"
                                excludeDates={[addDays(new Date(), 0)]}
                                withPortal
                            />
                            {errors.eventDate && <p className="text-red-500 text-sm mt-1">{errors.eventDate}</p>}
                        </div>

                        <button
                            onClick={handleSubmit}
                            className="w-full items-center bg-main hover:bg-cyan-600 text-white italic gap-2 px-6 py-3 rounded-xl text-lg shadow"
                        >
                            Continue
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
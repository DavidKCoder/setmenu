import { forum_splash } from "@/app/fonts";
import DatePicker from "react-datepicker";
import { addDays, format } from "date-fns";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslation } from "next-i18next";
import "react-datepicker/dist/react-datepicker.css";
import { MdArrowDropDown } from "react-icons/md";
import { PiCalendarDots } from "react-icons/pi";
import { FaUsers } from "react-icons/fa";

export default function Modal({ name, showModal, setShowModal, categories, location, price }) {
    const { t } = useTranslation();
    const router = useRouter();

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

        console.log("slug", name, eventType, peopleCount, formattedDate);

        const confirmationUrl = `/confirmation/?restaurant_name=${name}&eventType=${eventType}&people=${peopleCount}&date=${formattedDate}&location=${location}&price_per_person=${price}`;

        router.push(confirmationUrl);
    };


    return (
        showModal && (
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
                        {t("SetYourMenuDetails")}
                    </h2>

                    <div className="mb-4 w-full">
                        <label className={`block mb-2 font-medium ${forum_splash.className}`}>
                            Set Event Type:
                        </label>
                        <div className="relative w-full">
                            <select
                                className={`border rounded bg-white px-2 py-2 w-full truncate appearance-none capitalize ${eventType ? "text-gray-800" : "text-gray-300"}`}
                                value={eventType}
                                onChange={e => setEventType(e.target.value)}
                            >
                                <option value="" className="text-gray-400 italic" disabled>
                                    {t("eventType")}...
                                </option>
                                {categories.map((option, index) => (
                                    <option key={index} value={option} className="text-gray-800">{option}</option>
                                ))}
                            </select>
                            <div
                                className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-gray-400">
                                <MdArrowDropDown />
                            </div>
                        </div>
                        {errors.eventType && (
                            <p className="text-red-500 text-sm mt-1">{errors.eventType}</p>
                        )}
                    </div>


                    <div className="mb-6">
                        <label className={`block mb-2 font-medium ${forum_splash.className}`}>
                            Set person:
                        </label>

                        <div className="relative">
                            <FaUsers className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />

                            <input
                                type="number"
                                min="2"
                                max="400"
                                className="w-full pl-9 border border-gray-300 p-2 rounded bg-white"
                                value={peopleCount}
                                onChange={e => setPeopleCount(e.target.value)}
                            />
                        </div>

                        {errors.peopleCount && (
                            <p className="text-red-500 text-sm mt-1">{errors.peopleCount}</p>
                        )}
                    </div>


                    {/* Date Picker */}
                    <div className="mb-6">
                        <label className={`block mb-2 font-medium ${forum_splash.className}`}>
                            Set Date:
                        </label>
                        <DatePicker
                            selected={eventDate}
                            onChange={date => setEventDate(date)}
                            minDate={new Date()}
                            placeholderText="Choose a date"
                            className="w-full border border-gray-300 p-2 rounded"
                            dateFormat="yyyy-MM-dd"
                            disabledKeyboardNavigation
                            excludeDates={[addDays(new Date(), 0)]}
                            customInput={
                                <button
                                    className="w-full text-gray-400 bg-white text-left border border-gray-300 p-2 rounded">
                                    {eventDate
                                        ? <span className="text-gray-700">{format(eventDate, "yyyy-MM-dd")} </span>
                                        :
                                        <span className="flex items-center gap-2"><PiCalendarDots size={20} /> Choose a date</span>}
                                </button>
                            }
                        />
                        {errors.eventDate && <p className="text-red-500 text-sm mt-1">{errors.eventDate}</p>}
                    </div>

                    <button
                        onClick={handleSubmit}
                        className="w-full items-center bg-main hover:bg-cyan-600 text-white gap-2 px-4 py-2 rounded-xl text-lg shadow">
                        Continue
                    </button>
                </div>
            </div>
        )
    );
}
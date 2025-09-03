"use client";

import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { addDays, format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import { usePathname } from "next/dist/client/components/navigation";
import { useRouter, useSearchParams } from "next/navigation";
import { useTranslation } from "next-i18next";
import { FiSearch } from "react-icons/fi";
import { FaCalendarAlt } from "react-icons/fa";

export default function RestaurantSearchBar({ restaurants, onResults }) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { t } = useTranslation();

    const name = searchParams.get("name");
    const eventDate = searchParams.get("eventDate");
    const eventType = searchParams.get("event");
    const location = searchParams.get("locationFilter");

    const [restaurantName, setRestaurantName] = useState(name || "");
    const [eventFilter, setEventFilter] = useState(eventType || "");
    const [locationFilter, setLocationFilter] = useState(location || "");
    const [selectedDate, setSelectedDate] = useState(eventDate ? new Date(eventDate) : null);

    const eventTypes = [...new Set(restaurants.flatMap(r => r.categories || []))];
    const locations = [...new Set(restaurants.map(r => r.location).filter(Boolean))];

    useEffect(() => {
        if (name || eventDate || eventType || location) handleSearch();
    }, [pathname]);

    const toLocalIsoDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    };

    const handleSearch = () => {
        const filtered = restaurants.filter((restaurant) => {
            const matchesName = restaurant.name.toLowerCase().includes(restaurantName.toLowerCase());
            const matchesEvent = eventFilter ? restaurant.categories?.includes(eventFilter) : true;
            const matchesLocation = locationFilter ? restaurant.location === locationFilter : true;

            const formatted = selectedDate ? toLocalIsoDate(selectedDate) : null;
            const matchesDate = formatted
                ? !restaurant.bookedDates?.includes(formatted)
                : true;

            const params = new URLSearchParams();

            if (restaurantName) params.append("name", restaurantName);
            if (formatted) params.append("eventDate", formatted);
            if (eventFilter) params.append("event", eventFilter);
            if (locationFilter) params.append("locationFilter", locationFilter);

            const basePath = pathname === "/" ? "/restaurants" : pathname;
            const generateUrl = `${basePath}?${params.toString()}`;

            router.push(generateUrl);

            return matchesName && matchesEvent && matchesLocation && matchesDate;
        });

        onResults(filtered);
    };

    const ClearButton = ({ clearInput }) => {
        return (
            <button
                onClick={clearInput}
                type="button"
                className="absolute text-3xl right-2 top-0 font-light text-gray-300 hover:text-gray-600 bg-transparent"
                aria-label="Clear filter"
            >
                &times;
            </button>
        );
    };

    return (
        <div className="space-y-2 px-5 sm:px-6 md:px-10 pb-10 w-screen sm:w-auto">
            <div className="bg-orange-300 rounded-md p-2">
                <div className="grid grid-cols-4 sm:grid-cols-6 gap-x-4 gap-y-3">

                    {/* Name input */}
                    <div className="col-span-4 sm:col-span-3 sm:col-start-1">
                        <div className="relative">
                            <input
                                type="text"
                                value={restaurantName}
                                placeholder={t("searchByName")}
                                onChange={(e) => setRestaurantName(e.target.value)}
                                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-gray-700 outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6 truncate appearance-none"
                            />
                            {restaurantName && (
                                <ClearButton clearInput={() => setRestaurantName("")} />
                            )}
                        </div>
                    </div>

                    {/* Date */}
                    <div className="col-span-2 sm:col-span-2">
                        <DatePicker
                            popperPlacement="bottom-end"
                            selected={selectedDate}
                            onChange={setSelectedDate}
                            minDate={new Date()}
                            className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6 border border-gray-300 p-2"
                            dateFormat="yyyy-MM-dd"
                            excludeDates={[addDays(new Date(), 0)]}
                            highlightDates={[addDays(new Date(), 0)]}
                            disabledKeyboardNavigation
                            customInput={
                                <button
                                    className="text-gray-400 bg-white text-left border border-gray-300 p-2 rounded capitalize w-full">
                                    {selectedDate ? (
                                        <div className="flex items-center text-gray-700">
                                            <FaCalendarAlt className="text-main mr-1" />
                                            {format(selectedDate, "MMMM d")}
                                        </div>
                                    ) : (
                                        <span className="flex items-center">
                                            <FaCalendarAlt className="text-main mr-1" />
                                            {t("filterDate")}
                                        </span>
                                    )}
                                </button>
                            }
                        />
                    </div>

                    {/* Search button */}
                    <div className="col-span-2 sm:col-span-1">
                        <button
                            className="w-full py-1.5 sm:px-3 bg-white rounded hover:bg-gray-200 flex justify-center items-center gap-2 capitalize"
                            onClick={handleSearch}
                        >
                            <span className="text-lg text-amber-500">
                             <FiSearch />
                            </span>
                            {t("search")}
                        </button>
                    </div>

                    {/* Event Type */}
                    {/*<div className="col-span-1 sm:col-span-2">*/}
                    {/*    <div className="relative">*/}
                    {/*        <select*/}
                    {/*            className={`block w-full rounded-md bg-white/5 px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-white/10 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6 border bg-white truncate appearance-none capitalize ${eventFilter ? "text-gray-800" : "text-gray-300"}`}*/}
                    {/*            value={eventFilter}*/}
                    {/*            onChange={(e) => setEventFilter(e.target.value)}*/}
                    {/*        >*/}
                    {/*            <option value="" className="text-gray-400 italic" disabled>*/}
                    {/*                {t("eventType")}...*/}
                    {/*            </option>*/}
                    {/*            {eventTypes.map((type) => (*/}
                    {/*                <option key={type} value={type} className="text-gray-700">*/}
                    {/*                    {t(type)}*/}
                    {/*                </option>*/}
                    {/*            ))}*/}
                    {/*        </select>*/}
                    {/*        {eventFilter && <ClearButton clearInput={() => setEventFilter("")} />}*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>

    );
}

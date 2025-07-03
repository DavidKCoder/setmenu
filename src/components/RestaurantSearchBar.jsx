"use client";

import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { addDays, format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import { usePathname } from "next/dist/client/components/navigation";
import { useRouter, useSearchParams } from "next/navigation";
import { useTranslation } from "next-i18next";
import { FiSearch } from "react-icons/fi";

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

    return (
        <div
            className="w-11/12 md:w-auto grid grid-cols-6 sm:grid-cols-1 sm:grid-rows-3 md:flex gap-2 sm:gap-4 p-4 rounded-md items-center justify-between mb-8 bg-orange-300">

            <div className="w-full col-span-4 sm:col-auto">
                <input
                    type="text"
                    value={restaurantName}
                    placeholder={t("searchByName")}
                    onChange={(e) => setRestaurantName(e.target.value)}
                    className="border rounded px-4 py-2 w-full sm:col-span-2"
                />
            </div>


            <div className="relative w-full col-span-2 col-start-5 sm:col-auto">
                <DatePicker
                    popperPlacement="left"
                    selected={selectedDate}
                    onChange={setSelectedDate}
                    minDate={new Date()}
                    // placeholderText={`📅 ${t("filterDate")}`}
                    className="w-full border border-gray-300 p-2 rounded text-gray-400"
                    dateFormat="yyyy-MM-dd"
                    excludeDates={[addDays(new Date(), 0)]}
                    highlightDates={[addDays(new Date(), 0)]}
                    disabledKeyboardNavigation
                    customInput={
                        <button className="w-full text-gray-400 bg-white text-left border border-gray-300 p-2 rounded capitalize">
                            {selectedDate
                                ? <span className="text-gray-700">{format(selectedDate, "yyyy-MM-dd")} </span>
                                : `${t("filterDate")}`}
                        </button>
                    }
                />
            </div>

            <div className="relative w-full col-span-3 sm:col-auto">
                <select
                    className={`border rounded bg-white px-2 py-2 w-full truncate appearance-none capitalize ${eventFilter ? "text-gray-800" : "text-gray-300"}`}
                    value={eventFilter}
                    onChange={(e) => setEventFilter(e.target.value)}
                >
                    <option value="" className="text-gray-400 italic" disabled>
                        {t("eventType")}...
                    </option>
                    {eventTypes.map((type) => (
                        <option key={type} value={type} className="text-gray-700">
                            {t(type)}
                        </option>
                    ))}
                </select>

                {eventFilter && (
                    <button
                        onClick={() => setEventFilter("")}
                        type="button"
                        className="absolute text-3xl right-2 top-1 -translate-y-1/2 font-light text-gray-300 hover:text-gray-600"
                        aria-label="Clear filter"
                    >
                        &times;
                    </button>
                )}
            </div>

            <div className="relative w-full col-span-3 sm:col-auto">
                <select
                    className={`border rounded bg-white px-2 py-2 w-full truncate appearance-none capitalize ${locationFilter ? "text-gray-800" : "text-gray-300"}`}
                    value={locationFilter}
                    onChange={(e) => setLocationFilter(e.target.value)}
                >
                    <option value="" className="text-gray-400 italic" disabled>{t("location")}...</option>
                    {locations.map((location) => (
                        <option key={location} value={location} className="text-gray-700">{location}</option>
                    ))}
                </select>

                {locationFilter && (
                    <button
                        onClick={() => setLocationFilter("")}
                        type="button"
                        className="absolute text-3xl right-2 top-1 -translate-y-1/2 font-light text-gray-300 hover:text-gray-600"
                        aria-label="Clear filter"
                    >
                        &times;
                    </button>
                )}
            </div>

            <div className="col-span-2 col-start-3 row-start-3 flex justify-center sm:col-auto">
                <button
                    className="px-8 py-2 bg-white rounded hover:bg-gray-200 flex justify-center items-center gap-2 capitalize"
                    onClick={handleSearch}
                >
                    <span className="text-lg text-amber-500">
                      <FiSearch />
                    </span>
                    {t("search")}
                </button>
            </div>
        </div>
    );
}

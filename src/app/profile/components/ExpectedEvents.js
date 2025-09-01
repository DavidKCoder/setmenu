"use client";

import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { GoDotFill } from "react-icons/go";
import MyDatePicker from "@/app/profile/components/MyDatePicker";
import EventDetails from "@/app/profile/components/EventDetails";
import { useTranslation } from "next-i18next";

const enumStatus = {
    1: "pending",
    2: "confirmed",
    3: "finished",
};

const statusStyles = {
    1: "text-amber-500 ring-yellow-600",
    2: "text-green-500 ring-green-500",
    3: "text-gray-400 ring-gray-400",
};

const borderColor = {
    1: "border-amber-500",
    2: "border-green-500",
    3: "border-gray-500",
};

export default function ExpectedEvents() {
    const { t } = useTranslation();
    const weekDay = new Date().setDate(new Date().getDate() - 14);
    const acceptedDate = format(weekDay, "yyyy-MM-dd");

    const inAnticipation = new Date().setDate(new Date().getDate() + 2);
    const pendingDate = format(inAnticipation, "yyyy-MM-dd");

    const [selectedEvent, setSelectedEvent] = useState(null);

    const upcomingEvents = [
        {
            id: 3,
            name: "Wedding",
            date: acceptedDate,
            venue: "Gyumri Prime Hall",
            location: "Gyumri",
            phone: "+374 987 654 321",
            guests: 250,
            eventType: "Wedding",
            menu: "Standard",
            status: 3,
            totalAmount: 2500000,
        },
        {
            id: 1,
            name: "Birthday",
            date: pendingDate,
            venue: "Ocean View VIP Restaurant",
            location: "123 Seaside Blvd, LA",
            phone: "+1 234 567 890",
            guests: 12,
            eventType: "Birthday Party",
            menu: "VIP Choice",
            status: 1,
            totalAmount: 1200000,
        },
        {
            id: 2,
            name: "Corporate Lunch",
            date: "2025-12-25",
            venue: "Skyline Dine",
            location: "456 Sky Ave, NY",
            phone: "+1 987 654 321",
            guests: 25,
            eventType: "Corporate Event",
            menu: "Classic",
            status: 2,
            totalAmount: 450000,
        },
    ];

    const excludedDates = upcomingEvents.map(event => ({
        date: new Date(event.date),
        message: `${event.name} at ${event.venue}`,
    }));

    const highlightDates = excludedDates.map(item => item.date);

    useEffect(() => {
        const reservationData = localStorage.getItem("reservationData");
        console.log("reservationData", JSON.parse(reservationData));
    }, []);

    return (
        <>
            <div className="bg-white rounded-xl p-4 mb-8 shadow">
                <MyDatePicker excludedDates={excludedDates} highlightDates={highlightDates} />
                {upcomingEvents.length > 0 ? (
                    <ul className="space-y-3">
                        {upcomingEvents.map((event) => (
                            <li
                                key={event.id}
                                className="flex justify-between items-center border-b pb-2 last:border-b-0"
                            >
                                <div className={`border-l-4 pl-2 ${borderColor[event.status]}`}>
                                    <p className="text-gray-800 font-medium">
                                        {event.name}
                                        <span
                                            className={`inline-flex bg-gray-50 items-center rounded-md px-2 py-0.5 ml-2 text-xs font-medium text-amber-500 ring-1 ring-inset ${statusStyles[event.status]}`}>
                                            <span className="relative flex items-center h-2.5 w-2.5 mr-1">
                                              <span
                                                  className={`${event.status !== 3 ? "animate-ping bg-gray-300" : ""} absolute inline-flex h-full w-full rounded-full opacity-75 ${statusStyles[event.status]}`}></span>
                                                <GoDotFill className={`relative ${statusStyles[event.status]}`} />
                                              </span>
                                            <span
                                                className={`${statusStyles[event.status]}`}>{enumStatus[event.status]}</span>
                                        </span>
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        {event.date} — {event.venue}
                                    </p>
                                </div>
                                <button
                                    onClick={() => setSelectedEvent(event)}
                                    className="text-amber-500 hover:underline text-sm"
                                >
                                    {t("view")}
                                </button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-gray-500 text-sm">No upcoming events planned.</p>
                )}
            </div>

            {/* Modal */}
            <EventDetails
                selectedEvent={selectedEvent}
                setSelectedEvent={setSelectedEvent}
            />
        </>
    );
}

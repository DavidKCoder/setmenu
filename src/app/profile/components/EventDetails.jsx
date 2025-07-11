import React from "react";
import { Dialog } from "@headlessui/react";
import { forum_splash } from "@/app/fonts";

export default function EventDetails({ selectedEvent, setSelectedEvent }) {
    return (
        <Dialog
            open={!!selectedEvent}
            onClose={() => setSelectedEvent(null)}
            className="relative z-50"
        >
            <div className="fixed inset-0 bg-black/50" aria-hidden="true" />

            <div className="fixed inset-0 flex items-center justify-center">
                <Dialog.Panel
                    className="w-11/12 sm:w-full max-w-md rounded-lg bg-white px-4 py-4 shadow-lg space-y-1.5">
                    <Dialog.Title className="text-lg font-bold text-gray-800">
                        Event Details
                    </Dialog.Title>

                    {selectedEvent && (
                        <>
                            <div className="w-full h-48 relative rounded border-2 overflow-hidden mb-4">
                                <div
                                    className="ova-section relative h-56 text-center flex flex-col items-center justify-center">
                                    <div className={`text-3xl text-secondary uppercase ${forum_splash.className}`}>
                                        {selectedEvent.venue}
                                    </div>

                                    <div
                                        className={`absolute whitespace-nowrap uppercase opacity-10 font-medium text-gray-400 tracking-wide ${forum_splash.className} z-0 pointer-events-none animate-fadeIn`}
                                        style={{ fontSize: 120 }}
                                    >
                                        {selectedEvent.venue}
                                    </div>
                                </div>
                            </div>
                            <div className="rounded border-2 p-3 space-y-1">
                                <p>
                                    <span className="font-semibold text-gray-700">Event Type:</span>{" "}
                                    {selectedEvent.name}
                                </p>
                                <p>
                                    <span className="font-semibold text-gray-700">Date:</span>{" "}
                                    {selectedEvent.date}
                                </p>
                                <p>
                                  <span className="font-semibold text-gray-700">
                                    Restaurant:
                                  </span>{" "}
                                    {selectedEvent.venue}
                                </p>
                                <p>
                                  <span className="font-semibold text-gray-700">
                                    Location:
                                  </span>{" "}
                                    {selectedEvent.location}
                                </p>
                                <p>
                                  <span className="font-semibold text-gray-700">
                                    Phone:
                                  </span>{" "}
                                    {selectedEvent.phone}
                                </p>
                                <p>
                                  <span className="font-semibold text-gray-700">
                                    Guests:
                                  </span>{" "}
                                    {selectedEvent.guests}
                                </p>
                                <p>
                                  <span className="font-semibold text-gray-700">
                                    Menu:
                                  </span>{" "}
                                    {selectedEvent.menu}
                                </p>
                                <p>
                                  <span className="font-semibold text-gray-700">
                                    Total Amount:
                                  </span>{" "}
                                    {selectedEvent.totalAmount} amd
                                </p>
                            </div>

                            <div className="flex justify-end mt-4">
                                <button
                                    onClick={() => setSelectedEvent(null)}
                                    className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
                                >
                                    Close
                                </button>
                            </div>
                        </>
                    )}
                </Dialog.Panel>
            </div>
        </Dialog>
    );
}
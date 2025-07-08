"use client";

import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import FeedbackModal from "@/components/FeedbackModal";

export default function ReservationSuccessPage() {
    const [showSuccess, setShowSuccess] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSuccess(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {showSuccess ? (
                <div
                    className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100 p-6">
                    <div className="bg-white shadow-xl rounded-xl p-10 text-center max-w-md w-full">
                        <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
                        <h1 className="text-3xl font-bold text-gray-800 mb-2">
                            Reservation Submitted!
                        </h1>
                        <p className="text-gray-600 mb-4">
                            Thank you! Your reservation has been successfully submitted. We'll contact you soon.
                        </p>
                        <p className="text-gray-500 text-sm">
                            We have also sent a confirmation email with your reservation details and chosen menu.
                        </p>
                    </div>
                </div>
            ) : (
                <div className="flex justify-center items-center min-h-screen bg-gray-50">
                    <FeedbackModal />
                </div>
            )}
        </>
    );
}

import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

export default function ReservationSuccessPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100 p-6">
            <div className="bg-white shadow-xl rounded-xl p-10 text-center max-w-md w-full">
                <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
                <h1 className="text-3xl font-bold text-gray-800 mb-2">Reservation Submitted!</h1>
                <p className="text-gray-600 mb-4">
                    Thank you! Your reservation has been successfully submitted. We'll contact you soon.
                </p>
                <p className="text-gray-500 text-sm">
                    We have also sent a confirmation email with your reservation details and chosen menu.
                </p>
                <Link
                    href="/"
                    className="inline-block mt-6 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
}

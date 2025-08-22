"use client";

export default function BetaNoticeModal({ onClose }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
            <div className="bg-white rounded-lg p-6 py-8 shadow-xl relative">
                <button
                    onClick={onClose}
                    className="absolute top-1 right-3 text-gray-500 hover:text-gray-800 text-2xl font-bold"
                >
                    &times;
                </button>

                <div className="flex flex-col items-center">
                    <span
                        className="px-4 py-2 text-base sm:text-xl font-semibold uppercase tracking-wider bg-red-500 text-white rounded-xl">
                        Welcome to our Beta Version!
                    </span>
                </div>
            </div>
        </div>
    );
}

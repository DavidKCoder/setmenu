"use client";

import React from "react";

export default function PrivacyPage() {
    return (
        <div className="max-w-3xl mx-auto px-4 py-10 text-gray-800">
            <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

            <p className="mb-4">
                We are committed to protecting your personal information and your right
                to privacy. This Privacy Policy explains how we collect, use, and
                safeguard your information when you use our application.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-2">1. Information We Collect</h2>
            <p className="mb-4">
                We collect personal information you provide directly to us, such as your name,
                email address, and event details. We also collect limited data automatically like browser type, device,
                and usage information.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-2">2. How We Use Your Information</h2>
            <div className="mb-4">
                We use your information to:
                <ul className="list-disc ml-6 mt-2">
                    <li>Provide and manage your bookings</li>
                    <li>Improve user experience and our services</li>
                    <li>Send important updates or offers</li>
                </ul>
            </div>

            <h2 className="text-xl font-semibold mt-8 mb-2">3. Sharing Your Data</h2>
            <p className="mb-4">
                We do not sell or rent your personal data. We may share it with trusted third parties
                only to provide core functionality, like payment processing or hosting.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-2">4. Data Security</h2>
            <p className="mb-4">
                We implement industry-standard security measures to protect your information.
                However, no system is 100% secure, so we cannot guarantee absolute security.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-2">5. Your Rights</h2>
            <p className="mb-4">
                You have the right to access, update, or delete your personal data at any time.
                Please contact us if you wish to exercise any of these rights.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-2">6. Changes to This Policy</h2>
            <p className="mb-4">
                We may update this Privacy Policy periodically. We encourage you to review it
                regularly to stay informed about how we are protecting your data.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-2">7. Contact Us</h2>
            <p>
                If you have any questions about this Privacy Policy, please contact us at:{" "}
                <a href="mailto:support@setmenu.com" className="text-blue-600 underline">
                    support@setmenu.com
                </a>
            </p>
        </div>
    );
}

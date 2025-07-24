"use client";

import { FaFacebookF, FaInstagram, FaPhone, FaTwitter } from "react-icons/fa";
import React from "react";

export default function ProviderDetails({ phone, workingHours }) {
    return (
        <div className="flex justify-between align-items-center h-20">
            <div className="flex items-center gap-1 text-gray-800">
                <div>Contact:</div>
                <FaPhone className="text-cyan-600" />
                <a href={`tel:${phone}`} className="hover:underline">
                    {phone}
                </a>
            </div>
            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-2 text-cyan-600">
                <a href="#" aria-label="Facebook" target="_blank" rel="noopener noreferrer"
                   className="rounded-full bg-orange-50 p-2 hover:bg-orange-100">
                    <FaFacebookF className="hover:text-cyan-800 transition" size={20} />
                </a>
                <a href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer"
                   className="rounded-full bg-orange-50 p-2 hover:bg-orange-100">
                    <FaInstagram className="hover:text-cyan-800 transition" size={20} />
                </a>
                <a href="#" aria-label="Twitter" target="_blank" rel="noopener noreferrer"
                   className="rounded-full bg-orange-50 p-2 hover:bg-orange-100">
                    <FaTwitter className="hover:text-cyan-800 transition" size={20} />
                </a>
            </div>
        </div>
    );
}
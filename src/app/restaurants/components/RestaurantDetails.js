import { FaClock, FaMapMarkerAlt, FaPhone, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { LuCircleCheckBig } from "react-icons/lu";
import WorkingHoursSection from "@/app/restaurants/components/WorkingHoursSection";
import React from "react";

export default function RestaurantDetails({ about, features, workingHours, location, phone }) {
    return (
        <div className="grid md:grid-cols-2 gap-8 mb-6 sm:mb-12">
            <div>
                <h2 className="text-2xl font-semibold mb-4">About</h2>
                <p className="text-gray-700 leading-relaxed">{about}</p>

                <h2 className="text-2xl font-semibold mt-8 mb-4">Features</h2>
                <ul className="list-inside text-gray-700 space-y-1 max-w-md dark:text-gray-400">
                    {features.map((feature, i) => (
                        <li className="flex items-center gap-2" key={i}>
                            <LuCircleCheckBig />
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="relative space-y-4">
                <WorkingHoursSection workingHours={workingHours} />
                <div className="flex items-center gap-3 text-gray-800">
                    <FaMapMarkerAlt className="text-cyan-600" />
                    <span>{location}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-800">
                    <FaPhone className="text-cyan-600" />
                    <span>{phone}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-800">
                    <MdEmail className="text-cyan-600" />
                    <span>restaurant.email@email.com</span>
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
        </div>
    );
}

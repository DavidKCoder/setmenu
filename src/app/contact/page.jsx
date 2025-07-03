"use client";

import Image from "next/image";

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row max-w-5xl w-full">

                {/* Left Side Image */}
                <div className="relative w-full md:w-1/2 h-72 md:h-auto">
                    <Image
                        src="https://images.pexels.com/photos/18399568/pexels-photo-18399568.jpeg"
                        alt="Office Desk"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Right Side Content */}
                <div className="w-full md:w-1/2 p-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Contact us</h1>
                    <p className="text-gray-600 text-sm mb-6">
                        Contact us for a quote, help or to join the team.
                    </p>

                    {/* Contact Info */}
                    <div className="mb-8 space-y-1 text-sm text-gray-700">
                        <p>
                            <span className="font-semibold">Address</span><br />
                            Armenia / Yerevan
                        </p>
                        <p>
                            <span className="font-semibold">Email</span><br />
                            setmenu@gmail.com
                        </p>
                        <p>
                            <span className="font-semibold">Phone</span><br />
                            +374 55 753272
                        </p>
                    </div>

                    {/* Form */}
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">Get a quote</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-xs font-semibold text-gray-500">Name</label>
                            <input
                                type="text"
                                defaultValue="Owen Goodwin"
                                className="w-full border-b border-gray-300 focus:outline-none focus:border-gray-700 text-gray-700 py-1"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-gray-500">Email</label>
                            <input
                                type="email"
                                defaultValue="owen.g@hello.com"
                                className="w-full border-b border-gray-300 focus:outline-none focus:border-gray-700 text-gray-700 py-1"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-gray-500">Message</label>
                            <textarea
                                defaultValue="Write something..."
                                rows={5}
                                maxLength={200}
                                className="w-full border-b border-gray-300 focus:outline-none focus:border-gray-700 text-gray-700 py-1"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="border border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white font-semibold px-4 py-2 transition-colors duration-300"
                        >
                            Send Message
                        </button>
                    </form>

                    {/* Social Links */}
                    <div className="mt-8">
                        <p className="text-sm font-semibold text-gray-700 mb-2">Follow us</p>
                        <div className="flex space-x-4 text-gray-500 text-sm">
                            <a href="/contact" className="hover:text-gray-700">Facebook</a>
                            <a href="/contact" className="hover:text-gray-700">Twitter</a>
                            <a href="/contact" className="hover:text-gray-700">Instagram</a>
                            <a href="/contact" className="hover:text-gray-700">LinkedIn</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

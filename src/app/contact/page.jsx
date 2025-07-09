"use client";

import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useTranslation } from "next-i18next";

export default function ContactPage() {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row max-w-5xl w-full">
                {/* Left Side Image */}
                <div className="relative w-full md:w-1/2 h-72 md:h-auto">
                    <Image
                        src="/contact/contact_as_bg.jpeg"
                        alt="Office Desk"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Right Side Content */}
                <div className="w-full md:w-1/2 p-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        {t("contact.title")}
                    </h1>
                    <p className="text-gray-600 text-sm mb-6">
                        {t("contact.subtitle")}
                    </p>

                    {/* Contact Info */}
                    <div className="mb-8 space-y-1 text-sm text-gray-700">
                        <p>
                            <span className="font-semibold">{t("contact.addressLabel")}</span><br />
                            {t("contact.address")}
                        </p>
                        <p>
                            <span className="font-semibold">{t("contact.emailLabel")}</span><br />
                            {t("contact.email")}
                        </p>
                        <div className="space-y-1">
                            <span className="font-semibold">{t("contact.phoneLabel")}</span>
                            <br />
                            <button onClick={() => window.open("tel:+374 55 753272")}>+374 55 753272</button>
                            <br />
                            <button onClick={() => window.open("tel:+374 77 770342")}>+374 77 770342</button>
                        </div>
                    </div>

                    {/* Form */}
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">
                        {t("contact.sendMessage")}
                    </h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-xs font-semibold text-gray-500">
                                {t("contact.nameLabel")}
                            </label>
                            <input
                                type="text"
                                defaultValue=""
                                className="w-full border-b border-gray-300 focus:outline-none focus:border-gray-700 text-gray-700 py-1"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-gray-500">
                                {t("contact.emailFieldLabel")}
                            </label>
                            <input
                                type="email"
                                defaultValue=""
                                className="w-full border-b border-gray-300 focus:outline-none focus:border-gray-700 text-gray-700 py-1"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-semibold text-gray-500">
                                {t("contact.messageLabel")}
                            </label>
                            <textarea
                                defaultValue={t("contact.messagePlaceholder")}
                                rows={5}
                                maxLength={200}
                                className="w-full border-b border-gray-300 focus:outline-none focus:border-gray-700 text-gray-700 py-1"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="border border-gray-700 rounded-md text-gray-700 hover:bg-gray-700 hover:text-white font-semibold px-4 py-2 transition-colors duration-300"
                        >
                            {t("contact.sendButton")}
                        </button>
                    </form>

                    {/* Social Links */}
                    {/*<div className="mt-8">*/}
                    {/*    <p className="text-sm font-semibold text-gray-700 mb-2">*/}
                    {/*        {t("contact.followUs")}*/}
                    {/*    </p>*/}
                    {/*    <div className="flex flex-wrap text-black text-sm gap-4">*/}
                    {/*        <a*/}
                    {/*            href="https://facebook.com/"*/}
                    {/*            target="_blank"*/}
                    {/*            rel="noopener noreferrer"*/}
                    {/*            className="flex items-center hover:text-gray-700"*/}
                    {/*        >*/}
                    {/*            <FaFacebookF size={16} className="mr-2" />*/}
                    {/*            <span>{t("contact.facebook")}</span>*/}
                    {/*        </a>*/}
                    {/*        <a*/}
                    {/*            href="https://twitter.com/"*/}
                    {/*            target="_blank"*/}
                    {/*            rel="noopener noreferrer"*/}
                    {/*            className="flex items-center hover:text-gray-700"*/}
                    {/*        >*/}
                    {/*            <FaTwitter size={16} className="mr-2" />*/}
                    {/*            <span>{t("contact.twitter")}</span>*/}
                    {/*        </a>*/}
                    {/*        <a*/}
                    {/*            href="https://instagram.com/"*/}
                    {/*            target="_blank"*/}
                    {/*            rel="noopener noreferrer"*/}
                    {/*            className="flex items-center hover:text-gray-700"*/}
                    {/*        >*/}
                    {/*            <FaInstagram size={16} className="mr-2" />*/}
                    {/*            <span>{t("contact.instagram")}</span>*/}
                    {/*        </a>*/}
                    {/*        <a*/}
                    {/*            href="https://linkedin.com/"*/}
                    {/*            target="_blank"*/}
                    {/*            rel="noopener noreferrer"*/}
                    {/*            className="flex items-center hover:text-gray-700"*/}
                    {/*        >*/}
                    {/*            <FaLinkedinIn size={16} className="mr-2" />*/}
                    {/*            <span>{t("contact.linkedin")}</span>*/}
                    {/*        </a>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    );
}

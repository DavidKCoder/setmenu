"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useTranslation, Trans } from "next-i18next";

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="bg-custom-black text-white py-10 px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Left - Logo + description + social */}
                <div>
                    <div className="space-y-2">
                        <Link href="/" passHref>
                            <div className="flex items-center text-sm gap-2 cursor-pointer">
                                <Image
                                    src="/logo.webp"
                                    alt="logo"
                                    width={35}
                                    height={35}
                                    className="object-cover"
                                />
                            </div>
                        </Link>
                        <p className="text-sm text-gray-400">
                            <Trans i18nKey="footer.description" components={{ 1: <span className="text-main" /> }} />
                        </p>
                    </div>
                    <div className="flex space-x-4 mt-4 text-gray-400">
                        <a href="#" className="hover:text-white"><FaFacebookF /></a>
                        <a href="#" className="hover:text-white"><FaInstagram /></a>
                        <a href="#" className="hover:text-white"><FaLinkedin /></a>
                    </div>
                </div>

                {/* Middle - Product Links */}
                <div>
                    <h4 className="text-white font-bold mb-3 text-sm">{t("footer.product")}</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><Link href="#" className="hover:text-white">{t("footer.features")}</Link></li>
                        <li>
                            <span className="hover:text-white">{t("footer.mobileApp")}</span>
                            <span className="hover:text-white text-xs italic"> {t("footer.comingSoon")} </span>
                        </li>
                    </ul>
                </div>

                {/* Right - Support Links */}
                <div>
                    <h4 className="text-white font-bold mb-3 text-sm">{t("footer.support")}</h4>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li><Link href="/about" className="hover:text-white">{t("footer.about")}</Link></li>
                        <li><Link href="/contact" className="hover:text-white">{t("footer.help")}</Link></li>
                        <li><Link href="/privacy" className="hover:text-white">{t("footer.privacy")}</Link></li>
                        <li><Link href="#" className="hover:text-white">{t("footer.terms")}</Link></li>
                    </ul>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-800 my-8"></div>

            {/* Bottom - Email + copyright */}
            <div
                className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 space-y-4 md:space-y-0">
                <a href={`mailto:${t("footer.email")}`} className="hover:text-white">{t("footer.email")}</a>
                <p className="text-gray-500 text-xs">
                    &copy; {new Date().getFullYear()} SetMenu. {t("footer.copyright")}
                </p>
            </div>
        </footer>
    );
}

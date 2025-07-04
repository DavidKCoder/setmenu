"use client";

import Link from "next/link";
import { useTranslation } from "next-i18next";

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="bg-custom-black text-white py-8 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm">
                    &copy; {new Date().getFullYear()}
                    <Link
                        href="/"
                        className="hover:underline mx-1 text-main"
                    >
                        SetMenu.
                    </Link>
                    {t("footer.allRightsReserved")}
                </p>
                <div className="flex gap-4 text-sm">
                    <Link href="/about" className="hover:underline">
                        {t("footer.about")}
                    </Link>
                    <Link href="/contact" className="hover:underline">
                        {t("footer.contact")}
                    </Link>
                    <Link href="/privacy" className="hover:underline">
                        {t("footer.privacy")}
                    </Link>
                </div>
            </div>
        </footer>
    );
}

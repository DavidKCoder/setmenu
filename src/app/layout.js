import React from "react";
import "./globals.css";
import Footer from "@/components/Footer";
import BackToTopButton from "@/components/BackToTopButton";
import Providers from "@/app/providers";
import { Analytics } from "@vercel/analytics/next";

export const metadata = {
    title: "SetMenu - Find the Perfect Menu for Any Event",
    description: "Discover and compare restaurant menus for any event. Browse options, compare dishes, and plan your perfect event with SetMenu.",
    openGraph: {
        title: "SetMenu - Find the Perfect Menu for Any Event",
        description: "Discover and compare restaurant menus for any event. Browse options, compare dishes, and plan your perfect event with SetMenu.",
        url: "https://setmenu.vercel.app",
        siteName: "SetMenu",
        images: [
            {
                url: "https://setmenu.vercel.app/logo.webp",
                width: 200,
                height: 200,
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "SetMenu - Find the Perfect Menu for Any Event",
        description: "Discover and compare restaurant menus for any event. Browse options, compare dishes, and plan your perfect event with SetMenu.",
        images: ["https://setmenu.vercel.app/logo.webp"],
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className="max-w-screen-2xl m-auto overflow-x-hidden scroll-smooth">
        <Providers>
            {children}
            <Analytics />
            <Footer />
            <BackToTopButton />
        </Providers>
        </body>
        </html>
    );
}

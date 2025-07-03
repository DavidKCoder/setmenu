import "./globals.css";
import Footer from "@/components/Footer";
import BackToTopButton from "@/components/BackToTopButton";
import Providers from "@/app/providers";
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
    title: "SetMenu",
    description: "Find the perfect menu for any event.",
    favicon: "./favicon.ico",
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

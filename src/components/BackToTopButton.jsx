'use client';

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTopButton() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 400) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return visible ? (
        <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 p-3 bg-main text-white rounded-full shadow-lg hover:bg-cyan-300 transition"
            aria-label="Back to top"
        >
            <FaArrowUp />
        </button>
    ) : null;
}

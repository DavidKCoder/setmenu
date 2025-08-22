"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import "../app/loader.css";
import MainPageLoader from "@/components/MainPageLoader";

export default function ClientLoaderOverlay({ children }) {
    const [showLoader, setShowLoader] = useState(true);

    useLayoutEffect(() => {
        const hasVisited = sessionStorage.getItem("hasVisitedBefore");

        if (!hasVisited) {
            setShowLoader(true);
            sessionStorage.setItem("hasVisitedBefore", "true");

            const timeout = setTimeout(() => {
                setShowLoader(false);
            }, 2000);

            return () => clearTimeout(timeout);
        } else setShowLoader(false);
    }, []);

    return (
        <div className="relative">
            {showLoader && (
                <div className="fixed inset-0 z-50 bg-white flex items-center justify-center">
                    <MainPageLoader />
                </div>
            )}
            <div className={`${showLoader ? "opacity-0" : "opacity-100"} transition-opacity duration-700`}>
                {children}
            </div>
        </div>
    );
}

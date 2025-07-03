"use client";

import Link from "next/link";

export default function NotFound() {
    return (
        <section
            className="h-screen dark:bg-gray-900 bg-cover bg-center relative flex items-center justify-center"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/28059309/pexels-photo-28059309.jpeg')`,
            }}
        >
            {/* dark overlay on top of background */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div className="relative z-20 px-4 text-center max-w-screen-sm text-white">
                <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
                    404
                </h1>
                <p className="mb-4 text-3xl tracking-tight font-bold md:text-4xl dark:text-white">
                    Something's missing.
                </p>
                <p className="mb-4 text-lg font-light text-white">
                    Sorry, we can't find that page. You'll find lots to explore on the home page.
                </p>
                <Link
                    href="/"
                    className="border-2 border-white font-bold inline-flex text-white hover:bg-white hover:text-black transition-colors rounded-lg text-sm px-5 py-2.5 text-center my-4"
                >
                    Back to Homepage
                </Link>
            </div>
        </section>
    );
}

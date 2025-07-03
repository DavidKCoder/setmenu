"use client";

import Link from "next/link";

export default function NotFound() {
    return (
        <section className="h-screen dark:bg-gray-900 inset-0 bg-cover bg-center" style={{
            backgroundImage: `url('https://images.pexels.com/photos/28059309/pexels-photo-28059309.jpeg`,
        }}>
            {/* dark overlay on top of background */}
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
            <div className="relative py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 z-20">
                <div className="mx-auto max-w-screen-sm text-center text-white">
                    <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
                        404
                    </h1>
                    <p className="mb-4 text-white text-3xl tracking-tight font-bold md:text-4xl dark:text-white">
                        Something's missing.
                    </p>
                    <p className="mb-4 text-lg font-light text-white">
                        Sorry, we can't find that page. You'll find lots to explore on the home page.
                    </p>
                    <a href="/"
                       className="border-2 border-white font-bold inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">
                        Back to Homepage
                    </a>
                </div>
            </div>
        </section>
    );
}

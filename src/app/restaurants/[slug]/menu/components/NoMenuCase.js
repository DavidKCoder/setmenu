"use client";

export default function NoMenuCase() {
    return (
        <section
            className="relative w-full h-screen items-center bg-white text-black"
            style={{
                backgroundImage: "url('/no_menu.jpeg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}>
            <h1
                className="absolute inset-0 flex flex-col items-center justify-center gap-6
                            bg-black/40 text-white text-5xl text-center px-4 underline">
                Our menu is cooking up — coming soon!
            </h1>
        </section>
    );
}
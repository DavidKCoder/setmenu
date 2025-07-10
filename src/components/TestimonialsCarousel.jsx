import { useState, useEffect } from "react";
import Image from "next/image";

const TestimonialsCarousel = ({ testimonials }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalSlides = testimonials.length;

    // Function to update the carousel's position
    const updateCarousel = (index) => {
        setCurrentIndex(index);
    };

    // Auto slide functionality (optional)
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1));
        }, 4000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div className="relative w-full max-w-4xl mx-auto rounded-xl">
            {/* Carousel Wrapper */}
            <div className="overflow-hidden relative rounded-xl">
                {/* Carousel Images */}
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className="w-full flex-shrink-0 px-6"
                        >
                            <div
                                className="relative bg-gradient-to-br from-gray-600 to-gray-800 text-gray-100 p-6 rounded-lg shadow-lg h-56 px-8">
                                {/* Large red quote icon */}
                                <div className="absolute top-0 left-2 text-red-500 font-bold leading-none"
                                     style={{ fontSize: 120 }}>
                                    &ldquo;
                                </div>

                                <p className="mt-12 text-sm leading-relaxed">
                                    {t.feedback}
                                </p>

                                <p className="mt-4 font-semibold text-white">
                                    {t.name}
                                </p>
                                <p className="italic text-gray-300 text-sm">
                                    {t.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>


                {/* Carousel Controls */}
                <button
                    onClick={() => updateCarousel(currentIndex === 0 ? totalSlides - 1 : currentIndex - 1)}
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                </button>
                <button
                    onClick={() => updateCarousel(currentIndex === totalSlides - 1 ? 0 : currentIndex + 1)}
                    className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default TestimonialsCarousel;

import { useState, useEffect } from "react";
import Link from "next/link";
import RestaurantCard from "@/app/restaurants/components/RestaurantCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Carousel = ({ popularRestaurants }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [totalSlides, setTotalSlides] = useState(1); // default to 1 item on mobile

    // Dynamically set the totalSlides based on screen size
    useEffect(() => {
        const updateSlidesPerScreen = () => {
            if (window.innerWidth >= 1024) { // Desktop or large screens
                setTotalSlides(3); // 3 items per screen
            } else if (window.innerWidth >= 640) { // Tablets
                setTotalSlides(2); // 2 items per screen
            } else {
                setTotalSlides(1); // 1 item per screen (mobile)
            }
        };

        // Call on initial render and when window is resized
        updateSlidesPerScreen();
        window.addEventListener("resize", updateSlidesPerScreen);

        // Cleanup on unmount
        return () => window.removeEventListener("resize", updateSlidesPerScreen);
    }, []);

    // Function to update the carousel index
    const updateCarousel = (index) => {
        if (index < 0) {
            setCurrentIndex(popularRestaurants.length - totalSlides); // Go to the last item
        } else if (index >= popularRestaurants.length) {
            setCurrentIndex(0); // Go to the first item
        } else {
            setCurrentIndex(index);
        }
    };

    // Auto slide every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex === popularRestaurants.length - totalSlides ? 0 : prevIndex + 1));
        }, 3000); // Slide every 3 seconds
        return () => clearInterval(interval);
    }, [currentIndex, totalSlides]);

    return (
        <div className="relative w-full mx-auto">
            <div className="overflow-hidden relative py-0.5">
                <div
                    className="flex transition-transform duration-500 ease-in-out gap-0 sm:gap-6"
                    style={{
                        transform: `translateX(-${(currentIndex * 100) / totalSlides}%)`,
                    }}
                >
                    {popularRestaurants.map((restaurant, i) => (
                        <div
                            key={`${restaurant.name}-${i}`}
                            className={`w-full ${totalSlides === 3 ? "sm:w-1/3" : totalSlides === 2 ? "sm:w-1/2" : "w-full"} flex-shrink-0 overflow-hidden rounded-xl shadow hover:shadow-emerald-400 transition`}
                        >
                            <Link href={`/restaurants/${restaurant.slug}`} passHref>
                                <RestaurantCard restaurant={restaurant} />
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Carousel Controls */}
                <button
                    onClick={() => updateCarousel(currentIndex === 0 ? popularRestaurants.length - totalSlides : currentIndex - 1)}
                    className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                >
                    <FaChevronLeft />
                </button>
                <button
                    onClick={() => updateCarousel(currentIndex === popularRestaurants.length - totalSlides ? 0 : currentIndex + 1)}
                    className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                >
                    <FaChevronRight />
                </button>
            </div>
        </div>
    );
};

export default Carousel;

"use client";

import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { KeenAutoScroll } from "@/app/restaurants/components/autoScroll";

export default function RestaurantGallery({ mainImage, images }) {
    const allImages = [mainImage, ...images];

    const [sliderRef] = useKeenSlider(
        {
            slides: {
                perView: 1.2,
                spacing: 10,
            },
            loop: true,
            breakpoints: {
                "(min-width: 640px)": {
                    slides: false,
                },
            },
        },
        [KeenAutoScroll(2)],
    );

    return (
        <div className="w-full mb-5">
            {/* Mobile Carousel */}
            <div className="block sm:hidden">
                <div ref={sliderRef} className="keen-slider">
                    {allImages.map((img, i) => (
                        <div key={i} className="keen-slider__slide">
                            <div className="relative w-full h-64">
                                <Image
                                    src={img}
                                    alt={`Image ${i}`}
                                    fill
                                    className="object-cover rounded-xl"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Desktop Grid */}
            <div
                className="hidden sm:grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-4"
                style={{ height: 450 }}
            >
                <div className="relative sm:col-span-2 lg:col-span-3 h-full">
                    <Image
                        src={mainImage}
                        alt="Main Image"
                        fill
                        className="object-cover rounded-xl"
                    />
                </div>

                <div
                    className="h-full overflow-y-auto custom-scrollbar pr-1 hidden sm:hidden md:hidden lg:block xl:block space-y-4">
                    {images.map((img, i) => (
                        <div key={i} className="min-w-[300px] h-48 relative flex-shrink-0">
                            <Image
                                src={img}
                                alt={`Image ${i}`}
                                fill
                                className="object-cover rounded-xl"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

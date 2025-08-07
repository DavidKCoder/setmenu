import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import { KeenAutoScroll } from "@/app/restaurants/components/autoScroll";
import Image from "next/image";
import { LuCakeSlice } from "react-icons/lu";
import Modal from "@/app/services/[category]/[provider]/components/Modal";

export default function ProviderCard({ providerCakes }) {
    const [sliderRef] = useKeenSlider(
        {
            loop: true,
            renderMode: "performance",
            slides: {
                origin: "auto",
                spacing: 16,
            },
            breakpoints: {
                "(min-width: 640px)": {
                    slides: false,
                },
            },
        },
        [KeenAutoScroll(2)],
    );

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCake, setSelectedCake] = useState(null);

    const handleSeeCardInfo = (cake) => {
        setSelectedCake(cake);
        setIsModalOpen(true); // Open modal on card click
    };

    const closeModal = () => {
        setIsModalOpen(false); // Close modal
    };

    return (
        <div className="w-full">
            <div className="block overflow-x-auto no-scrollbar">
                <div ref={sliderRef} className="grid grid-cols-1 sm:grid-cols-3 mx-auto auto-rows-fr gap-4 px-2 py-2">
                    {providerCakes?.map((cake, i) => (
                        <div
                            key={i}
                            className="cursor-pointer bg-white w-auto h-full flex-shrink-0 overflow-hidden rounded-xl shadow transition-transform duration-200 hover:scale-105 hover:shadow-lg"
                            onClick={() => handleSeeCardInfo(cake)}
                        >
                            <div className="relative h-48">
                                <div className="relative w-full h-full overflow-hidden rounded-t-xl">
                                    <Image
                                        src={cake.image}
                                        alt={cake.name}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute top-0 right-0 bottom-0 left-0"
                                         style={{ background: "linear-gradient(to bottom, transparent 0, transparent 40%, transparent 40%, rgba(0, 0, 0, .7) 100%)" }} />
                                </div>
                                <div
                                    className="absolute bottom-0 left-0 right-0 bg-black/50 px-4 py-2 flex justify-between items-center text-white">
                                    <h3 className="text-lg font-semibold truncate">{cake.name}</h3>
                                    <h3 className="text-xl font-semibold truncate">{cake.price}</h3>
                                </div>
                            </div>

                            {/* Info section */}
                            <div className="p-4 space-y-2">
                                <div className="flex justify-between items-center gap-2 text-gray-600 text-sm">
                                    <div className="flex justify-between items-center">
                                        <LuCakeSlice className="text-cyan-600" />
                                        <span className="pl-2 font-semibold">{cake.serves}</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center gap-2 text-gray-500 text-xs">
                                    <div className="flex justify-between items-center">
                                        {cake.ingredients.map((ingredient, i) => (
                                            <div
                                                key={i}
                                                className="p-1 block lowercase"
                                                style={{
                                                    display: "-webkit-box",
                                                    WebkitBoxOrient: "vertical",
                                                    overflow: "hidden",
                                                    WebkitLineClamp: 3,
                                                }}
                                            >
                                                <span
                                                    className="bg-main p-1 rounded-lg text-gray-100">{ingredient}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex justify-between items-center gap-2 text-gray-500 text-xs">
                                    <div className="flex justify-between items-center">
                                        <span
                                            className="mx-1 block"
                                            style={{
                                                display: "-webkit-box",
                                                WebkitBoxOrient: "vertical",
                                                overflow: "hidden",
                                                WebkitLineClamp: 3,
                                            }}
                                        >
                                            {cake.description}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal with cake details */}
            <Modal isOpen={isModalOpen} onClose={closeModal} provider={selectedCake} />
        </div>
    );
}

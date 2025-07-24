import React from "react";
import Image from "next/image";
import { RiCloseCircleFill } from "react-icons/ri";

const Modal = ({ isOpen, onClose, provider }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-[90%] sm:w-[70%] lg:w-[50%] p-6 relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-red-600"
                >
                    <RiCloseCircleFill size={30}/>
                </button>
                <div>
                    <h2 className="text-xl font-semibold mb-4">{provider.name}</h2>
                    <Image
                        src={provider.image}
                        alt={provider.name}
                        width={400}
                        height={400}
                        className="w-full h-auto object-cover rounded-lg"
                    />
                    <p className="mt-4 text-gray-700">{provider.description}</p>
                    <div className="mt-4">
                        <strong>Price:</strong> {provider.price}
                    </div>
                    <div className="mt-2">
                        <strong>Ingredients:</strong>
                        <ul className="list-disc pl-6 mt-1">
                            {provider.ingredients.map((ingredient, index) => (
                                <li key={index} className="text-sm">{ingredient}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;

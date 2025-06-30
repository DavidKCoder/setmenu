"use client";

import { Suspense } from "react";

export const dynamic = "force-dynamic";

import { useRouter, useSearchParams } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { FaCalendarAlt, FaMoneyBillWave, FaUsers, FaUtensils } from "react-icons/fa";
import { MdLocationOn, MdRestaurantMenu } from "react-icons/md";
import { IoVideocam } from "react-icons/io5";
import { LuNotebookText } from "react-icons/lu";
import "react-phone-number-input/style.css";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
// import html2pdf from "html2pdf.js";

function ConfirmationContent() {
    const router = useRouter();
    const params = useSearchParams();

    const restaurantName = params.get("restaurant_name");
    const eventType = params.get("eventType");
    const people = params.get("people");
    const date = params.get("date");
    const location = params.get("location");
    const pricePerPerson = params.get("price_per_person");

    // if (!data || !menuData) {
    //     return (
    //         <div className="text-white p-8 text-center">
    //             Missing or invalid reservation details. Please start over.
    //         </div>
    //     );
    // }

    let parsed = {};
    let parsedMenu = {};

    // try {
    //     parsed = JSON.parse(decodeURIComponent(data));
    //     parsedMenu = JSON.parse(decodeURIComponent(menuData));
    // } catch (e) {
    //     console.error("Failed to parse query data", e);
    //     return (
    //         <div className="text-white p-8 text-center">
    //             Failed to load reservation details. Please try again.
    //         </div>
    //     );
    // }

    // const { date, restaurant, eventType, people, location } = parsed;
    // const { pricePerPerson } = parsedMenu;

    const {
        register,
        handleSubmit,
        control,
        formState: { errors, isSubmitting },
    } = useForm();

    const generatePDF = async () => {
        // const element = document.getElementById("pdf-menu");
        // const opt = {
        //     margin: 0.5,
        //     filename: "Menu.pdf",
        //     image: { type: "jpeg", quality: 0.98 },
        //     html2canvas: { scale: 2 },
        //     jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
        // };
        // return await html2pdf().set(opt).from(element).outputPdf("blob");
    };

    const onSubmit = async (formData) => {
        // const blob = await generatePDF();
        // const buffer = await blob.arrayBuffer();
        // const base64PDF = Buffer.from(buffer).toString("base64");

        try {
            // await fetch("/api/sendReservationEmail", {
            //     method: "POST",
            //     headers: { "Content-Type": "application/json" },
            //     body: JSON.stringify({ email: formData.email, name: formData.name, menuDetails: base64PDF }),
            // });
            router.push("/confirmation/success");
        } catch (error) {
            alert("Error sending", error);
        }
    };

    return (
        <div
            className="min-h-screen bg-cover bg-center flex items-center justify-center p-2 sm:p-6 bg-gray-800"
            style={{
                backgroundImage: `url('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/2a/67/f3/azura-represents-a-journey.jpg?w=1400&h=800&s=1')`,
            }}
        >
            <div
                className="glass-card w-full max-w-6xl rounded-2xl shadow-lg py-1 sm:py-8 px-2.5 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 text-black">

                {/* Event Info */}
                <div className="rounded-xl py-6 px-2">
                    <h2 className="text-xl sm:text-2xl font-bold mb-4 text-white">Event Summary</h2>
                    <ul className="space-y-1.5 text-sm sm:text-md">
                        <li className="flex items-center gap-2 text-warmGray-50 font-mono">
                            <FaCalendarAlt className="text-amber-500" />
                            <span className="text-gray-400">Date:</span> {date}
                        </li>
                        <li className="flex items-center gap-2 text-warmGray-50 font-mono">
                            <MdRestaurantMenu className="text-amber-500" />
                            <span className="text-gray-400">Restaurant:</span> {restaurantName}
                        </li>
                        <li className="flex items-center gap-2 text-warmGray-50 font-mono">
                            <MdLocationOn className="text-amber-500" />
                            <span className="text-gray-400">Location:</span> {location}
                        </li>
                        <li className="flex items-center gap-2 text-warmGray-50 font-mono">
                            <FaUsers className="text-amber-500" />
                            <span className="text-gray-400">Guests:</span> {people}
                        </li>
                        <li className="flex items-center gap-2 text-warmGray-50 font-mono capitalize">
                            <FaUtensils className="text-amber-500" />
                            <span className="text-gray-400">Event Type:</span> {eventType}
                        </li>
                        <li className="flex items-center gap-2 text-warmGray-50 font-mono">
                            <LuNotebookText className="text-amber-500" />
                            <span className="text-gray-400">Menu:</span> Classic Choice
                        </li>
                    </ul>
                    <hr className="my-6 border-t border-amber-400 opacity-30 font-mono" />
                    <ul className="space-y-1.5 text-sm sm:text-md font-mono">
                        <li className="flex items-center gap-2 text-warmGray-50">
                            <FaMoneyBillWave className="text-amber-500" />
                            <span className="text-gray-400">Total:</span>{" "}
                            {(+people * +pricePerPerson).toLocaleString("de-DE")} AMD
                        </li>
                        <li className="flex items-center gap-2 text-warmGray-50">
                            <IoVideocam className="text-amber-500" />
                            <span className="text-gray-400">Extra options:</span> Անվճար DJ / Հանդիսավա / Ֆոտո
                            նկարահանում
                        </li>
                    </ul>
                </div>

                {/* Booking Form */}
                <div className="bg-gray-800 rounded-xl p-6">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-white">Your Booking Information</h2>

                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <input
                                    {...register("name", { required: "First name is required" })}
                                    type="text"
                                    placeholder="First Name"
                                    className="w-full px-4 py-2 rounded-lg bg-white/20 backdrop-blur-md text-black placeholder-white/70"
                                />
                                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                            </div>
                            <div className="w-1/2">
                                <input
                                    {...register("surname", { required: "Last name is required" })}
                                    type="text"
                                    placeholder="Last Name"
                                    className="w-full px-4 py-2 rounded-lg bg-white/20 backdrop-blur-md text-black placeholder-white/70"
                                />
                                {errors.surname &&
                                    <p className="text-red-500 text-sm mt-1">{errors.surname.message}</p>}
                            </div>
                        </div>

                        <div>
                            <input
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^\S+@\S+$/i,
                                        message: "Enter a valid email",
                                    },
                                })}
                                type="email"
                                placeholder="Email"
                                className="w-full px-4 py-2 rounded-lg bg-white/20 backdrop-blur-md text-black placeholder-white/70"
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                        </div>

                        <div>
                            <Controller
                                name="phone"
                                control={control}
                                rules={{
                                    validate: (value) => {
                                        if (!value || typeof value !== "string") {
                                            return "Phone number is required";
                                        }
                                        return isValidPhoneNumber(value) || "Phone number is not valid";
                                    },
                                }}
                                render={({ field: { onChange, value } }) => (
                                    <PhoneInput
                                        international
                                        defaultCountry="AM"
                                        value={value}
                                        onChange={onChange}
                                        className="w-full rounded-lg bg-white/20 backdrop-blur-md text-black placeholder-white/70"
                                    />
                                )}
                            />
                            {errors.phone && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.phone.message || "Phone number is not valid"}
                                </p>
                            )}
                        </div>

                        <div>
                            <textarea
                                {...register("note")}
                                placeholder="Additional Notes"
                                className="w-full px-4 py-2 rounded-lg bg-white/20 backdrop-blur-md text-black placeholder-white/70 h-24"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-2 mt-4 bg-main hover:bg-orange-500 rounded-lg text-white font-semibold transition"
                        >
                            {isSubmitting ? "Processing..." : "Submit Reservation"}
                        </button>
                    </form>
                </div>
            </div>

            {/* Hidden PDF content */}
            <div id="pdf-menu" className="hidden">
                <h1>{parsedMenu.title}</h1>
                <p>{parsedMenu.fullDescription}</p>

                {parsedMenu.menu?.map((section, index) => (
                    <div key={index}>
                        <h2>{section.category}</h2>
                        <ul>
                            {section.items.map((item, i) => (
                                <li key={i}>
                                    <strong>{item.name}</strong> — {item.description} ({item.price})
                                    {item.badge && <span> 🌟 {item.badge}</span>}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function ConfirmationPage() {
    return (
        <Suspense fallback={<div className="text-white p-8 text-center">Loading reservation details...</div>}>
            <ConfirmationContent />
        </Suspense>
    );
}

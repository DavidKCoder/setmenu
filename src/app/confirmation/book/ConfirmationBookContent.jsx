"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import "react-phone-number-input/style.css";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import emailjs from "@emailjs/browser";

export default function ConfirmationBookContent() {
    const router = useRouter();
    const params = useSearchParams();

    const restaurantName = params.get("restaurant_name");
    const eventType = params.get("eventType");
    const menuVariant = params.get("menu_variant");
    const people = params.get("people");
    const date = params.get("date");
    const location = params.get("location");
    const pricePerPerson = params.get("price_per_person");

    const {
        register,
        handleSubmit,
        control,
        formState: { errors, isSubmitting },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const reservationData = {
                restaurantName,
                eventType,
                menuVariant,
                people,
                date,
                location,
                pricePerPerson,
            };

            const formattedDate = (date) => new Date(date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
            });

            const templateParams = {
                from_name: "SetMenu App",
                to_email: data.email,
                from_email: reservationData.restaurantName || "noreply@setmenu.app",
                subject: "New Reservation Details",
                restaurant_name: reservationData.restaurantName || "",
                event_type: reservationData.eventType || "",
                menu_variant: reservationData.menuVariant || "",
                people: reservationData.people || "",
                date: reservationData.date
                    ? formattedDate(reservationData.date)
                    : "",
                location: reservationData.location || "",
                price_per_person: reservationData.pricePerPerson
                    ? `${Number(reservationData.pricePerPerson).toLocaleString("de-DE")} AMD`
                    : "",
                total_price: `${(reservationData.pricePerPerson * reservationData.people).toLocaleString("de-DE")} AMD`,
                note: data.note || "",
            };

            const result = await emailjs.send(
                "service_62wtutn",
                "template_aqsu84f",
                templateParams,
                "KI5BKd8QifZuhNcHK",
            );

            console.log("Email successfully sent!", result.text);

            router.push("/confirmation/success");

        } catch (error) {
            console.error("Error sending email:", error);
            alert("Error sending email. Check console for details.");
        }
    };

    return (
        <div className="min-h-screen bg-cover bg-center flex items-center justify-center bg-gray-50"
             style={{ backgroundImage: "url('/confirmation/book_information.jpg')" }}
        >
            <div
                className="bg-gray-50 w-11/12 sm:max-w-2xl rounded shadow-lg p-1 sm:p-1 gap-8 text-black"
            >
                {/* Booking Form */}
                <div className="bg-gray-800 rounded p-6">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-white">
                            Your Booking Information
                        </h2>

                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <input
                                    {...register("name", { required: "First name is required" })}
                                    type="text"
                                    placeholder="First Name"
                                    className="w-full px-4 py-2 rounded bg-white/20 backdrop-blur-md text-black placeholder-white/70"
                                />
                                {errors.name && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.name.message}
                                    </p>
                                )}
                            </div>
                            <div className="w-1/2">
                                <input
                                    {...register("surname", { required: "Last name is required" })}
                                    type="text"
                                    placeholder="Last Name"
                                    className="w-full px-4 py-2 rounded bg-white/20 backdrop-blur-md text-black placeholder-white/70"
                                />
                                {errors.surname && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.surname.message}
                                    </p>
                                )}
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
                                className="w-full px-4 py-2 rounded bg-white/20 backdrop-blur-md text-black placeholder-white/70"
                            />
                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.email.message}
                                </p>
                            )}
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
                                        className="w-full rounded bg-white/20 backdrop-blur-md text-black placeholder-white/70"
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
                                className="w-full px-4 py-2 rounded bg-white/20 backdrop-blur-md text-black placeholder-white/70 h-24"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full py-2 mt-4 bg-main hover:bg-orange-500 rounded text-white font-semibold transition"
                        >
                            {isSubmitting ? "Processing..." : "Submit Reservation"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

"use client";

import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function FeedbackModal() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(null);

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors, isValid, isSubmitting },
        reset,
    } = useForm({
        mode: "onChange",
        defaultValues: {
            stars: 0,
            message: "",
            name: "",
            email: "",
        },
    });

    const stars = watch("stars");

    const onSubmit = async (data) => {
        setLoading(true);

        try {
            const result = await emailjs.send(
                "service_62wtutn",
                "feedback_notification",
                {
                    stars: data.stars || 5,
                    message: data.message,
                    name: data.name,
                    email: data.email,
                },
                "KI5BKd8QifZuhNcHK",
            );

            console.log(result.text);
            setSuccess(true);
            reset();
            handleBackHome();
        } catch (error) {
            console.error(error);
            setSuccess(false);
        } finally {
            setLoading(false);
        }
    };

    const handleBackHome = () => {
        router.push("/");
    };


    return (
        <div className="fixed inset-0 bg-black bg-opacity-5 flex items-center justify-center z-50">
            <div className="bg-gray-800 rounded-lg w-96 p-6 relative">
                {/* Close Button */}
                <button
                    onClick={handleBackHome}
                    className="absolute top-3 right-3 text-gray-400 hover:text-gray-200 text-xl"
                >
                    ✕
                </button>

                <h2 className="text-center text-lg font-bold text-white mb-2">
                    We appreciate your feedback.
                </h2>
                <p className="text-center text-white text-sm mb-4">
                    Your feedback helps us grow. We'd appreciate it if you could take a moment to share your thoughts
                    and help us enhance your experience.
                </p>

                {/* Star Rating */}
                <div className="flex justify-center mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <button
                            key={star}
                            type="button"
                            onClick={() => setValue("stars", star, { shouldValidate: true })}
                            className={`text-2xl ${
                                star <= stars ? "text-yellow-400" : "text-gray-400"
                            } hover:text-yellow-500`}
                        >
                            ★
                        </button>
                    ))}
                </div>
                {errors.stars && (
                    <p className="text-red-500 text-xs text-center mb-2">
                        Please select a star rating.
                    </p>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
                    <textarea
                        {...register("message", { required: "Feedback is required." })}
                        placeholder="Please share any suggestions or feedback you may have."
                        className="p-2 rounded border border-gray-300 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                        rows={3}
                    />
                    {errors.message && (
                        <p className="text-red-500 text-xs">{errors.message.message}</p>
                    )}

                    <input
                        type="name"
                        {...register("name", {
                            required: "Name is required.",
                        })}
                        placeholder="Your name"
                        className="p-2 rounded border border-gray-300 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />
                    {errors.name && (
                        <p className="text-red-500 text-xs">{errors.name.message}</p>
                    )}

                    <input
                        type="email"
                        {...register("email", {
                            required: "Email is required.",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Invalid email address.",
                            },
                        })}
                        placeholder="Your email address"
                        className="p-2 rounded border border-gray-300 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                    />
                    {errors.email && (
                        <p className="text-red-500 text-xs">{errors.email.message}</p>
                    )}

                    <button
                        type="submit"
                        className="bg-blue-700 text-white rounded py-2 hover:bg-blue-800 transition disabled:opacity-50"
                        disabled={isSubmitting}
                    >
                        {loading ? "Submitting..." : "Submit Feedback"}
                    </button>
                </form>

                {success === true && (
                    <p className="text-green-500 text-center mt-2 text-sm">
                        Thank you for your feedback!
                    </p>
                )}
                {success === false && (
                    <p className="text-red-500 text-center mt-2 text-sm">
                        Something went wrong. Please try again.
                    </p>
                )}
            </div>
        </div>
    );
}

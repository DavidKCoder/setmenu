"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash, FaEnvelope, FaUserPlus, FaSignInAlt } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { forum_splash } from "@/app/fonts";

export default function AuthForm({ redirect }) {
    const router = useRouter();
    const [isLogin, setIsLogin] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting },
    } = useForm();

    const password = watch("password");

    const onSubmit = async (data) => {
        await new Promise((r) => setTimeout(r, 1500));

        if (isLogin) {
            router.push(redirect);
        } else {
            alert("Registered! You can now sign in.");
            setIsLogin(true);
        }
    };

    return (
        <div className="min-h-screen flex">
            {/* Left Side - Auth Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center">
                <div className="block sm:hidden absolute bg-cover w-full h-screen z-20 "
                     style={{ backgroundImage: `url('/auth/auth_screen.jpg')` }}></div>
                <div className="w-full max-w-md bg-white rounded-2xl shadow-xl z-50 m-6 py-4">
                    <div className="text-center">
                        <div
                            className="inline-flex items-center justify-center w-16 h-16 bg-cyan-100 rounded-full">
                            {isLogin ? <FaSignInAlt className="text-cyan-600 text-lg" /> :
                                <FaUserPlus className="text-cyan-600 text-lg" />}
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800">
                            {isLogin ? "Welcome Back!" : "Create Account"}
                        </h2>
                        <p className="text-gray-600">
                            {isLogin ? "Please sign in to continue" : "Get started with your account"}
                        </p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="text-black space-y-4 px-4">
                        {!isLogin && (
                            <>
                                {/* Name Field */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Name</label>
                                    <input
                                        {...register("name", { required: "Name is required" })}
                                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:${errors.name ? "ring-red-500" : "ring-cyan-600"}`}
                                        placeholder="John"
                                    />
                                    {errors.name &&
                                        <p className="text-red-500 text-sm">{errors.name.message}</p>}
                                </div>

                                {/* Surname Field */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Surname</label>
                                    <input
                                        {...register("surname", { required: "Surname is required" })}
                                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:${errors.surname ? "ring-red-500" : "ring-cyan-600"}`}
                                        placeholder="Doe"
                                    />
                                    {errors.surname &&
                                        <p className="text-red-500 text-sm">{errors.surname.message}</p>}
                                </div>

                                {/* Phone Number Field */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Phone
                                        Number</label>
                                    <input
                                        {...register("phone", {
                                            required: "Phone number is required",
                                            pattern: {
                                                value: /^[0-9+\-\s()]{7,15}$/,
                                                message: "Enter a valid phone number",
                                            },
                                        })}
                                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:${errors.phone ? "ring-red-500" : "ring-cyan-600"}`}
                                        placeholder="+374 xx xxxxxx"
                                    />
                                    {errors.phone &&
                                        <p className="text-red-500 text-sm">{errors.phone.message}</p>}
                                </div>
                            </>
                        )}

                        <div className="">
                            <label className="block text-sm font-medium text-gray-700">Email Address</label>
                            <div className="relative">
                                <input
                                    type="email"
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email" },
                                    })}
                                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:${errors.email ? "ring-red-500" : "ring-cyan-600"}`}
                                    placeholder="you@example.com"
                                />
                                <FaEnvelope className="absolute right-2 top-3 text-gray-400" />
                            </div>
                            {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
                        </div>

                        <div className="">
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    {...register("password", {
                                        required: "Password is required",
                                        minLength: { value: 8, message: "Minimum 8 characters" },
                                    })}
                                    className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:${errors.password ? "ring-red-500" : "ring-cyan-600"}`}
                                    placeholder="••••••••"
                                />
                                <button type="button" className="absolute right-3 top-3 text-gray-400"
                                        onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                            {errors.password && <p className="text-sm text-red-600">{errors.password.message}</p>}
                        </div>

                        {!isLogin && (
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Confirm Password
                                </label>
                                <div className="relative">
                                    <input
                                        type={showConfirmPassword ? "text" : "password"}
                                        {...register("confirmPassword", {
                                            required: "Confirm password is required",
                                            validate: (value) => value === password || "Passwords do not match",
                                        })}
                                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:${errors.confirmPassword ? "ring-red-500" : "ring-cyan-600"}`}
                                        placeholder="••••••••"
                                    />
                                    <button type="button" className="absolute right-3 top-3 text-gray-400"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                        {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                    </button>
                                </div>
                                {errors.confirmPassword &&
                                    <p className="text-sm text-red-600">{errors.confirmPassword.message}</p>}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-cyan-600 text-white py-2 rounded-lg font-semibold hover:bg-cyan-700 transition-colors"
                        >
                            {isSubmitting ? "Processing..." : isLogin ? "Sign In" : "Create Account"}
                        </button>

                        <div className="flex items-center my-4">
                            <div className="flex-grow border-t border-gray-300" />
                            <span className="mx-4 text-sm text-gray-400">
                                OR
                            </span>
                            <div className="flex-grow border-t border-gray-300" />
                        </div>

                        <a href="#"
                           className="flex items-center justify-center space-x-2 text-gray-600 my-2 py-2 sm:my-1 sm:py-2 bg-gray-100 hover:bg-gray-200 rounded-lg">
                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 326667 333333"
                                 shapeRendering="geometricPrecision" textRendering="geometricPrecision"
                                 imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd">
                                <path
                                    d="M326667 170370c0-13704-1112-23704-3518-34074H166667v61851h91851c-1851 15371-11851 38519-34074 54074l-311 2071 49476 38329 3428 342c31481-29074 49630-71852 49630-122593m0 0z"
                                    fill="#4285f4"></path>
                                <path
                                    d="M166667 333333c44999 0 82776-14815 110370-40370l-52593-40742c-14074 9815-32963 16667-57777 16667-44074 0-81481-29073-94816-69258l-1954 166-51447 39815-673 1870c27407 54444 83704 91852 148890 91852z"
                                    fill="#34a853"></path>
                                <path
                                    d="M71851 199630c-3518-10370-5555-21482-5555-32963 0-11482 2036-22593 5370-32963l-93-2209-52091-40455-1704 811C6482 114444 1 139814 1 166666s6482 52221 17777 74814l54074-41851m0 0z"
                                    fill="#fbbc04"></path>
                                <path
                                    d="M166667 64444c31296 0 52406 13519 64444 24816l47037-45926C249260 16482 211666 1 166667 1 101481 1 45185 37408 17777 91852l53889 41853c13520-40185 50927-69260 95001-69260m0 0z"
                                    fill="#ea4335"></path>
                            </svg>
                            <span>{isLogin ? "Sign In" : "Sign Up"} with Google</span>
                        </a>

                        <p className="text-center text-gray-600">
                            {isLogin ? "Don't have an account?" : "Already have an account?"}
                            <button
                                type="button"
                                className="ml-1 text-cyan-600 hover:text-cyan-700 font-semibold"
                                onClick={() => setIsLogin(!isLogin)}
                            >
                                {isLogin ? "Sign up" : "Sign in"}
                            </button>
                        </p>
                    </form>
                </div>
            </div>

            {/* Right Side */}
            <div className="hidden lg:block lg:w-1/2 bg-cover bg-center"
                 style={{ backgroundImage: `url('/auth/auth_screen.jpg')` }}>
                <div
                    className="h-full bg-black bg-opacity-50 flex items-center justify-center text-white px-12 text-center">
                    <div>
                        <h2 className={`text-4xl font-bold mb-6 uppercase ${forum_splash.className}`}>
                            Your Perfect Event Starts Here
                        </h2>
                        <p className="text-xl">
                            Find the perfect menu for any event — fast, easy, and tailored to your taste.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

"use client";

import { useForm, Controller } from "react-hook-form";
import { useState } from "react";

export default function CreateRestaurantForm() {
    const [bookedDates, setBookedDates] = useState([]);
    const [mainPreview, setMainPreview] = useState(null);
    const [imagesPreview, setImagesPreview] = useState([]);
    const [filesState, setFilesState] = useState([]);
    const [imageError, setImageError] = useState("");

    console.log("imagesPreview", imagesPreview);

    const {
        register,
        handleSubmit,
        control,
        watch,
        getValues,
        formState: { errors },
    } = useForm({
        defaultValues: {
            slug: "",
            name: "",
            cuisine: "",
            phone: "+374",
            email: "",
            location: "",
            openTime: "09:00",
            closeTime: "23:00",
            features: [],
            categories: [],
        },
    });

    const values = getValues();
    console.log("values", values);

    const formatPhone = (value) => {
        // Remove all non-digit except "+"
        let digits = value.replace(/[^\d]/g, "");
        if (!digits.startsWith("374")) digits = "374" + digits;

        // Add "+" at start
        digits = "+" + digits;

        // Add space after country code and after prefix
        if (digits.length > 4) digits = digits.slice(0, 4) + " " + digits.slice(4);
        if (digits.length > 7) digits = digits.slice(0, 7) + " " + digits.slice(7);

        return digits;
    };

    const handleDateChange = (e) => {
        const newDate = e.target.value;
        if (newDate && !bookedDates.includes(newDate)) {
            if (bookedDates.length < 10) {
                setBookedDates([...bookedDates, newDate]);
            } else {
                alert("You can select a maximum of 10 booked dates.");
            }
        }
        e.target.value = "";
    };

    const removeDate = (date) => {
        setBookedDates(bookedDates.filter((d) => d !== date));
    };

    const onSubmit = (data) => {
        console.log("Form submitted:", data, bookedDates);
        alert("Restaurant saved successfully!");
    };

    const handleFiles = (newFiles, onChange) => {
        if (filesState.length >= 4) {
            setImageError("You can upload a maximum of 4 images.");
            return;
        }

        setImageError("");

        const combinedFiles = [...filesState, ...newFiles].slice(0, 4);
        setFilesState(combinedFiles);

        const combinedPreviews = combinedFiles.map((f) => URL.createObjectURL(f));
        setImagesPreview(combinedPreviews);

        onChange(combinedFiles);
    };

    const removeFile = (index, onChange) => {
        const newFiles = filesState.filter((_, i) => i !== index);
        setFilesState(newFiles);
        setImagesPreview(newFiles.map((f) => URL.createObjectURL(f)));
        onChange(newFiles);
    };

    return (
        <div className="bg-white shadow-md rounded-2xl p-4">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Slug */}
                <div>
                    <label className="block text-sm font-medium">Slug</label>
                    <input
                        {...register("slug", {
                            required: "Slug is required",
                            pattern: {
                                value: /^[a-z0-9-]{1,15}$/,
                                message:
                                    "Lowercase letters, numbers, hyphens only. Max 15 chars",
                            },
                        })}
                        placeholder="e.g. bellagio"
                        className="w-full border rounded-md p-2"
                    />
                    {errors.slug && (
                        <p className="text-red-500 text-sm">{errors.slug.message}</p>
                    )}
                </div>

                {/* Name */}
                <div>
                    <label className="block text-sm font-medium">Name</label>
                    <input
                        {...register("name", {
                            required: "Name is required",
                            maxLength: { value: 25, message: "Max 25 characters" },
                        })}
                        placeholder="Restaurant name"
                        className="w-full border rounded-md p-2"
                    />
                    {errors.name && (
                        <p className="text-red-500 text-sm">{errors.name.message}</p>
                    )}
                </div>

                {/* Location */}
                <div>
                    <label className="block text-sm font-medium">Location</label>
                    <input
                        {...register("location", {
                            required: "Location is required",
                            maxLength: { value: 50, message: "Max 50 characters" },
                        })}
                        placeholder="e.g. 2 Myasnikyan Ave, Yerevan"
                        className="w-full border rounded-md p-2"
                    />
                    {errors.location && (
                        <p className="text-red-500 text-sm">{errors.location.message}</p>
                    )}
                </div>

                {/* Cuisine */}
                <div>
                    <label className="block text-sm font-medium">Cuisine</label>
                    <select
                        {...register("cuisine", { required: "Please select a cuisine" })}
                        className="w-full border rounded-md p-2"
                    >
                        <option value="">Select cuisine</option>
                        <option value="armenian">Armenian</option>
                        <option value="italian">Italian</option>
                        <option value="japanese">Japanese</option>
                        <option value="french">French</option>
                    </select>
                    {errors.cuisine && (
                        <p className="text-red-500 text-sm">{errors.cuisine.message}</p>
                    )}
                </div>

                {/* Phone */}
                <div>
                    <Controller
                        name="phone"
                        control={control}
                        rules={{
                            required: "Phone is required",
                            pattern: {
                                value: /^\+374\s?(10|11|12|33|41|43|44|49|55|77|91|93|94|95|96|97|98|99)\s?\d{3}\s?\d{3}$/,
                                message:
                                    "Must be a valid Armenian phone number (+374 XX XXXXXX)",
                            },
                        }}
                        render={({ field, fieldState }) => (
                            <div>
                                <label className="block text-sm font-medium">Phone</label>
                                <input
                                    {...field}
                                    onChange={(e) => field.onChange(formatPhone(e.target.value))}
                                    className="w-full border rounded-md p-2"
                                />
                                {fieldState.error && (
                                    <p className="text-red-500 text-sm">{fieldState.error.message}</p>
                                )}
                            </div>
                        )}
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="block text-sm font-medium">Email</label>
                    <input
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Invalid email address",
                            },
                        })}
                        className="w-full border rounded-md p-2"
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm">{errors.email.message}</p>
                    )}
                </div>

                {/* Working Hours */}
                <div>
                    <label className="block text-sm font-medium">Working Hours</label>
                    <div className="flex gap-2">
                        <input
                            type="time"
                            {...register("openTime")}
                            className="flex-1 border rounded-md p-2"
                        />
                        <span className="self-center">to</span>
                        <input
                            type="time"
                            {...register("closeTime")}
                            className="flex-1 border rounded-md p-2"
                        />
                    </div>
                </div>

                {/* Features */}
                <div>
                    <label className="block text-sm font-medium">Features</label>
                    <div className="flex flex-wrap gap-3">
                        {["Wi-Fi", "Parking", "Outdoor Seating", "Live Music"].map((f) => (
                            <label key={f} className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    value={f.toLowerCase().replace(" ", "-")}
                                    {...register("features")}
                                />
                                {f}
                            </label>
                        ))}
                    </div>
                </div>

                {/* Main Image */}
                <div>
                    <label className="block text-sm font-medium">Main Image</label>
                    <Controller
                        name="mainImage"
                        control={control}
                        rules={{ required: "Main image is required" }}
                        onChange={(e) => {
                            const file = e.target.files[0];
                            if (file) {
                                field.onChange(file);       // update react-hook-form value
                                setMainPreview(URL.createObjectURL(file)); // show preview
                            }
                        }}

                        render={({ field, fieldState }) => (
                            <div>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => {
                                        const file = e.target.files[0];
                                        if (file) {
                                            field.onChange(file);
                                            setMainPreview(URL.createObjectURL(file));
                                        }
                                    }}
                                    className="w-full border rounded-md p-2"
                                />
                                {fieldState.error && (
                                    <p className="text-red-500 text-sm">{fieldState.error.message}</p>
                                )}
                                {mainPreview && (
                                    <img
                                        src={mainPreview}
                                        alt="Main Preview"
                                        className="mt-2 h-16 w-16 object-cover rounded-md"
                                    />
                                )}
                            </div>
                        )}
                    />
                </div>

                {/* Additional Images (up to 4) */}
                <div>
                    <label className="block text-sm font-medium">Additional Images (max 4)</label>
                    <Controller
                        name="images"
                        control={control}
                        render={({ field }) => (
                            <div>
                                <input
                                    type="file"
                                    accept="image/*"
                                    multiple
                                    onChange={(e) =>
                                        handleFiles(Array.from(e.target.files), field.onChange)
                                    }
                                />
                                <div className="flex gap-2 mt-2 flex-wrap">
                                    {imagesPreview.map((src, i) => (
                                        <div key={i} className="relative">
                                            <img
                                                src={src}
                                                alt={`Preview ${i}`}
                                                className="h-16 w-16 object-cover rounded-md"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => removeFile(i, field.onChange)}
                                                className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                                            >
                                                ×
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    />
                    {imageError && <p className="text-red-500 text-sm mt-1">{imageError}</p>}
                </div>

                {/* Menu Categories */}
                <div>
                    <label className="block text-sm font-medium">Menu Categories</label>
                    <div className="flex flex-wrap gap-3">
                        {["Kids", "Birthday", "Wedding"].map((c) => (
                            <label key={c} className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    value={c.toLowerCase()}
                                    {...register("categories")}
                                />
                                {c}
                            </label>
                        ))}
                    </div>
                </div>

                {/* Booked Dates */}
                <div>
                    <label className="block text-sm font-medium">Booked Dates (max 10)</label>
                    <input
                        type="date"
                        onChange={handleDateChange}
                        className="border rounded-md p-2"
                    />
                    {bookedDates.length > 10 && (
                        <p className="text-red-500 text-sm">
                            Maximum 10 booked dates allowed
                        </p>
                    )}
                    <div className="mt-2 flex flex-wrap gap-2">
                        {bookedDates.map((date) => (
                            <span
                                key={date}
                                className="flex items-center gap-2 bg-gray-100 px-2 py-1 rounded-md text-sm border border-custom-beige"
                            >
                          {date}
                                <button
                                    type="button"
                                    onClick={() => removeDate(date)}
                                    className="text-red-500 hover:text-red-700"
                                >
                            ×
                          </button>
                        </span>
                        ))}
                    </div>
                </div>

                {/* Submit */}
                <div>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-green-600 text-white rounded-md"
                    >
                        Save Restaurant
                    </button>
                </div>
            </form>
        </div>
    );
}

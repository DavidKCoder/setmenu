"use client";

export default function RestaurantCategories({ categories }) {
    if (!categories?.length) return null;

    return (
        <div className="">
            <h2 className="text-2xl font-semibold mb-4">Categories</h2>
            <div className="flex flex-wrap gap-2">
                {categories.map((cat, index) => (
                    <span key={index}
                          className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
                    <span className="size-1.5 inline-block rounded-full w-1 h-1 bg-blue-800 dark:bg-blue-500" />
                        {cat}
                </span>
                ))}
            </div>
        </div>

    );
}

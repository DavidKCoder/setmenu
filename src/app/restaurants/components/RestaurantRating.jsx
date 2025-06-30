import React from "react";
import { TiStarOutline, TiStarFullOutline , TiStarHalfOutline  } from "react-icons/ti";


const RestaurantRating = ({ rating = 0, outOf = 5 }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;
    const emptyStars = outOf - fullStars - (hasHalfStar ? 1 : 0);

    return (
        <div className="flex items-center text-lg">
            {Array(fullStars)
                .fill(0)
                .map((_, i) => (
                    <TiStarFullOutline key={i} className="text-amber-500" />
                ))}

            {hasHalfStar && (
               <TiStarHalfOutline className="text-amber-500"/>
            )}

            {Array(emptyStars)
                .fill(0)
                .map((_, i) => (
                    <TiStarOutline key={i} className="text-amber-500"/>
                ))}

            {/* Text */}
            <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400 ml-2">{rating.toFixed(2)}</p>
            <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400 ml-1">out of</p>
            <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400 ml-1">{outOf}</p>
        </div>
    );
};

export default RestaurantRating;

"use client";

import { useState } from "react";

export default function ToggleSwitch({ disabled }) {
    const [toggle, setToggle] = useState(false);

    return (
        <label className="inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                className="sr-only peer"
                checked={toggle}
                onChange={() => setToggle(!toggle)}
                disabled={disabled}
            />
            <div
                className={`w-11 h-6 rounded-full relative transition-colors duration-300 ${
                    toggle ? "bg-black" : "bg-gray-300"
                }`}
            >
        <span
            className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${toggle ? "right-1" : "left-1"}`}
        />
            </div>
        </label>
    );
}

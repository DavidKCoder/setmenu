import { FaChevronRight } from "react-icons/fa";

export default function UserInfoCard() {
    return (
        <div className="bg-white rounded-xl p-4 flex items-center justify-between mb-8 shadow">
            <div className="flex items-center gap-4">
                <img
                    src="https://i.pravatar.cc/80"
                    alt="User"
                    className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                    <h2 className="flex items-center gap-2 text-base font-bold text-gray-800">
                        David Karapetyan
                        <span
                            className="text-lg font-semibold text-blue-600 bg-transparent rounded-full dark:bg-gray-700 dark:text-blue-400">
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                 fill="currentColor" viewBox="0 0 20 20">
                            <path fill="currentColor"
                                  d="m18.774 8.245-.892-.893a1.5 1.5 0 0 1-.437-1.052V5.036a2.484 2.484 0 0 0-2.48-2.48H13.7a1.5 1.5 0 0 1-1.052-.438l-.893-.892a2.484 2.484 0 0 0-3.51 0l-.893.892a1.5 1.5 0 0 1-1.052.437H5.036a2.484 2.484 0 0 0-2.48 2.481V6.3a1.5 1.5 0 0 1-.438 1.052l-.892.893a2.484 2.484 0 0 0 0 3.51l.892.893a1.5 1.5 0 0 1 .437 1.052v1.264a2.484 2.484 0 0 0 2.481 2.481H6.3a1.5 1.5 0 0 1 1.052.437l.893.892a2.484 2.484 0 0 0 3.51 0l.893-.892a1.5 1.5 0 0 1 1.052-.437h1.264a2.484 2.484 0 0 0 2.481-2.48V13.7a1.5 1.5 0 0 1 .437-1.052l.892-.893a2.484 2.484 0 0 0 0-3.51Z" />
                            <path fill="#fff"
                                  d="M8 13a1 1 0 0 1-.707-.293l-2-2a1 1 0 1 1 1.414-1.414l1.42 1.42 5.318-3.545a1 1 0 0 1 1.11 1.664l-6 4A1 1 0 0 1 8 13Z" />
                            </svg>
                        </span>
                    </h2>
                    <p className="text-sm text-gray-500">Customer</p>
                </div>
            </div>
            {/*<FaChevronRight className="text-gray-400" />*/}
        </div>
    );
}
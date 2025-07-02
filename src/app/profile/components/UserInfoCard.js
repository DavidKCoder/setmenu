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
                    <h2 className="text-base font-bold text-gray-800">Alfred Daniel</h2>
                    <p className="text-sm text-gray-500">Customer</p>
                </div>
            </div>
            <FaChevronRight className="text-gray-400" />
        </div>
    );
}
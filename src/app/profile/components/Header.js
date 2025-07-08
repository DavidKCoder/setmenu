import { IoReturnUpBack } from "react-icons/io5";
import { useRouter } from "next/navigation";

export default function Header() {
    const router = useRouter();
    return (
        <div className="flex items-center justify-between mb-6">
            <button className="text-gray-500" onClick={router.back}>
                <IoReturnUpBack />
            </button>
            <h1 className="text-lg font-semibold text-gray-800">Settings</h1>
            <div className="w-6" />
        </div>

    );
}
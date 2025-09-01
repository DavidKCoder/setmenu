import { IoReturnUpBack } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { useTranslation } from "next-i18next";

export default function Header() {
    const { t } = useTranslation();
    const router = useRouter();

    return (
        <div className="flex items-center justify-between mb-6">
            <button className="text-gray-500" onClick={router.back}>
                <IoReturnUpBack />
            </button>
            <h1 className="text-lg font-semibold text-gray-800 capitalize">{t("settings")}</h1>
            <div className="w-6" />
        </div>

    );
}
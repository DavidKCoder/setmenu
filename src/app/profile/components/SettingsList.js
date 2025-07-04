import ProfileSection from "@/app/profile/components/ProfileSection";
import PasswordSection from "@/app/profile/components/PasswordSection";
import { FaBell, FaChevronRight, FaInfoCircle, FaMoon, FaQuestionCircle, FaTrash } from "react-icons/fa";
import ToggleSwitch from "@/app/profile/components/ToggleOrChevron";

export default function SettingsList() {
    return (
        <div className="space-y-4">
            {/* First block */}
            <div className="bg-white rounded-xl divide-y divide-gray-200 shadow">
                <ProfileSection />
                <PasswordSection />
                <SettingsRow icon={<FaBell />} label="Notifications" toggle />
                <SettingsRow
                    icon={<FaMoon />}
                    label="Dark mode"
                    toggle
                />
            </div>

            {/* Second block */}
            <div className="bg-white rounded-xl divide-y divide-gray-200 shadow">
                <SettingsRow
                    icon={<FaInfoCircle />}
                    label="About Us"
                    href="/about"
                />
                <SettingsRow icon={<FaQuestionCircle />} label="Help" />
                <SettingsRow
                    icon={<FaTrash className="text-red-500" />}
                    label="Deactivate my account"
                    textColor="text-red-500"
                    href="/contact"
                />
            </div>
        </div>
    );
}

import Link from "next/link";

function SettingsRow({ icon, label, toggle, textColor, href }) {
    const content = (
        <div className="flex items-center justify-between px-4 py-4 hover:bg-gray-50 cursor-pointer">
            <div className="flex items-center gap-3">
                <span className="text-gray-500 text-lg">
                    {icon}
                </span>
                <span className={`text-sm font-medium ${textColor || "text-gray-800"}`}>
                    {label}
                </span>
            </div>
            {toggle ? (
                <ToggleSwitch />
            ) : (
                <FaChevronRight className="text-gray-400" />
            )}
        </div>
    );

    return href ? (
        <Link href={href} className="block">
            {content}
        </Link>
    ) : content;
}


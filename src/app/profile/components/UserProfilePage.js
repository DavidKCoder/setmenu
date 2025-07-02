"use client";

import ExpectedEvents from "@/app/profile/components/ExpectedEvents";
import UserInfoCard from "@/app/profile/components/UserInfoCard";
import Header from "@/app/profile/components/Header";
import SettingsList from "@/app/profile/components/SettingsList";

export default function UserProfilePage() {

    return (
        <div className="min-h-screen bg-gray-50 px-4 py-6">
            <Header />

            <UserInfoCard />

            <ExpectedEvents />

            <SettingsList />
        </div>
    );
}



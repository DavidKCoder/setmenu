"use client";

import { Suspense } from "react";

export default function LoginPage() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
            <LoginContent />
        </Suspense>
    );
}


import { useSearchParams } from "next/navigation";
import AuthForm from "./components/AuthForm";

function LoginContent() {
    const searchParams = useSearchParams();
    const redirect = searchParams.get("redirect") || ("/");

    return <AuthForm redirect={redirect} />;
}
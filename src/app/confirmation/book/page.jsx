"use client";

import { Suspense } from "react";
import ConfirmationBookContent from "./ConfirmationBookContent";

export const dynamic = "force-dynamic";

export default function Page() {
    return (
        <Suspense fallback={<div className="text-gray-800 text-center p-8">Loading reservation form...</div>}>
            <ConfirmationBookContent />
        </Suspense>
    );
}

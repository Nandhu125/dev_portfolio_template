"use client";

import { useEffect } from "react";
import ArrowIcon from "@/components/ArrowIcon";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Something went wrong!
            </h2>
            <p className="text-neutral-500 max-w-md mb-10">
                We apologize for the inconvenience. An unexpected error has occurred.
            </p>
            <button
                onClick={reset}
                className="px-8 py-4 bg-primary text-white font-bold rounded-full hover:brightness-110 transition-all flex items-center gap-2"
            >
                Try again
                <ArrowIcon className="text-xl" />
            </button>
        </div>
    );
}

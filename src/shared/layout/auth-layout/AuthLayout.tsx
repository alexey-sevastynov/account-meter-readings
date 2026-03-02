"use client";

import { ReactNode } from "react";

interface AuthLayoutProps {
    children: ReactNode;
}

export default function MrAuthLayout({ children }: AuthLayoutProps) {
    return (
        <div className="relative flex min-h-screen items-center justify-center px-4">
            <video
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster="/auth-background.png"
            >
                <source src="/auth-background.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="bg-background text-foreground relative max-h-[calc(100vh-40px)] w-full max-w-md overflow-y-auto rounded-3xl border p-10 text-center shadow-2xl">
                {children}
            </div>
        </div>
    );
}

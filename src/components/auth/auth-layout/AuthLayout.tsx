"use client";

import { ReactNode } from "react";

interface AuthLayoutProps {
    children: ReactNode;
}

export default function MrAuthLayout({ children }: AuthLayoutProps) {
    return (
        <div className="relative flex items-center justify-center min-h-screen px-4">
            <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster="/auth-background.png"
            >
                <source src="/auth-background.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div
                className="relative max-w-md w-full bg-white backdrop-blur-2xl shadow-2xl rounded-3xl p-10 
            text-center max-h-[calc(100vh-40px)] overflow-y-auto border border-white/20"
            >
                {children}
            </div>
        </div>
    );
}

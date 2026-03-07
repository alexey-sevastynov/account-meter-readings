"use client";

import { Toaster as SonnerToaster } from "sonner";

export function Toaster() {
    return (
        <SonnerToaster
            position="top-right"
            richColors
            closeButton
            toastOptions={{
                className: "rounded-xl border border-border bg-background text-foreground shadow-lg",
            }}
        />
    );
}

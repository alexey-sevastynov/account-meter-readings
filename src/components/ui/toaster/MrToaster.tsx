"use client";

import { Toaster } from "sonner";

export function MrToaster() {
    return (
        <Toaster
            position="top-right"
            richColors
            closeButton
            toastOptions={{
                className: "rounded-xl border border-border bg-background text-foreground shadow-lg",
            }}
        />
    );
}

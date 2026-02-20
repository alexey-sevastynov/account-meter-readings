"use client";

import { store } from "@/app/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "@/components/providers/theme-provider/ThemeProvider";
import { MrToaster } from "@/components/ui/toaster/MrToaster";

interface MrProvidersProps {
    children: React.ReactNode;
}

export function MrProviders({ children }: MrProvidersProps) {
    return (
        <ThemeProvider>
            <Provider store={store}>{children}</Provider>
            <MrToaster />
        </ThemeProvider>
    );
}

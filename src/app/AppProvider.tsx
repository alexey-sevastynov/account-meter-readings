"use client";

import { store } from "@/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "@/shared/context/theme-provider/ThemeProvider";
import { Toaster } from "@/shared/ui/toaster/Toaster";

interface AppProviderProps {
    children: React.ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
    return (
        <ThemeProvider>
            <Provider store={store}>{children}</Provider>
            <Toaster />
        </ThemeProvider>
    );
}

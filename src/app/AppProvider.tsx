"use client";

import { store } from "@/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "@/shared/context/theme-provider/ThemeProvider";
import { Toaster } from "@/shared/ui/toaster/Toaster";
import { ThemeMode, themeModes } from "@/shared/context/theme-provider/theme-mode";

interface AppProviderProps {
    children: React.ReactNode;
    initialTheme?: ThemeMode;
}

export function AppProvider({ children, initialTheme = themeModes.system }: AppProviderProps) {
    return (
        <ThemeProvider defaultTheme={initialTheme}>
            <Provider store={store}>{children}</Provider>
            <Toaster />
        </ThemeProvider>
    );
}

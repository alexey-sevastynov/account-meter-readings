"use client";

import { store } from "@/store";
import { Provider } from "react-redux";
import { ThemeProvider } from "@/shared/context/theme-provider/ThemeProvider";
import { MrToaster } from "@/shared/ui/toaster/MrToaster";

interface MrAppProviderProps {
    children: React.ReactNode;
}

export function MrAppProvider({ children }: MrAppProviderProps) {
    return (
        <ThemeProvider>
            <Provider store={store}>{children}</Provider>
            <MrToaster />
        </ThemeProvider>
    );
}

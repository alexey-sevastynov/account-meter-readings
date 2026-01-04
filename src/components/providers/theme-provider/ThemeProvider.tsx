"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { localStorageKeys } from "@/enums/local-storage-key";
import { ThemeMode, themeModes } from "@/enums/theme-mode";
import { VoidFunc } from "@/types/getter-setter-functions";
import { getLocalStorageItem, setLocalStorageItem } from "@/utils/local-storage";
import {
    applySystemThemeIfNeeded,
    applyThemeToDocument,
} from "@/components/providers/theme-provider/theme-provider.funcs";
import { getDarkSchemeMedia } from "@/components/providers/theme-provider/color-scheme-media";

interface ThemeContextType {
    theme: ThemeMode;
    setTheme: VoidFunc<ThemeMode>;
}

interface ThemeProviderProps {
    children: ReactNode;
    defaultTheme?: ThemeMode;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children, defaultTheme = themeModes.system }: ThemeProviderProps) {
    const [theme, setThemeState] = useState<ThemeMode>(defaultTheme);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const storedTheme = getLocalStorageItem<ThemeMode>(localStorageKeys.theme);
        const initialTheme = storedTheme || defaultTheme;
        const darkMedia = getDarkSchemeMedia();

        setThemeState(initialTheme);
        applyThemeToDocument(initialTheme);

        if (!darkMedia) return;

        const handleSystemThemeChange = () => applySystemThemeIfNeeded(theme);
        darkMedia.addEventListener("change", handleSystemThemeChange);

        setMounted(true);

        return () => darkMedia.removeEventListener("change", handleSystemThemeChange);
    }, []);

    const setTheme = (newTheme: ThemeMode) => {
        setThemeState(newTheme);
        setLocalStorageItem(localStorageKeys.theme, newTheme);
        applyThemeToDocument(newTheme);
    };

    if (!mounted) return null;

    return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
    const context = useContext(ThemeContext);

    if (!context) throw new Error("useTheme must be used within ThemeProvider");

    return context;
}

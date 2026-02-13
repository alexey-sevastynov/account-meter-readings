"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { localStorageKeys } from "@/enums/local-storage-key";
import { ThemeMode, themeModes } from "@/enums/theme-mode";
import { VoidFunc } from "@/types/getter-setter-functions";
import { setLocalStorageItem } from "@/utils/local-storage";
import {
    getInitialTheme,
    applyThemeToDocument,
} from "@/components/providers/theme-provider/theme-provider.funcs";

interface ThemeContextType {
    currentTheme: ThemeMode;
    setTheme: VoidFunc<ThemeMode>;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({
    children,
    defaultTheme = themeModes.system,
}: {
    children: ReactNode;
    defaultTheme?: ThemeMode;
}) {
    const [currentTheme, setCurrentTheme] = useState<ThemeMode>(() => getInitialTheme(defaultTheme));

    useEffect(() => {
        applyThemeToDocument(currentTheme);
    }, [currentTheme]);

    const setTheme = (newTheme: ThemeMode) => {
        setCurrentTheme(newTheme);
        setLocalStorageItem(localStorageKeys.theme, newTheme);
    };

    return <ThemeContext.Provider value={{ currentTheme, setTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
    const themeContext = useContext(ThemeContext);

    if (!themeContext) throw new Error("useTheme must be used within ThemeProvider");

    return themeContext;
}

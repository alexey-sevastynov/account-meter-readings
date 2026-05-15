"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { cookieKeys } from "@/shared/utils/cookie/cookie-key";
import { localStorageKeys } from "@/shared/enums/local-storage-key";
import { ThemeMode, themeModes } from "@/shared/context/theme-provider/theme-mode";
import { VoidFunc } from "@/shared/types/getter-setter-functions";
import { setLocalStorageItem } from "@/shared/utils/local-storage";
import { setCookie } from "@/shared/utils/cookie/cookie-client";
import { applyThemeToDocument } from "@/shared/context/theme-provider/theme-provider.funcs";

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
    const [currentTheme, setCurrentTheme] = useState<ThemeMode>(defaultTheme);

    useEffect(() => {
        applyThemeToDocument(currentTheme);
        setLocalStorageItem(localStorageKeys.theme, currentTheme);
        setCookie(cookieKeys.theme, currentTheme);
    }, [currentTheme]);

    const setTheme = (newTheme: ThemeMode) => {
        setCurrentTheme(newTheme);
    };

    return <ThemeContext.Provider value={{ currentTheme, setTheme }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
    const themeContext = useContext(ThemeContext);

    if (!themeContext) throw new Error("useTheme must be used within ThemeProvider");

    return themeContext;
}

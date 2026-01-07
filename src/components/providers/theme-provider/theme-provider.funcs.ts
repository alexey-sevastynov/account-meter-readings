import { ThemeMode, themeModes } from "@/enums/theme-mode";
import { getDarkSchemeMedia } from "@/components/providers/theme-provider/color-scheme-media";
import { isBrowser } from "@/lib/environments";
import { getLocalStorageItem } from "@/utils/local-storage";
import { localStorageKeys } from "@/enums/local-storage-key";

export function isSystemTheme(theme: ThemeMode) {
    return theme === themeModes.system;
}

export function applyThemeToDocument(theme: ThemeMode) {
    if (!isBrowser()) return;

    const resolved = getResolvedTheme(theme);
    const root = document.documentElement;

    root.dataset.theme = resolved;
    root.classList.remove(themeModes.light, themeModes.dark);
    root.classList.add(resolved);
}

export function getInitialTheme(defaultTheme: ThemeMode): ThemeMode {
    if (!isBrowser()) return defaultTheme;

    const storedTheme = getLocalStorageItem<ThemeMode>(localStorageKeys.theme);

    return storedTheme ?? defaultTheme;
}

export function getResolvedTheme(theme: ThemeMode) {
    if (!isSystemTheme(theme)) return theme;

    if (!isBrowser()) return themeModes.light;

    const isDarkThemeMode = getDarkSchemeMedia();

    return isDarkThemeMode ? themeModes.dark : themeModes.light;
}

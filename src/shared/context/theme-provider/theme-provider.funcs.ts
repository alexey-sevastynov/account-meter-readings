import { ThemeMode, themeModes } from "@/shared/context/theme-provider/theme-mode";
import { getDarkSchemeMedia } from "@/shared/context/theme-provider/color-scheme-media";
import { isBrowser } from "@/shared/lib/environments";

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

export function getThemeFromCookie(themeCookie?: string): ThemeMode {
    if (
        themeCookie === themeModes.light ||
        themeCookie === themeModes.dark ||
        themeCookie === themeModes.system
    ) {
        return themeCookie;
    }

    return themeModes.system;
}

export function getResolvedTheme(theme: ThemeMode) {
    if (!isSystemTheme(theme)) return theme;

    if (!isBrowser()) return themeModes.light;

    const isDarkThemeMode = getDarkSchemeMedia();

    return isDarkThemeMode ? themeModes.dark : themeModes.light;
}

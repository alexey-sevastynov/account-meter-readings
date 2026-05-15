import { ThemeMode, themeModes } from "@/shared/context/theme-provider/theme-mode";
import { getDarkSchemeMedia } from "@/shared/context/theme-provider/color-scheme-media";
import { isBrowser } from "@/shared/lib/environments";
import { isSystemTheme } from "@/shared/context/theme-provider/theme-mode-checks";

export function applyThemeToDocument(theme: ThemeMode) {
    if (!isBrowser()) return;

    const resolved = getResolvedTheme(theme);
    const root = document.documentElement;

    root.dataset.theme = resolved;
    root.classList.remove(themeModes.light, themeModes.dark);
    root.classList.add(resolved);
}

function getResolvedTheme(theme: ThemeMode) {
    if (!isSystemTheme(theme)) return theme;

    if (!isBrowser()) return themeModes.light;

    const isDarkThemeMode = getDarkSchemeMedia();

    return isDarkThemeMode ? themeModes.dark : themeModes.light;
}

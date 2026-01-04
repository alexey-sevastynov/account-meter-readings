import { ThemeMode, themeModes } from "@/enums/theme-mode";
import { getDarkSchemeMedia } from "@/components/providers/theme-provider/color-scheme-media";

export function isSystemTheme(theme: ThemeMode) {
    return theme === themeModes.system;
}

export function isDarkTheme(theme: ThemeMode) {
    return theme === themeModes.dark;
}

export function isLightTheme(theme: ThemeMode) {
    return theme === themeModes.light;
}

export function applyThemeToDocument(theme: ThemeMode) {
    const darkSchemeMedia = getDarkSchemeMedia();
    const isActiveDarkMode = isDarkTheme(theme) ?? (isSystemTheme(theme) && darkSchemeMedia?.matches);

    document.documentElement.classList.toggle(themeModes.dark, isActiveDarkMode);
}

export function applySystemThemeIfNeeded(theme: ThemeMode) {
    if (isSystemTheme(theme)) {
        applyThemeToDocument(themeModes.system);
    }
}

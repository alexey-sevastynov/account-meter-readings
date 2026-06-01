import { themeModes } from "@/shared/context/theme-provider/theme-mode";
import { isBrowser } from "@/shared/lib/environments";

export function isSystemTheme(theme: string) {
    return theme === themeModes.system;
}

export function isDarkTheme(theme: string) {
    return theme === themeModes.dark;
}

export function isLightTheme(theme: string) {
    return theme === themeModes.light;
}

export function isSystemDark() {
    if (!isBrowser()) return false;

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

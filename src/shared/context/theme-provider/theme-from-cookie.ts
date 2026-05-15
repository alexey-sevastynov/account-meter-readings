import { ThemeMode, themeModes } from "@/shared/context/theme-provider/theme-mode";
import { isDarkTheme, isLightTheme, isSystemTheme } from "@/shared/context/theme-provider/theme-mode-checks";

export function getThemeModeFromCookie(themeCookie?: string) {
    if (isValidTheme(themeCookie)) return themeCookie;

    return themeModes.system;
}

function isValidTheme(value?: string): value is ThemeMode {
    if (!value) return false;

    return isLightTheme(value) || isDarkTheme(value) || isSystemTheme(value);
}

import { themeModes } from "@/shared/context/theme-provider/theme-mode";

export function isSystemTheme(theme: string) {
    return theme === themeModes.system;
}

export function isDarkTheme(theme: string) {
    return theme === themeModes.dark;
}

export function isLightTheme(theme: string) {
    return theme === themeModes.light;
}

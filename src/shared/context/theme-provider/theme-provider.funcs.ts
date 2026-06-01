import { ThemeMode, themeModes } from "@/shared/context/theme-provider/theme-mode";
import { isBrowser } from "@/shared/lib/environments";
import { isSystemTheme, isSystemDark } from "@/shared/context/theme-provider/theme-mode-checks";

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

    return isSystemDark() ? themeModes.dark : themeModes.light;
}

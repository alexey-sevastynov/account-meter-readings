"use client";

import { useTheme } from "@/shared/context/theme-provider/ThemeProvider";
import { themeModes } from "@/shared/context/theme-provider/theme-mode";
import { Switch } from "@/shared/ui/switch/Switch";
import { iconNames } from "@/shared/ui/icon/icon-name";

export function AuthThemeModeSwitcher() {
    const { currentTheme, setTheme } = useTheme();

    return (
        <div className="absolute top-6 right-6">
            <Switch
                checked={currentTheme === themeModes.dark}
                onCheckedChange={(checked) => setTheme(checked ? themeModes.dark : themeModes.light)}
                iconOff={iconNames.sun}
                iconOn={iconNames.moon}
            />
        </div>
    );
}

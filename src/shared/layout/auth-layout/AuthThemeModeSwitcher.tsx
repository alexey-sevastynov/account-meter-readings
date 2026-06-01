"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@/shared/context/theme-provider/ThemeProvider";
import { themeModes } from "@/shared/context/theme-provider/theme-mode";
import { isDarkTheme, isSystemDark, isSystemTheme } from "@/shared/context/theme-provider/theme-mode-checks";
import { Switch } from "@/shared/ui/switch/Switch";
import { iconNames } from "@/shared/ui/icon/icon-name";

export function AuthThemeModeSwitcher() {
    const { currentTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // TODO: temporary workaround — avoid setState inside effect warning; refactor initialization logic
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    return (
        <div className="absolute top-6 right-6">
            <Switch
                checked={
                    isDarkTheme(currentTheme) || (isSystemTheme(currentTheme) && mounted && isSystemDark())
                }
                onCheckedChange={(checked) => setTheme(checked ? themeModes.dark : themeModes.light)}
                iconOff={iconNames.sun}
                iconOn={iconNames.moon}
            />
        </div>
    );
}

"use client";

import { useTheme } from "@/shared/context/theme-provider/ThemeProvider";
import { ThemeMode, themeModes } from "@/shared/context/theme-provider/theme-mode";
import { cn } from "@/shared/lib/cn";
import { Icon } from "@/shared/ui/icon/Icon";
import { iconColors } from "@/shared/ui/icon/icon-color";
import { IconName, iconNames } from "@/shared/ui/icon/icon-name";
import { iconSizes } from "@/shared/ui/icon/icon-size";

interface ThemeOption {
    label: string;
    value: ThemeMode;
    iconName: IconName;
}

const themeOptions: ThemeOption[] = [
    { label: "Світло", value: themeModes.light, iconName: iconNames.sun },
    { label: "Темно", value: themeModes.dark, iconName: iconNames.moon },
    { label: "Система", value: themeModes.system, iconName: iconNames.monitor },
];

export function ToolbarThemeModeSwitcher() {
    const theme = useTheme();
    const currentTheme = theme.currentTheme;

    return (
        <div className="border-border mb-1 border-b px-2 py-2">
            <div className="mb-2 px-1">
                <p className="text-foreground text-xs font-medium">Зовнішний вигляд</p>
                <p className="text-muted-foreground text-xs">Виберіть, як виглядає інтерфейс</p>
            </div>

            <div className="bg-muted/40 grid grid-cols-3 gap-1 rounded-xl p-1">
                {themeOptions.map((themeOption) => {
                    const isActive = currentTheme === themeOption.value;

                    return (
                        <button
                            key={themeOption.value}
                            type="button"
                            onClick={() => theme.setTheme(themeOption.value)}
                            className={cn(
                                "flex min-h-16 flex-col items-center justify-center gap-1 rounded-lg",
                                "px-2 py-2 text-xs font-medium transition-all",
                                "hover:bg-background/80 hover:text-foreground",
                                isActive
                                    ? "bg-background text-foreground shadow-sm"
                                    : "text-muted-foreground",
                            )}
                        >
                            <div
                                className={cn(
                                    "flex h-8 w-8 items-center justify-center rounded-full transition-colors",
                                    isActive ? "bg-primary/10" : "bg-background/70",
                                )}
                            >
                                <Icon
                                    name={themeOption.iconName}
                                    size={iconSizes.small}
                                    color={isActive ? iconColors.primary : iconColors.muted}
                                />
                            </div>

                            <span>{themeOption.label}</span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

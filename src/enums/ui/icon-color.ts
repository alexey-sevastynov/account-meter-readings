export const iconColors = {
    primary: "text-primary",
    secondary: "text-secondary-foreground",
    muted: "text-muted-foreground",
    destructive: "text-destructive",
    accent: "text-accent-foreground",
    sidebar: "text-sidebar-foreground",
    primaryForeground: "text-primary-foreground",
} as const;

export type IconColor = (typeof iconColors)[keyof typeof iconColors];

export const themeModes = {
    dark: "dark",
    light: "light",
    system: "system",
} as const;

export type ThemeMode = (typeof themeModes)[keyof typeof themeModes];

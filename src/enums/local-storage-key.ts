export const localStorageKeys = {
    theme: "theme",
} as const;

export type LocalStorageKey = (typeof localStorageKeys)[keyof typeof localStorageKeys];

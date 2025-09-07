export const inputVariantKeys = {
    primary: "primary",
    secondary: "secondary",
    error: "error",
} as const;

export type InputVariantKey = (typeof inputVariantKeys)[keyof typeof inputVariantKeys];

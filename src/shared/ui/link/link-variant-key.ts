export const linkVariantKeys = {
    primary: "primary",
    secondary: "secondary",
    underline: "underline",
} as const;

export type LinkVariantKey = (typeof linkVariantKeys)[keyof typeof linkVariantKeys];

export const buttonVariantKeys = {
    primary: "primary",
    secondary: "secondary",
    outline: "outline",
    danger: "danger",
    link: "link",
} as const;

export type ButtonVariantKey = (typeof buttonVariantKeys)[keyof typeof buttonVariantKeys];

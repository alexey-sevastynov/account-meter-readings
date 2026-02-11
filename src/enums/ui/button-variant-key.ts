export const buttonVariantKeys = {
    primary: "primary",
    secondary: "secondary",
    outline: "outline",
    danger: "danger",
    link: "link",
    icon: "icon",
} as const;

export type ButtonVariantKey = (typeof buttonVariantKeys)[keyof typeof buttonVariantKeys];

export const textSizes = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
    xl: "text-xl",
    xxl: "text-2xl",
} as const;

export type TextSize = (typeof textSizes)[keyof typeof textSizes];

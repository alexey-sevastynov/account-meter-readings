export const colorNames = {
    white: "text-white",
    black: "text-black",
    gray: "text-gray-500",
} as const;

export type ColorName = (typeof colorNames)[keyof typeof colorNames];

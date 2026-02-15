export const colorNames = {
    white: "text-white",
    black: "text-black",
    gray: "text-gray-500",
    stone: "text-stone-900",
    lightStone: "text-stone-200",
} as const;

export type ColorName = (typeof colorNames)[keyof typeof colorNames];

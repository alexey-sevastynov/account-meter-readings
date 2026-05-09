export const textWeights = {
    normal: "font-normal",
    medium: "font-medium",
    bold: "font-bold",
} as const;

export type TextWeight = (typeof textWeights)[keyof typeof textWeights];

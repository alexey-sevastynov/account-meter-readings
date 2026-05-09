export const textPositions = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
} as const;

export type TextPosition = (typeof textPositions)[keyof typeof textPositions];

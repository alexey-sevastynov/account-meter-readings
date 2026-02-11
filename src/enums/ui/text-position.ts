export const textPositions = {
    left: "left",
    center: "center",
    right: "right",
} as const;

export type TextPosition = (typeof textPositions)[keyof typeof textPositions];

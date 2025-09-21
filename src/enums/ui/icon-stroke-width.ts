export const iconStrokeWidths = {
    thin: 1,
    normal: 1.5,
    thick: 2,
} as const;

export type IconStrokeWidth = (typeof iconStrokeWidths)[keyof typeof iconStrokeWidths];

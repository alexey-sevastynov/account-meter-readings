export const iconSizes = {
    tiny: 8,
    small: 12,
    medium: 18,
    large: 24,
} as const;

export type IconSize = (typeof iconSizes)[keyof typeof iconSizes];

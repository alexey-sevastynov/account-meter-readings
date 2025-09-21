export const iconNames = {
    eye: "eye",
    eyeOff: "eyeOff",
} as const;

export type IconName = (typeof iconNames)[keyof typeof iconNames];

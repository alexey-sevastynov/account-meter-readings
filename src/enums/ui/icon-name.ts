export const iconNames = {
    eye: "eye",
    eyeOff: "eyeOff",
    chevronDown: "chevronDown",
    chevronsUpDown: "chevronsUpDown",
    chevronUp: "chevronUp",
    gripVertical: "gripVertical",
    chevronsLeft: "chevronsLeft",
    chevronsRight: "chevronsRight",
    download: "download",
    close: "close",
    filter: "filter",
    settings: "settings",
} as const;

export type IconName = (typeof iconNames)[keyof typeof iconNames];

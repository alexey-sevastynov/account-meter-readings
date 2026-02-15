export const modalWindowSizes = {
    sm: "sm",
    md: "md",
    lg: "lg",
} as const;

export type ModalWindowSize = (typeof modalWindowSizes)[keyof typeof modalWindowSizes];

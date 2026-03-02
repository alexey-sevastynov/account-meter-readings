export const formModes = {
    create: "create",
    edit: "edit",
} as const;

export type FormMode = (typeof formModes)[keyof typeof formModes];

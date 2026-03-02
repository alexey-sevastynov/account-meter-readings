export const verifyStatusKeys = {
    pending: "pending",
    success: "success",
    error: "error",
} as const;

export type VerifyStatusKey = (typeof verifyStatusKeys)[keyof typeof verifyStatusKeys];

export const apiEndpointNames = {
    tasks: "/tasks",
    signIn: "/auth/signin",
    signUp: "/auth/signup",
    forgotPasswordConfirm: "/password-reset/confirm",
    forgotPasswordRequest: "/password-reset/request",
    mailVerification: "/mail-verification/confirm",
} as const;

export type ApiEndpointName = (typeof apiEndpointNames)[keyof typeof apiEndpointNames];

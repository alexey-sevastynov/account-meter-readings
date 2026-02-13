export const apiEndpointNames = {
    tasks: "/tasks",
    signIn: "/auth/signin",
    signUp: "/auth/signup",
    signInAsGuest: "/auth/guest",
    forgotPasswordConfirm: "/password-reset/confirm",
    forgotPasswordRequest: "/password-reset/request",
    mailVerification: "/mail-verification/confirm",
    employee: "/coffee-shop/employees",
} as const;

export type ApiEndpointName = (typeof apiEndpointNames)[keyof typeof apiEndpointNames];

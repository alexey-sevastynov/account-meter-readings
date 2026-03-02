export const apiEndpointNames = {
    tasks: "/tasks",
    signIn: "/auth/signin",
    signUp: "/auth/signup",
    signInAsGuest: "/auth/guest",
    forgotPasswordConfirm: "/password-reset/confirm",
    forgotPasswordRequest: "/password-reset/request",
    mailVerification: "/mail-verification/confirm",
    employee: "/coffee-shop/employees",
    dailyReport: "/coffee-shop/daily-reports",
} as const;

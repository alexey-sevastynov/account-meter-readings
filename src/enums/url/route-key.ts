export const routeKeys = {
    home: "",
    signIn: "sign-in",
    forgotPassword: "auth/forgot-password",
} as const;

export type RouteKey = (typeof routeKeys)[keyof typeof routeKeys];

export const routeKeys = {
    home: "",
    signIn: "sign-in",
    forgotPassword: "auth/forgot-password",
    coffeeShop: "coffee-shop",
} as const;

export type RouteKey = (typeof routeKeys)[keyof typeof routeKeys];

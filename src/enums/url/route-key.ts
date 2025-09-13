export const routeKeys = {
    home: "",
    signIn: "sign-in",
} as const;

export type RouteKey = (typeof routeKeys)[keyof typeof routeKeys];

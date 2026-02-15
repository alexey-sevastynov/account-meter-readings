export const routeKeys = {
    home: "",
    signIn: "/sign-in",
    forgotPassword: "/auth/forgot-password",
    coffeeShop: "/coffee-shop",
    employees: "/coffee-shop/employees",
    expenses: "/coffee-shop/expenses",
} as const;

export type RouteKey = (typeof routeKeys)[keyof typeof routeKeys];

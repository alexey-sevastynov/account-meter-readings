export const routeKeys = {
    home: "",
    signIn: "/sign-in",
    forgotPassword: "/auth/forgot-password",
    coffeeShop: "/coffee-shop",
    employees: "/coffee-shop/employees",
    expenses: "/coffee-shop/expenses",
    dailyReports: "/coffee-shop/daily-reports",
} as const;

export type RouteKey = (typeof routeKeys)[keyof typeof routeKeys];

export const cookieKeys = {
    token: "token",
    userName: "userName",
    isVerified: "isVerified",
    userRole: "userRole",
    theme: "theme",
} as const;

export type CookieKey = (typeof cookieKeys)[keyof typeof cookieKeys];

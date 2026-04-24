export const cookieKeys = {
    token: "token",
    userName: "userName",
    isVerified: "isVerified",
    userRole: "userRole",
} as const;

export type CookieKey = (typeof cookieKeys)[keyof typeof cookieKeys];

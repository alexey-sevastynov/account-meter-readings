export const cookieKeys = {
    token: "token",
    userName: "userName",
    isVerified: "isVerified",
} as const;

export type CookieKey = (typeof cookieKeys)[keyof typeof cookieKeys];

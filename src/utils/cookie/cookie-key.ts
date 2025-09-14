export const cookieKeys = {
    token: "token",
} as const;

export type CookieKey = (typeof cookieKeys)[keyof typeof cookieKeys];

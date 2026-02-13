import { cookieKeys } from "@/utils/cookie/cookie-key";
import { removeCookie, setCookie } from "@/utils/cookie/cookie-client";

const authCookieKeys = {
    token: cookieKeys.token,
    userName: cookieKeys.userName,
    isVerified: cookieKeys.isVerified,
} as const;

export function setAuthCookies(token: string, userName: string, isVerified: boolean) {
    setCookie(authCookieKeys.token, token);
    setCookie(authCookieKeys.userName, userName);
    setCookie(authCookieKeys.isVerified, String(isVerified));
}

export function clearAuthCookies() {
    removeCookie(authCookieKeys.token);
    removeCookie(authCookieKeys.userName);
    removeCookie(authCookieKeys.isVerified);
}

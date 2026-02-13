import nookies from "nookies";
import { CookieKey } from "@/utils/cookie/cookie-key";
import { CookieOptions } from "@/utils/cookie/cookie-types";
import { timing } from "@/constants/timing";

const cookieDefaultOptions: CookieOptions = {
    path: "/",
    maxAge: timing.oneDayInSeconds,
    httpOnly: false,
};

export function setCookie(key: CookieKey, value: string, options?: CookieOptions) {
    nookies.set(null, key, value, { ...cookieDefaultOptions, ...options });
}

export function getCookie(key: CookieKey) {
    const cookies = nookies.get(null);

    return cookies[key];
}

export function removeCookie(key: CookieKey, options?: CookieOptions) {
    nookies.destroy(null, key, { ...cookieDefaultOptions, ...options });
}

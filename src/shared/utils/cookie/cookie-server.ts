"use server";

import { cookies } from "next/headers";
import { CookieKey } from "@/shared/utils/cookie/cookie-key";

export async function getServerCookie(key: CookieKey) {
    return getCookieValueByKey(key);
}

async function getCookieStore() {
    return cookies();
}

async function getCookieValueByKey(key: CookieKey) {
    const cookieStore = await getCookieStore();

    return cookieStore.get(key)?.value;
}

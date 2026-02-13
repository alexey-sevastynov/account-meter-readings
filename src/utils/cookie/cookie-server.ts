"use server";

import { cookies } from "next/headers";
import { CookieKey } from "@/utils/cookie/cookie-key";

export async function getServerCookie(key: CookieKey) {
    const cookieStore = cookies();
    const cookieList = (await cookieStore).getAll() ?? [];
    const cookie = cookieList.find((c) => c.name === key);

    return cookie?.value;
}

"use server";

import { MrHome } from "@/components/page/home/Home";
import { cookieKeys } from "@/utils/cookie/cookie-key";
import { getServerCookie } from "@/utils/cookie/cookie-server";

export default async function HomePage() {
    const userName = await getServerCookie(cookieKeys.userName);

    return <MrHome userName={userName} />;
}

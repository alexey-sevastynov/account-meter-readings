"use server";

import { MrHome } from "@/app/(app)/Home";
import { cookieKeys } from "@/shared/utils/cookie/cookie-key";
import { getServerCookie } from "@/shared/utils/cookie/cookie-server";

export default async function HomePage() {
    const userName = await getServerCookie(cookieKeys.userName);

    return <MrHome userName={userName} />;
}

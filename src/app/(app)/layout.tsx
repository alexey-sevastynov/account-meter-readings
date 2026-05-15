"use server";

import { AppLayout } from "@/shared/layout/app-layout/AppLayout";
import { cookieKeys } from "@/shared/utils/cookie/cookie-key";
import { getServerCookie } from "@/shared/utils/cookie/cookie-server";

interface AppLayoutProps {
    children: React.ReactNode;
}

export default async function Layout({ children }: AppLayoutProps) {
    const userName = await getServerCookie(cookieKeys.userName);
    const userRole = await getServerCookie(cookieKeys.userRole);

    return (
        <AppLayout userName={userName} userRole={userRole}>
            {children}
        </AppLayout>
    );
}

"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Sidebar } from "@/shared/layout/sidebar/Sidebar";
import { Toolbar } from "@/shared/layout/toolbar/Toolbar";
import { routeKeys } from "@/shared/constants/route-keys";
import { useAppSelector } from "@/shared/lib/redux/hooks/use-app-selector";
import { redirectTo } from "@/shared/utils/navigation";

interface AppLayoutProps {
    children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
    const router = useRouter();
    const token = useAppSelector((state) => state.auth.token);

    useEffect(() => {
        if (token) {
            redirectTo(router, routeKeys.signIn);
        }
    }, [token, router]);

    return (
        <div className="bg-background flex min-h-screen w-full">
            <Sidebar sidebarNavigationItems={[]} />

            <div className="flex flex-1 flex-col">
                <Toolbar />
                <main className="flex-1 p-4">{children}</main>
            </div>
        </div>
    );
}

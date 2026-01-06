"use client";

import { MrSidebar } from "@/components/app-shell/sidebar/Sidebar";
import { MrToolbar } from "@/components/app-shell/toolbar/Toolbar";
import { useAppSelector } from "@/hooks/use-app-selector";
import { redirectToSignIn } from "@/utils/navigation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface AppLayoutProps {
    children: React.ReactNode;
}

export function MrAppLayout({ children }: AppLayoutProps) {
    const router = useRouter();
    const token = useAppSelector((state) => state.auth.token);

    useEffect(() => {
        if (token) {
            redirectToSignIn(router);
        }
    }, [token, router]);

    return (
        <div className="flex h-screen flex-col">
            <MrToolbar />
            <div className="flex flex-1 overflow-hidden">
                <MrSidebar />
                <main className="relative flex-1 overflow-auto rounded-tl-2xl shadow-inner">{children}</main>
            </div>
        </div>
    );
}

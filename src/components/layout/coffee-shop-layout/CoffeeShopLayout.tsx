"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { MrSidebar } from "@/components/app-shell/sidebar/Sidebar";
import { MrToolbar } from "@/components/app-shell/toolbar/Toolbar";
import { routeKeys } from "@/enums/url/route-key";
import { useAppSelector } from "@/hooks/use-app-selector";
import { redirectTo } from "@/utils/navigation";
import { iconNames } from "@/enums/ui/icon-name";

interface MrCoffeeShopLayoutProps {
    children: React.ReactNode;
}

export function MrCoffeeShopLayout({ children }: MrCoffeeShopLayoutProps) {
    const router = useRouter();
    const token = useAppSelector((state) => state.auth.token);

    useEffect(() => {
        if (token) {
            redirectTo(router, routeKeys.signIn);
        }
    }, [token, router]);

    return (
        <div className="flex h-screen w-full">
            <MrSidebar
                sidebarNavigationItems={[
                    { href: routeKeys.coffeeShop, iconName: iconNames.dashboard, label: "Кавʼярня" },
                    { href: routeKeys.employees, iconName: iconNames.users, label: "Працівники" },
                    { href: routeKeys.home, iconName: iconNames.receipt, label: "Витрати" },
                ]}
                logoIconName={iconNames.coffee}
            />
            <div className="flex-1 overflow-y-auto">
                <MrToolbar />
                <main className="p-4">{children}</main>
            </div>
        </div>
    );
}

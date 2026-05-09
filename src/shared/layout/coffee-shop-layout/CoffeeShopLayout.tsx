"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Sidebar } from "@/shared/layout/sidebar/Sidebar";
import { Toolbar } from "@/shared/layout/toolbar/Toolbar";
import { routeKeys } from "@/shared/constants/route-keys";
import { useAppSelector } from "@/shared/lib/redux/hooks/use-app-selector";
import { redirectTo } from "@/shared/utils/navigation";
import { iconNames } from "@/shared/ui/icon/icon-name";

interface CoffeeShopLayoutProps {
    children: React.ReactNode;
}

export function CoffeeShopLayout({ children }: CoffeeShopLayoutProps) {
    const router = useRouter();
    const token = useAppSelector((state) => state.auth.token);

    useEffect(() => {
        if (token) {
            redirectTo(router, routeKeys.signIn);
        }
    }, [token, router]);

    return (
        <div className="bg-background flex h-screen w-full overflow-hidden">
            <Sidebar
                sidebarNavigationItems={[
                    { href: routeKeys.coffeeShop, iconName: iconNames.dashboard, label: "Кавʼярня" },
                    { href: routeKeys.employees, iconName: iconNames.users, label: "Працівники" },
                    { href: routeKeys.dailyReports, iconName: iconNames.receipt, label: "Витрати" },
                    {
                        href: routeKeys.inventoryAudits,
                        iconName: iconNames.clipboardCheck,
                        label: "Аудит інвентаризації",
                    },
                    {
                        href: routeKeys.expenseReport,
                        iconName: iconNames.wallet,
                        label: "Операційні витрати",
                    },
                ]}
                logoIconName={iconNames.coffee}
            />
            <div className="flex-1 overflow-auto">
                <Toolbar className="shrink-0" />
                <main className="p-4">{children}</main>
            </div>
        </div>
    );
}

"use client";

import { Sidebar } from "@/shared/layout/sidebar/Sidebar";
import { Toolbar } from "@/shared/layout/toolbar/Toolbar";
import { routeKeys } from "@/shared/constants/route-keys";
import { iconNames } from "@/shared/ui/icon/icon-name";
import { isAdmin } from "@/shared/utils/permissions";

interface AppLayoutProps {
    children: React.ReactNode;
    userName: string;
    userRole: string;
}

export function AppLayout({ children, userName, userRole }: AppLayoutProps) {
    return (
        <div className="bg-background flex min-h-screen w-full">
            <Sidebar
                sidebarNavigationItems={getSidebarNavigationItems(userRole)}
                logoIconName={iconNames.hexagon}
            />
            <div className="flex flex-1 flex-col">
                <Toolbar userName={userName} userRole={userRole} />
                <main className="flex-1 p-4">{children}</main>
            </div>
        </div>
    );
}

function getSidebarNavigationItems(userRole: string) {
    if (isAdmin(userRole)) {
        return [
            {
                href: routeKeys.coffeeShop,
                iconName: iconNames.vault,
                label: "Кавʼярня Кофеоль",
            },
        ];
    }

    return [];
}

"use client";

import { usePathname } from "next/navigation";
import { MrIcon } from "@/shared/ui/icon/Icon";
import { MrLink } from "@/shared/ui/link/Link";
import { cn } from "@/shared/lib/cn";
import { iconColors } from "@/shared/ui/icon/icon-color";
import { iconSizes } from "@/shared/ui/icon/icon-size";
import { iconStrokeWidths } from "@/shared/ui/icon/icon-stroke-width";
import { IconName } from "@/shared/ui/icon/icon-name";

export interface SidebarNavigationItem {
    href: string;
    iconName: IconName;
    label: string;
}

interface MrSidebarNavigationItemProps {
    sidebarNavigationItem: SidebarNavigationItem;
}

export function MrSidebarNavigationItem({ sidebarNavigationItem }: MrSidebarNavigationItemProps) {
    const pathname = usePathname();
    const isActive = pathname === sidebarNavigationItem.href;

    return (
        <li className="group relative flex size-14 items-center justify-center">
            <MrLink
                href={sidebarNavigationItem.href}
                className={cn(
                    "relative flex items-center justify-center rounded-md p-2 transition-colors",
                    isActive && "bg-primary/20",
                    "hover:bg-primary/10",
                )}
            >
                <MrIcon
                    className="group-hover:text-primary"
                    name={sidebarNavigationItem.iconName}
                    color={iconColors.primary}
                    size={iconSizes.large}
                    strokeWidth={iconStrokeWidths.thick}
                />
            </MrLink>
        </li>
    );
}

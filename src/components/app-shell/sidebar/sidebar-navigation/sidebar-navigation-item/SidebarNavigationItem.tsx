"use client";

import { usePathname } from "next/navigation";
import { MrIcon } from "@/components/ui/icon/Icon";
import { MrLink } from "@/components/ui/link/Link";
import { cn } from "@/lib/cn";
import { colorNames } from "@/enums/ui/color-name";
import { iconSizes } from "@/enums/ui/icon-size";
import { iconStrokeWidths } from "@/enums/ui/icon-stroke-width";
import { IconName } from "@/enums/ui/icon-name";

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
                    isActive && "bg-stone-700",
                )}
            >
                <MrIcon
                    className="group-hover:text-white"
                    name={sidebarNavigationItem.iconName}
                    color={colorNames.lightStone}
                    size={iconSizes.large}
                    strokeWidth={iconStrokeWidths.thick}
                />
            </MrLink>
        </li>
    );
}

import { cn } from "@/shared/lib/cn";
import { MrLogo } from "@/shared/layout/sidebar/logo/Logo";
import { IconName } from "@/shared/ui/icon/icon-name";
import { MrSidebarNavigation } from "@/shared/layout/sidebar/sidebar-navigation/SidebarNavigation";

interface SidebarNavigationItem {
    href: string;
    iconName: IconName;
    label: string;
}

interface MrSidebarProps {
    sidebarNavigationItems: SidebarNavigationItem[];
    logoIconName?: IconName;
    className?: string;
}

export function MrSidebar({ sidebarNavigationItems, logoIconName, className }: MrSidebarProps) {
    return (
        <aside className={cn("bg-sidebar sticky top-0 z-20 flex h-screen w-14 flex-col", className)}>
            <div className="flex size-14 items-center justify-center">
                <MrLogo logoIconName={logoIconName} />
            </div>

            <MrSidebarNavigation sidebarNavigationItems={sidebarNavigationItems} />
        </aside>
    );
}

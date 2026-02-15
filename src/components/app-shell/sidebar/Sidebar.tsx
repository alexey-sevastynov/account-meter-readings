import { cn } from "@/lib/cn";
import { MrLogo } from "@/components/app-shell/sidebar/logo/Logo";
import { IconName } from "@/enums/ui/icon-name";
import { MrSidebarNavigation } from "@/components/app-shell/sidebar/sidebar-navigation/SidebarNavigation";

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
        <aside
            className={cn(
                "relative z-20 h-full w-14 bg-stone-800 transition-[width] duration-75 ease-in",
                className,
            )}
        >
            <div className="flex size-14 items-center justify-center">
                <MrLogo logoIconName={logoIconName} />
            </div>

            <MrSidebarNavigation sidebarNavigationItems={sidebarNavigationItems} />
        </aside>
    );
}

import {
    MrSidebarNavigationItem,
    SidebarNavigationItem,
} from "@/components/app-shell/sidebar/sidebar-navigation/sidebar-navigation-item/SidebarNavigationItem";

interface MrSidebarNavigationProps {
    sidebarNavigationItems: SidebarNavigationItem[];
}

export function MrSidebarNavigation({ sidebarNavigationItems }: MrSidebarNavigationProps) {
    return (
        <nav>
            <ul className="relative mt-7 flex flex-col">
                {sidebarNavigationItems.map((item) => (
                    <MrSidebarNavigationItem key={item.href} sidebarNavigationItem={item} />
                ))}
            </ul>
        </nav>
    );
}

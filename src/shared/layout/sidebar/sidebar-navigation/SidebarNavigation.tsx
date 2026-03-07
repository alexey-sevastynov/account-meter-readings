import {
    SidebarNavigationItem,
} from "@/shared/layout/sidebar/sidebar-navigation/sidebar-navigation-item/SidebarNavigationItem";

interface SidebarNavigationProps {
    sidebarNavigationItems: SidebarNavigationItem[];
}

export function SidebarNavigation({ sidebarNavigationItems }: SidebarNavigationProps) {
    return (
        <nav>
            <ul className="relative mt-7 flex flex-col">
                {sidebarNavigationItems.map((item) => (
                    <SidebarNavigationItem key={item.href} sidebarNavigationItem={item} />
                ))}
            </ul>
        </nav>
    );
}

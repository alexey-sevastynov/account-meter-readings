import { cn } from "@/lib/cn";
import { InvertedCorner } from "@/components/app-shell/sidebar/inverted-corner/InvertedCorner";

interface MrSidebarProps {
    className?: string;
}

export function MrSidebar({ className }: MrSidebarProps) {
    return (
        <aside
            className={cn(
                "relative z-20 h-full w-14 bg-green-900 transition-[width] duration-75 ease-in",
                className,
            )}
        >
            <InvertedCorner className="top-0 left-full -mt-[1px] -ml-[1px]" fillColor="fill-green-900" />
        </aside>
    );
}

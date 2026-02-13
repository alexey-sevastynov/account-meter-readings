import { cn } from "@/lib/cn";

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
        />
    );
}

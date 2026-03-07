import { cn } from "@/shared/lib/cn";
import { InvertedCorner } from "@/shared/layout/toolbar/inverted-corner/InvertedCorner";

interface ToolbarProps {
    className?: string;
}

export function Toolbar({ className }: ToolbarProps) {
    return (
        <header
            className={cn(
                "bg-sidebar relative flex h-14 flex-none items-center justify-between pr-4",
                className,
            )}
        >
            <InvertedCorner className="absolute top-full left-0" fillColor="fill-sidebar" />
        </header>
    );
}

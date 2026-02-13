import { cn } from "@/lib/cn";
import { InvertedCorner } from "@/components/app-shell/toolbar/inverted-corner/InvertedCorner";

interface MrToolbarProps {
    className?: string;
}

export function MrToolbar({ className }: MrToolbarProps) {
    return (
        <header
            className={cn(
                "relative flex h-14 flex-none items-center justify-between bg-green-900 pr-4",
                className,
            )}
        >
            <InvertedCorner className="absolute top-full left-0" fillColor="fill-green-900" />
        </header>
    );
}

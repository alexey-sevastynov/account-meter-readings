import { cn } from "@/lib/cn";

interface MrToolbarProps {
    className?: string;
}

export function MrToolbar({ className }: MrToolbarProps) {
    return (
        <header
            className={cn("flex h-14 flex-none items-center justify-between bg-green-900 pr-4", className)}
        />
    );
}

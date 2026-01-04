import { cn } from "@/lib/cn";
import { ReactNode } from "react";

interface MrTitleProps {
    children: ReactNode;
    className?: string;
}

export function MrTitle({ children, className }: MrTitleProps) {
    return (
        <h2
            className={cn(
                "text-foreground/70 mb-6 text-center text-2xl leading-snug font-bold tracking-tight",
                className,
            )}
        >
            {children}
        </h2>
    );
}

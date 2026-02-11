import { ReactNode } from "react";
import { TextPosition } from "@/enums/ui/text-position";
import { cn } from "@/lib/cn";

interface MrTitleProps {
    children: ReactNode;
    position?: TextPosition;
    className?: string;
}

export function MrTitle({ children, position = "center", className }: MrTitleProps) {
    return (
        <h2
            className={cn(
                "text-foreground/70 mb-6 text-2xl leading-snug font-bold tracking-tight",
                position && `text-${position}`,
                className,
            )}
        >
            {children}
        </h2>
    );
}

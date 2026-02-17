import { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { TextPosition } from "@/enums/ui/text-position";

interface MrTextProps {
    children: ReactNode;
    position?: TextPosition;
    className?: string;
}

export function MrText({ children, position = "left", className }: MrTextProps) {
    return (
        <p
            className={cn(
                "text-foreground mb-4 text-base leading-relaxed",
                className,
                position && `text-${position}`,
            )}
        >
            {children}
        </p>
    );
}

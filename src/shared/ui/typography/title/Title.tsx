import { ReactNode } from "react";
import { TextPosition } from "@/shared/ui/typography/text-position";
import { cn } from "@/shared/lib/cn";

interface TitleProps {
    children: ReactNode;
    position?: TextPosition;
    className?: string;
}

export function Title({ children, position = "center", className }: TitleProps) {
    return (
        <h2
            className={cn(
                "text-foreground mb-6 text-2xl leading-snug font-bold tracking-tight",
                position && `text-${position}`,
                className,
            )}
        >
            {children}
        </h2>
    );
}

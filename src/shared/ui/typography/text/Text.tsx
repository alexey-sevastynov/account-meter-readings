import { ReactNode } from "react";
import { cn } from "@/shared/lib/cn";
import { TextPosition } from "@/shared/ui/typography/text-position";

interface TextProps {
    children: ReactNode;
    position?: TextPosition;
    className?: string;
}

export function Text({ children, position = "left", className }: TextProps) {
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

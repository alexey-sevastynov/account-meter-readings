import React from "react";
import { cn } from "@/lib/cn";

interface MrBadgeProps {
    children: React.ReactNode;
    color?: string;
    textColor?: string;
}

export function MrBadge({ children, color = "bg-accent/20", textColor = "text-accent" }: MrBadgeProps) {
    return (
        <span
            className={cn(
                "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium",
                color,
                textColor,
                "shadow-sm",
            )}
        >
            {children}
        </span>
    );
}

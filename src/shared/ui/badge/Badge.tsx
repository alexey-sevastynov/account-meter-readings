import React from "react";
import { cn } from "@/shared/lib/cn";

interface BadgeProps {
    children: React.ReactNode;
    color?: string;
    textColor?: string;
}

export function Badge({ children, color = "bg-accent/20", textColor = "text-accent" }: BadgeProps) {
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

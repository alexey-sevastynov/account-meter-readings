import { cn } from "@/lib/cn";
import { ReactNode } from "react";

interface MrTextProps {
    children: ReactNode;
    className?: string;
}

export function MrText({ children, className }: MrTextProps) {
    return <p className={cn("mb-4 text-center text-base leading-relaxed", className)}>{children}</p>;
}

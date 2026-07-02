import { ReactNode } from "react";
import { TextPosition, textPositions } from "@/shared/ui/typography/text-position";
import { cn } from "@/shared/lib/cn";
import { TextSize, textSizes } from "@/shared/ui/typography/text-size";
import { TextWeight, textWeights } from "@/shared/ui/typography/text-weight";

export interface TitleProps {
    children: ReactNode;
    textPosition?: TextPosition;
    textSize?: TextSize;
    textWeight?: TextWeight;
    uppercase?: boolean;
    className?: string;
}

export function Title({
    children,
    textPosition = textPositions.center,
    textSize = textSizes.xxl,
    textWeight = textWeights.bold,
    uppercase = false,
    className,
}: TitleProps) {
    return (
        <h2
            className={cn(
                "text-foreground mb-6 leading-snug tracking-tight",
                textPosition,
                textSize,
                textWeight,
                uppercase && "uppercase",
                className,
            )}
        >
            {children}
        </h2>
    );
}

import { ReactNode } from "react";
import { TextPosition, textPositions } from "@/shared/ui/typography/text-position";
import { cn } from "@/shared/lib/cn";
import { TextSize, textSizes } from "@/shared/ui/typography/text-size";
import { TextWeight, textWeights } from "@/shared/ui/typography/text-weight";

interface TitleProps {
    children: ReactNode;
    textPosition?: TextPosition;
    textSize?: TextSize;
    textWeight?: TextWeight;
    className?: string;
}

export function Title({
    children,
    textPosition = textPositions.center,
    textSize = textSizes.xxl,
    textWeight = textWeights.bold,
    className,
}: TitleProps) {
    return (
        <h2
            className={cn(
                "text-foreground mb-6 leading-snug tracking-tight",
                textPosition,
                textSize,
                textWeight,
                className,
            )}
        >
            {children}
        </h2>
    );
}

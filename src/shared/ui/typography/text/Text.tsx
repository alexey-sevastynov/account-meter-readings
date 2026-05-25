import { ReactNode } from "react";
import { cn } from "@/shared/lib/cn";
import { TextPosition, textPositions } from "@/shared/ui/typography/text-position";
import { TextSize, textSizes } from "@/shared/ui/typography/text-size";
import { TextWeight, textWeights } from "@/shared/ui/typography/text-weight";

interface TextProps {
    children: ReactNode;
    textPosition?: TextPosition;
    textSize?: TextSize;
    textWeight?: TextWeight;
    uppercase?: boolean;
    className?: string;
}

export function Text({
    children,
    textPosition = textPositions.left,
    textSize = textSizes.md,
    textWeight = textWeights.normal,
    uppercase = false,
    className,
}: TextProps) {
    return (
        <p
            className={cn(
                "text-foreground leading-relaxed",
                textSize,
                textWeight,
                textPosition,
                uppercase && "uppercase",
                className,
            )}
        >
            {children}
        </p>
    );
}

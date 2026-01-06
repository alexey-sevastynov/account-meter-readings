import { cn } from "@/lib/cn";

interface InvertedCornerProps {
    fillColor: string;
    backgroundColor?: string;
    className?: string;
}

export function InvertedCorner({
    fillColor,
    backgroundColor = "fill-background",
    className,
}: InvertedCornerProps) {
    return (
        <div className={cn("pointer-events-none absolute size-5 select-none", className)}>
            <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
                <path d="M0 0H20V20H0V0Z" className={backgroundColor} />
                <path d="M20 0H0V20C0 8.9543 8.9543 0 20 0Z" className={fillColor} />
            </svg>
        </div>
    );
}

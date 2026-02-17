import { cn } from "@/lib/cn";

interface MrDividerProps {
    className?: string;
    text?: string;
}

export function MrDivider({ text, className }: MrDividerProps) {
    return (
        <div className={cn("relative flex w-full items-center", className)}>
            <div className="border-border flex-grow border-t" />

            {text && (
                <span className="text-muted-foreground bg-background mx-4 px-2 text-xs tracking-widest">
                    {text}
                </span>
            )}

            <div className="border-border flex-grow border-t" />
        </div>
    );
}

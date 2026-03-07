import { cn } from "@/shared/lib/cn";

interface DividerProps {
    className?: string;
    text?: string;
}

export function Divider({ text, className }: DividerProps) {
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

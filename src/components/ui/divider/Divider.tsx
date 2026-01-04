import { cn } from "@/lib/cn";

interface MrDividerProps {
    className?: string;
    text?: string;
}

export function MrDivider({ text, className }: MrDividerProps) {
    return (
        <div className={cn("relative flex w-full items-center", className)}>
            <div className="flex-grow border-t" />

            {text && (
                <span className="mx-4 max-w-1/2 flex-none truncate text-xs tracking-widest">{text}</span>
            )}

            <div className="flex-grow border-t" />
        </div>
    );
}

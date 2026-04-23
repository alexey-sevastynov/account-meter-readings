import { cn } from "@/shared/lib/cn";

interface LoadingIndicatorProps {
    text?: string;
    className?: string;
}

export function LoadingIndicator({ text = "Завантаження...", className }: LoadingIndicatorProps) {
    return (
        <div className={cn("flex items-center gap-2 text-sm text-gray-500", className)}>
            <svg className="h-4 w-4 animate-spin text-gray-400" viewBox="0 0 24 24" fill="none">
                <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
            {text}
        </div>
    );
}

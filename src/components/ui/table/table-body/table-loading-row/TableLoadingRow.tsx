import { cn } from "@/lib/cn";

interface MrTableLoadingRowProps {
    colSpan: number;
    className?: string;
}

export function MrTableLoadingRow({ colSpan, className }: MrTableLoadingRowProps) {
    return (
        <tr className={cn("border-border border-b last:border-0", className)}>
            <td colSpan={colSpan} className="px-4 py-4">
                <div className="flex items-center justify-center gap-2">
                    <div className="bg-muted h-2 w-2 animate-bounce rounded-full" />
                    <div className="bg-muted h-2 w-2 animate-bounce rounded-full" />
                    <div className="bg-muted h-2 w-2 animate-bounce rounded-full" />
                </div>
            </td>
        </tr>
    );
}

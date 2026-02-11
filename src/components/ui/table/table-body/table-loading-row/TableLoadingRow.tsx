import { cn } from "@/lib/cn";

interface MrTableLoadingRowProps {
    colSpan: number;
    className?: string;
}

export function MrTableLoadingRow({ colSpan, className }: MrTableLoadingRowProps) {
    return (
        <tr className={cn("border-b border-gray-50 last:border-0", className)}>
            <td colSpan={colSpan} className="px-4 py-4">
                <div className="flex items-center justify-center gap-2">
                    <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400" />
                    <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400" />
                    <div className="h-2 w-2 animate-bounce rounded-full bg-gray-400" />
                </div>
            </td>
        </tr>
    );
}

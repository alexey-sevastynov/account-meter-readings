import { cn } from "@/shared/lib/cn";
import { VoidFunc } from "@/shared/types/getter-setter-functions";
import { flexRender, Row } from "@tanstack/react-table";

interface TableRowProps<T> {
    tableRow: Row<T>;
    onRowClick?: VoidFunc<T>;
    className?: string;
}

export function TableRow<T>({ tableRow, onRowClick, className }: TableRowProps<T>) {
    return (
        <tr
            onClick={() => onRowClick?.(tableRow.original)}
            className={cn("hover:bg-muted/10 transition-colors", onRowClick && "cursor-pointer", className)}
        >
            {tableRow.getVisibleCells().map((tableCell) => (
                <td
                    key={tableCell.id}
                    className="text-foreground px-3 py-4 text-sm whitespace-nowrap"
                    style={{ width: tableCell.column.getSize() }}
                >
                    {flexRender(tableCell.column.columnDef.cell, tableCell.getContext())}
                </td>
            ))}
        </tr>
    );
}

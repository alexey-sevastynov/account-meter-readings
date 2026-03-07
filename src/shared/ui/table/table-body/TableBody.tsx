import { cn } from "@/shared/lib/cn";
import { VoidFunc } from "@/shared/types/getter-setter-functions";
import { Table } from "@tanstack/react-table";
import { TableRow } from "@/shared/ui/table/table-body/table-row/TableRow";
import { TableEmptyRow } from "@/shared/ui/table/table-body/table-empty-row/TableEmptyRow";
import { TableLoadingRow } from "@/shared/ui/table/table-body/table-loading-row/TableLoadingRow";

interface TableBodyProps<TableData> {
    reactTable: Table<TableData>;
    noDataMessage?: string;
    isLoading?: boolean;
    onRowClick?: VoidFunc<TableData>;
    className?: string;
}

export function TableBody<TableData>({
    reactTable,
    noDataMessage,
    isLoading = false,
    onRowClick,
    className,
}: TableBodyProps<TableData>) {
    const rows = reactTable.getRowModel().rows;
    const colSpan = reactTable.getAllColumns().length;

    if (isLoading) {
        return (
            <tbody className={cn("divide-border bg-card divide-y [--tw-divide-opacity:1]", className)}>
                <TableLoadingRow colSpan={colSpan} className="h-16" />
            </tbody>
        );
    }

    if (rows.length === 0) {
        return (
            <tbody className={cn("divide-border bg-card divide-y [--tw-divide-opacity:1]", className)}>
                <TableEmptyRow colSpan={colSpan} noDataMessage={noDataMessage} className="h-16" />
            </tbody>
        );
    }

    return (
        <tbody className={cn("divide-border bg-card divide-y [--tw-divide-opacity:1]", className)}>
            {rows.map((row) => (
                <TableRow key={row.id} tableRow={row} onRowClick={onRowClick} className="h-16" />
            ))}
        </tbody>
    );
}

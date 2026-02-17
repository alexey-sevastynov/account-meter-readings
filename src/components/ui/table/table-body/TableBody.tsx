import { cn } from "@/lib/cn";
import { VoidFunc } from "@/types/getter-setter-functions";
import { Table } from "@tanstack/react-table";
import { MrTableRow } from "@/components/ui/table/table-body/table-row/TableRow";
import { MrTableEmptyRow } from "@/components/ui/table/table-body/table-empty-row/TableEmptyRow";
import { MrTableLoadingRow } from "@/components/ui/table/table-body/table-loading-row/TableLoadingRow";

interface MrTableBodyProps<TableData> {
    reactTable: Table<TableData>;
    noDataMessage?: string;
    isLoading?: boolean;
    onRowClick?: VoidFunc<TableData>;
    className?: string;
}

export function MrTableBody<TableData>({
    reactTable,
    noDataMessage,
    isLoading = false,
    onRowClick,
    className,
}: MrTableBodyProps<TableData>) {
    const rows = reactTable.getRowModel().rows;
    const colSpan = reactTable.getAllColumns().length;

    if (isLoading) {
        return (
            <tbody className={cn("divide-border bg-card divide-y [--tw-divide-opacity:1]", className)}>
                <MrTableLoadingRow colSpan={colSpan} className="h-16" />
            </tbody>
        );
    }

    if (rows.length === 0) {
        return (
            <tbody className={cn("divide-border bg-card divide-y [--tw-divide-opacity:1]", className)}>
                <MrTableEmptyRow colSpan={colSpan} noDataMessage={noDataMessage} className="h-16" />
            </tbody>
        );
    }

    return (
        <tbody className={cn("divide-border bg-card divide-y [--tw-divide-opacity:1]", className)}>
            {rows.map((row) => (
                <MrTableRow key={row.id} tableRow={row} onRowClick={onRowClick} className="h-16" />
            ))}
        </tbody>
    );
}

import { cn } from "@/shared/lib/cn";
import { Table } from "@tanstack/react-table";
import { TableHeaderCell } from "@/shared/ui/table/table-header/table-header-cell/TableHeaderCell";

interface TableHeaderProps<TableData> {
    reactTable: Table<TableData>;
    enableSorting?: boolean;
    enableColumnResizing?: boolean;
    className?: string;
}

export function TableHeader<TableData>({
    reactTable,
    enableSorting,
    enableColumnResizing,
    className,
}: TableHeaderProps<TableData>) {
    return (
        <thead className={cn("bg-background border-border border-b", className)}>
            {reactTable.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                        <TableHeaderCell
                            key={header.id}
                            tableHeader={header}
                            enableSorting={enableSorting}
                            enableResizing={enableColumnResizing}
                        />
                    ))}
                </tr>
            ))}
        </thead>
    );
}

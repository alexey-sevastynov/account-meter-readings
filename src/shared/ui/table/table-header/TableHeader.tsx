import { cn } from "@/shared/lib/cn";
import { Table } from "@tanstack/react-table";
import { TableHeaderCell } from "@/shared/ui/table/table-header/table-header-cell/TableHeaderCell";

interface TableHeaderProps<TableData> {
    reactTable: Table<TableData>;
    enableSorting?: boolean;
    enableColumnResizing?: boolean;
    className?: string;
    isSticky?: boolean;
}

export function TableHeader<TableData>({
    reactTable,
    enableSorting,
    enableColumnResizing,
    className,
    isSticky,
}: TableHeaderProps<TableData>) {
    return (
        <thead
            className={cn(
                "bg-background border-border border-b",
                isSticky && "sticky top-0 z-10 shadow-xs",
                className,
            )}
        >
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

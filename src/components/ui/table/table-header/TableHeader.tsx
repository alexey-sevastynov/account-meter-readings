import { cn } from "@/lib/cn";
import { Table } from "@tanstack/react-table";
import { MrTableHeaderCell } from "@/components/ui/table/table-header/table-header-cell/TableHeaderCell";

interface MrTableHeaderProps<TableData> {
    reactTable: Table<TableData>;
    enableSorting?: boolean;
    enableColumnResizing?: boolean;
    className?: string;
}

export function MrTableHeader<TableData>({
    reactTable,
    enableSorting,
    enableColumnResizing,
    className,
}: MrTableHeaderProps<TableData>) {
    return (
        <thead className={cn("bg-gray-50", className)}>
            {reactTable.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                        <MrTableHeaderCell
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

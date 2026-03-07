import { Header } from "@tanstack/react-table";
import { TableHeaderContent } from "@/shared/ui/table/table-header/table-header-cell/table-header-content/TableHeaderContent";
import { TableHeaderResizer } from "@/shared/ui/table/table-header/table-header-cell/table-header-resizer/TableHeaderResizer";
import { isColumnResizable } from "@/shared/ui/table/table-header/table-header-cell/TableHeaderCell.funcs";

interface TableHeaderCellProps<TableData> {
    tableHeader: Header<TableData, unknown>;
    enableSorting?: boolean;
    enableResizing?: boolean;
}

export function TableHeaderCell<TableData>({
    tableHeader,
    enableSorting,
    enableResizing,
}: TableHeaderCellProps<TableData>) {
    if (tableHeader.isPlaceholder) return <th key={tableHeader.id} />;

    return (
        <th
            key={tableHeader.id}
            className="text-foreground relative px-3 py-3.5 text-left text-sm font-semibold"
            style={{ width: tableHeader.getSize() }}
        >
            <TableHeaderContent tableHeader={tableHeader} enableSorting={enableSorting} />

            {isColumnResizable(tableHeader.column.getCanResize(), enableResizing) && (
                <TableHeaderResizer tableHeader={tableHeader} />
            )}
        </th>
    );
}

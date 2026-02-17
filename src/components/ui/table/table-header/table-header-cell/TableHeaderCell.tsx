import { Header } from "@tanstack/react-table";
import { MrTableHeaderContent } from "@/components/ui/table/table-header/table-header-cell/table-header-content/TableHeaderContent";
import { MrTableHeaderResizer } from "@/components/ui/table/table-header/table-header-cell/table-header-resizer/TableHeaderResizer";
import { isColumnResizable } from "@/components/ui/table/table-header/table-header-cell/TableHeaderCell.funcs";

interface MrTableHeaderCellProps<TableData> {
    tableHeader: Header<TableData, unknown>;
    enableSorting?: boolean;
    enableResizing?: boolean;
}

export function MrTableHeaderCell<TableData>({
    tableHeader,
    enableSorting,
    enableResizing,
}: MrTableHeaderCellProps<TableData>) {
    if (tableHeader.isPlaceholder) return <th key={tableHeader.id} />;

    return (
        <th
            key={tableHeader.id}
            className="text-foreground relative px-3 py-3.5 text-left text-sm font-semibold"
            style={{ width: tableHeader.getSize() }}
        >
            <MrTableHeaderContent tableHeader={tableHeader} enableSorting={enableSorting} />

            {isColumnResizable(tableHeader.column.getCanResize(), enableResizing) && (
                <MrTableHeaderResizer tableHeader={tableHeader} />
            )}
        </th>
    );
}

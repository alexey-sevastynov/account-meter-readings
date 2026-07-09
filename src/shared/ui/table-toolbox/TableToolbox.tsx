import { Table } from "@tanstack/react-table";
import { TableColumnVisibilityDropdown } from "@/shared/ui/table-toolbox/table-column-visibility-dropdown/TableColumnVisibilityDropdown";
import { TableFilterDropdown } from "@/shared/ui/table-toolbox/table-filter-dropdown/TableFilterDropdown";
import { Button } from "@/shared/ui/button/Button";
import { iconNames } from "@/shared/ui/icon/icon-name";
import { exportTableToExcel } from "@/shared/lib/react-table/export/export-table-to-excel";

interface TableToolboxProps<TData> {
    reactTable: Table<TData>;
}

export function TableToolbox<TData>({ reactTable }: TableToolboxProps<TData>) {
    return (
        <div className="mb-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
                <TableFilterDropdown columns={reactTable.getAllColumns()} />
                <TableColumnVisibilityDropdown columns={reactTable.getAllColumns()} />
            </div>
            <Button
                text="Экспорт"
                iconName={iconNames.download}
                onClick={() =>
                    exportTableToExcel({
                        table: reactTable,
                        fileName: reactTable.options.meta?.exportFileName ?? "table-export",
                        sheetName: reactTable.options.meta?.exportSheetName ?? "Sheet1",
                        excludedColumns: ["actions", "id", "createdAt", "updatedAt"],
                    })
                }
            />
        </div>
    );
}

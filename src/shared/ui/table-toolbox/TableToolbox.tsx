import { Column } from "@tanstack/react-table";
import { TableColumnVisibilityDropdown } from "@/shared/ui/table-toolbox/table-column-visibility-dropdown/TableColumnVisibilityDropdown";
import { TableFilterDropdown } from "@/shared/ui/table-toolbox/table-filter-dropdown/TableFilterDropdown";
import { Button } from "@/shared/ui/button/Button";
import { iconNames } from "@/shared/ui/icon/icon-name";

interface TableToolboxProps<TData> {
    columns: Column<TData>[];
}

export function TableToolbox<TData>({ columns }: TableToolboxProps<TData>) {
    return (
        <div className="mb-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
                <TableFilterDropdown columns={columns} />
                <TableColumnVisibilityDropdown columns={columns} />
            </div>
            <Button text="Экспорт" iconName={iconNames.download} />
        </div>
    );
}

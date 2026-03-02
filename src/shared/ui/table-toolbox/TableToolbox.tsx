import { Column } from "@tanstack/react-table";
import { MrTableColumnVisibilityDropdown } from "@/shared/ui/table-toolbox/table-column-visibility-dropdown/TableColumnVisibilityDropdown";
import { MrTableFilterDropdown } from "@/shared/ui/table-toolbox/table-filter-dropdown/TableFilterDropdown";
import { MrButton } from "@/shared/ui/button/Button";
import { iconNames } from "@/shared/ui/icon/icon-name";

interface MrTableToolboxProps<TData> {
    columns: Column<TData>[];
}

export function MrTableToolbox<TData>({ columns }: MrTableToolboxProps<TData>) {
    return (
        <div className="mb-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
                <MrTableFilterDropdown columns={columns} />
                <MrTableColumnVisibilityDropdown columns={columns} />
            </div>
            <MrButton text="Экспорт" iconName={iconNames.download} />
        </div>
    );
}

import { Column } from "@tanstack/react-table";
import { MrTableColumnVisibilityDropdown } from "@/components/ui/table-toolbox/table-column-visibility-dropdown/TableColumnVisibilityDropdown";
import { MrTableFilterDropdown } from "@/components/ui/table-toolbox/table-filter-dropdown/TableFilterDropdown";
import { MrButton } from "@/components/ui/button/Button";
import { iconNames } from "@/enums/ui/icon-name";

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

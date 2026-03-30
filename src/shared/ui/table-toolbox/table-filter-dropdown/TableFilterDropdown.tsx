import { cn } from "@/shared/lib/cn";
import { Column } from "@tanstack/react-table";
import { Button } from "@/shared/ui/button/Button";
import { iconNames } from "@/shared/ui/icon/icon-name";
import { Dropdown, DropdownContent, DropdownTrigger } from "@/shared/ui/dropdown/Dropdown";
import { Text } from "@/shared/ui/typography/text/Text";
import {
    isFilterableInputColumn,
    isFilterableDateColumn,
    getColumnDateRange,
} from "@/shared/ui/table-toolbox/table-filter-dropdown/tableFilterDropdown.funcs";
import { InputFilterColumn } from "@/shared/ui/table-toolbox/table-filter-dropdown/input-filter-column/InputFilterColumn";
import { DateFilterColumn } from "@/shared/ui/table-toolbox/table-filter-dropdown/date-filter-column/DateFilterColumn";

interface TableFilterDropdownProps<TData> {
    columns: Column<TData>[];
    className?: string;
}

export function TableFilterDropdown<TData>({ columns, className }: TableFilterDropdownProps<TData>) {
    const filterableInputColumns = columns.filter((column) => isFilterableInputColumn(column));
    const filterableDateColumns = columns.filter((column) => isFilterableDateColumn(column));

    const activeInputFiltersCount = filterableInputColumns.filter((column) => column.getFilterValue()).length;
    const activeDateFiltersCount = filterableDateColumns.filter((column) => {
        const columnDateRange = getColumnDateRange(column);

        return columnDateRange?.from || columnDateRange?.to;
    }).length;

    const activeFiltersCount = activeInputFiltersCount + activeDateFiltersCount;

    return (
        <Dropdown className={cn("relative", className)}>
            <DropdownTrigger>
                <div className="relative inline-flex items-center">
                    <Button text="Фільтри" iconName={iconNames.filter} />
                    {activeFiltersCount > 0 && (
                        <span className="absolute -top-1 -right-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-medium text-white">
                            {activeFiltersCount}
                        </span>
                    )}
                </div>
            </DropdownTrigger>

            <DropdownContent className="max-h-[80vh] w-80 overflow-y-auto">
                <div className="sticky top-0 z-10 border-b border-gray-200 bg-white p-4">
                    <div className="flex items-center justify-between">
                        <Text>Фільтри</Text>
                    </div>
                </div>

                <div className="space-y-4 p-4">
                    {filterableInputColumns.map((column) => (
                        <InputFilterColumn key={column.id} column={column} />
                    ))}
                    {filterableDateColumns.map((column) => (
                        <DateFilterColumn key={column.id} column={column} />
                    ))}
                </div>

                <div className="sticky bottom-0 border-t border-gray-200 bg-white p-3">
                    <Button
                        className="w-full"
                        text="Скинути всі фільтри"
                        onClick={() => {
                            filterableInputColumns.forEach((col) => col.setFilterValue(""));
                            filterableDateColumns.forEach((col) => col.setFilterValue(undefined));
                        }}
                    />
                </div>
            </DropdownContent>
        </Dropdown>
    );
}

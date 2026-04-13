import { Column } from "@tanstack/react-table";
import { Text } from "@/shared/ui/typography/text/Text";
import { RangeDatePicker } from "@/shared/ui/date-picker/RangeDatePicker";
import { getColumnDateRange } from "@/shared/ui/table-toolbox/table-filter-dropdown/tableFilterDropdown.funcs";
import { DateRange } from "@/shared/types/date-range/date-range-type";

export function DateFilterColumn<TData>({ column }: { column: Column<TData> }) {
    const columnName = column.columnDef.meta?.label ?? "Дата";
    const columnDateRange = getColumnDateRange(column);

    const handleRangeChange = (dateRange: DateRange) => {
        if (!dateRange?.from && !dateRange?.to) {
            return column.setFilterValue(undefined);
        }

        column.setFilterValue(dateRange);
    };

    return (
        <div className="relative space-y-2 border-t border-gray-100 pt-4 first:border-0 first:pt-0">
            <div className="mb-2">
                <Text className="text-sm font-medium text-gray-700">{columnName}</Text>
            </div>
            <RangeDatePicker value={columnDateRange} onChange={handleRangeChange} />
        </div>
    );
}

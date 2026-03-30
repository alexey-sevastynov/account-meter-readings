import { Column } from "@tanstack/react-table";
import { Text } from "@/shared/ui/typography/text/Text";
import { Button } from "@/shared/ui/button/Button";
import { buttonVariantKeys } from "@/shared/ui/button/button-variant-keys";
import { iconNames } from "@/shared/ui/icon/icon-name";
import { iconColors } from "@/shared/ui/icon/icon-color";
import { DatePicker } from "@/shared/ui/date-picker/DatePicker";
import { getColumnDateRange } from "@/shared/ui/table-toolbox/table-filter-dropdown/tableFilterDropdown.funcs";

export function DateFilterColumn<TData>({ column }: { column: Column<TData> }) {
    const columnName = column.columnDef.meta?.label ?? "Дата";
    const columnDateRange = getColumnDateRange(column);

    return (
        <div className="relative space-y-2 border-t border-gray-100 pt-4 first:border-0 first:pt-0">
            <div className="mb-2 flex items-center justify-between">
                <Text className="text-sm font-medium text-gray-700">{columnName}</Text>
                {(columnDateRange?.from || columnDateRange?.to) && (
                    <Button
                        variant={buttonVariantKeys.icon}
                        iconName={iconNames.close}
                        iconColor={iconColors.primary}
                        onClick={() => column.setFilterValue(undefined)}
                        className="h-6 w-6 text-gray-400 hover:text-gray-600"
                    />
                )}
            </div>
            <div className="flex items-center gap-2">
                <DatePicker
                    label="Від"
                    value={columnDateRange?.from}
                    onChange={(date) => column.setFilterValue({ ...columnDateRange, from: date })}
                />
                <DatePicker
                    label="До"
                    value={columnDateRange?.to}
                    onChange={(date) => column.setFilterValue({ ...columnDateRange, to: date })}
                />
            </div>
        </div>
    );
}

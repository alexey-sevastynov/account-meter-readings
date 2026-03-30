import { DateRange } from "@/shared/types/date-range/date-range-type";
import { isDateRange } from "@/shared/utils/guards";
import { isInputFieldType, isDateFieldType } from "@/shared/utils/resource-field-type-guards";
import { Column } from "@tanstack/react-table";

export function isFilterableInputColumn<TData>(column: Column<TData>) {
    const resourceFieldType = column.columnDef.meta?.resourceFieldType;
    const filterable = column.columnDef.meta?.filterable;

    if (!resourceFieldType || !filterable) return false;

    return isInputFieldType(resourceFieldType) && column.getCanFilter();
}

export function isFilterableDateColumn<TData>(column: Column<TData>) {
    const resourceFieldType = column.columnDef.meta?.resourceFieldType;
    const filterable = column.columnDef.meta?.filterable;

    if (!resourceFieldType || !filterable) return false;

    return isDateFieldType(resourceFieldType) && column.getCanFilter();
}

export function getColumnDateRange<TData>(column: Column<TData>) {
    const columnFilterValue = column.getFilterValue();
    const emptyDateRange: DateRange = { from: undefined, to: undefined };

    return isDateRange(columnFilterValue) ? columnFilterValue : emptyDateRange;
}

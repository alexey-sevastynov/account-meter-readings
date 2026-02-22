import { isInputFieldType } from "@/utils/resource-field-type-guards";
import { Column } from "@tanstack/react-table";

export function isFilterableInputColumn<TData>(column: Column<TData>) {
    const resourceFieldType = column.columnDef.meta?.resourceFieldType;

    if (!resourceFieldType) return false;

    return isInputFieldType(resourceFieldType) && column.getCanFilter();
}

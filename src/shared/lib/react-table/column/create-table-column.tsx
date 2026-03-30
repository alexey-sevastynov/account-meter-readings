import { ResourceFieldType, resourceFieldTypes } from "@/shared/enums/resource-field-type";
import { DateRange } from "@/shared/types/date-range/date-range-type";
import { DateCell } from "@/shared/ui/table/table-body/table-row/date-cell/DateCell";
import { isDateInRange } from "@/shared/utils/date";
import { ColumnDef, RowData } from "@tanstack/react-table";

interface CreateDateTableColumnOptions<TData extends RowData> {
    accessorKey: string;
    header: string;
    accessorFn?: (row: TData) => Date | null;
    filterable?: boolean;
}

// TODO: Make createTableColumn non-exported
export function createTableColumn<TData extends RowData, TValue = unknown>(
    options: ColumnDef<TData, TValue>,
): ColumnDef<TData, TValue> {
    const tableColumn: ColumnDef<TData, TValue> = {
        ...options,
        enableResizing: options.enableResizing ?? true,
        meta: createMetaTableColumn(
            options.meta?.label,
            options.meta?.resourceFieldType,
            options.meta?.filterable,
        ),
    };

    return tableColumn;
}

export function createDateTableColumn<TData extends RowData>(options: CreateDateTableColumnOptions<TData>) {
    return createTableColumn<TData>({
        accessorKey: options.accessorKey,
        accessorFn: options.accessorFn,
        header: () => <div className="w-full text-right">{options.header}</div>,
        cell: (cellInfo) => <DateCell cellInfo={cellInfo} />,
        sortingFn: "datetime",
        filterFn: (row, columnId, filterValue: DateRange) => {
            const rowValue = row.getValue<Date | null>(columnId);

            return isDateInRange(rowValue, filterValue);
        },
        meta: {
            label: options.header,
            resourceFieldType: resourceFieldTypes.date,
            filterable: options.filterable ?? false,
        },
    });
}

function createMetaTableColumn(label?: string, resourceFieldType?: ResourceFieldType, filterable?: boolean) {
    const metaTableColumn = {
        label: label ?? "Label meta table column",
        resourceFieldType: resourceFieldType ?? resourceFieldTypes.text,
        filterable: filterable ?? false,
    };

    return metaTableColumn;
}

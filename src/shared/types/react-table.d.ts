import { ResourceFieldType } from "@/shared/enums/resource-field-type";
import "@tanstack/react-table";

declare module "@tanstack/react-table" {
    interface ColumnMeta<TData extends RowData, TValue> {
        label: string;
        resourceFieldType: ResourceFieldType;
        filterable: boolean;
    }

    interface TableMeta<TData extends RowData> {
        exportFileName: string;
        exportSheetName: string;
    }
}

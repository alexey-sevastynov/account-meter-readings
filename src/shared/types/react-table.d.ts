import { ResourceFieldType } from "@/shared/ui/form/resource-field-type";
import "@tanstack/react-table";

declare module "@tanstack/react-table" {
    interface ColumnMeta<TData extends RowData, TValue> {
        label: string;
        resourceFieldType: ResourceFieldType;
    }
}

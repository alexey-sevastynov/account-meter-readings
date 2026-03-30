import { ColumnDef } from "@tanstack/react-table";
import { resourceFieldTypes } from "@/shared/enums/resource-field-type";
import { createTableColumn } from "@/shared/lib/react-table/column/create-table-column";
import { Task } from "@/modules/task/types/task";

export const taskColumns: ColumnDef<Task>[] = [
    createTableColumn({
        accessorKey: "title",
        header: "Title",
        footer: (props) => props.column.id,
        meta: { label: "Title", resourceFieldType: resourceFieldTypes.text, filterable: true },
    }),
    createTableColumn({
        accessorKey: "description",
        header: "Description",
        footer: "TOTAL: 230",
        meta: { label: "Description", resourceFieldType: resourceFieldTypes.text, filterable: true },
    }),
    createTableColumn({
        accessorKey: "status",
        header: "Status",
        meta: { label: "Status", resourceFieldType: resourceFieldTypes.select, filterable: true },
    }),
    createTableColumn({
        accessorKey: "priority",
        header: "Priority",
        meta: { label: "Priority", resourceFieldType: resourceFieldTypes.select, filterable: true },
    }),
    createTableColumn({
        accessorKey: "isImportant",
        header: "Is Important",
        meta: { label: "Is Important", resourceFieldType: resourceFieldTypes.checkbox, filterable: true },
    }),
    createTableColumn({
        accessorKey: "tags",
        header: "Tags",
        enableResizing: false,
        meta: { label: "Tags", resourceFieldType: resourceFieldTypes.select, filterable: true },
    }),
];

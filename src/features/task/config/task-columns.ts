import { resourceFieldTypes } from "@/enums/ui/resource-field-type";
import { Task } from "@/models/task";
import { ColumnDef } from "@tanstack/react-table";

export const taskColumns: ColumnDef<Task>[] = [
    {
        accessorKey: "title",
        header: "Title",
        footer: (props) => props.column.id,
        enableResizing: true,
        minSize: 100,
        meta: { label: "Title", resourceFieldType: resourceFieldTypes.text },
    },
    {
        accessorKey: "description",
        header: "Description",
        footer: "TOTAL: 230",
        enableResizing: true,
        meta: { label: "Description", resourceFieldType: resourceFieldTypes.text },
    },
    {
        accessorKey: "status",
        header: "Status",
        enableResizing: true,
        meta: { label: "Status", resourceFieldType: resourceFieldTypes.select },
    },
    {
        accessorKey: "priority",
        header: "Priority",
        enableResizing: true,
        meta: { label: "Priority", resourceFieldType: resourceFieldTypes.select },
    },
    {
        accessorKey: "isImportant",
        header: "Is Important",
        enableResizing: true,
        meta: { label: "Is Important", resourceFieldType: resourceFieldTypes.checkbox },
    },
    {
        accessorKey: "tags",
        header: "Tags",
        enableResizing: false,
        meta: { label: "Tags", resourceFieldType: resourceFieldTypes.select },
    },
];

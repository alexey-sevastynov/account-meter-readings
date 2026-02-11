import { Task } from "@/models/task";
import { ColumnDef } from "@tanstack/react-table";

export const taskColumns: ColumnDef<Task>[] = [
    {
        accessorKey: "title",
        header: "Title",
        footer: (props) => props.column.id,
        enableResizing: true,
        minSize: 100,
    },
    {
        accessorKey: "description",
        header: "Description",
        footer: "TOTAL: 230",
        enableResizing: true,
    },
    {
        accessorKey: "status",
        header: "Status",
        enableResizing: true,
    },
    {
        accessorKey: "priority",
        header: "Priority",
        enableResizing: true,
    },
    {
        accessorKey: "isImportant",
        header: "Is Important",
        enableResizing: true,
    },
    {
        accessorKey: "tags",
        header: "Tags",
        enableResizing: false,
    },
];

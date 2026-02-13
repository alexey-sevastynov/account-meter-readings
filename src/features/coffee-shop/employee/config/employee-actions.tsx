import { RenderFunc } from "@/types/getter-setter-functions";
import { ColumnDef } from "@tanstack/react-table";
import { Edit, Eye, Trash2 } from "lucide-react";
import { Employee } from "@/models/employee";

function createActionsColumn<TData>(renderActions: RenderFunc<TData>) {
    const actionsColumn: ColumnDef<TData> = {
        id: "actions",
        header: "Дії",
        cell: ({ row }) => <div className="flex items-center gap-2">{renderActions(row.original)}</div>,
        size: 120,
        enableSorting: false,
        enableResizing: false,
        enableHiding: false,
    };

    return actionsColumn;
}

export const employeeActionsColumn = createActionsColumn<Employee>((employee) => (
    <>
        <button
            onClick={(e) => {
                e.stopPropagation();
                console.log("Переглянути", employee);
            }}
            className="rounded p-1 text-blue-600 transition-colors hover:bg-blue-50 hover:text-blue-800"
            title="Переглянути"
        >
            <Eye className="h-4 w-4" />
        </button>
        <button
            onClick={(e) => {
                e.stopPropagation();
                console.log("Редагування", employee);
            }}
            className="rounded p-1 text-gray-600 transition-colors hover:bg-gray-50 hover:text-gray-800"
            title="Редагування"
        >
            <Edit className="h-4 w-4" />
        </button>
        <button
            onClick={(e) => {
                e.stopPropagation();
                console.log("Видалити", employee);
            }}
            className="rounded p-1 text-red-600 transition-colors hover:bg-red-50 hover:text-red-800"
            title="Видалити"
        >
            <Trash2 className="h-4 w-4" />
        </button>
    </>
));

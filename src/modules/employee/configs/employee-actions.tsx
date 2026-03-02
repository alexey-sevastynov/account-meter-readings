import { RenderFunc, VoidFunc } from "@/shared/types/getter-setter-functions";
import { ColumnDef } from "@tanstack/react-table";
import { Employee } from "@/modules/employee/types/employee";
import { MrButton } from "@/shared/ui/button/Button";
import { iconNames } from "@/shared/ui/icon/icon-name";

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

export function createEmployeeActionsColumn(onDelete: VoidFunc<string>, onEdit: VoidFunc<Employee>) {
    return createActionsColumn<Employee>((employee) => (
        <>
            <MrButton iconName={iconNames.edit} onClick={() => onEdit(employee)} />
            <MrButton iconName={iconNames.trash} onClick={() => onDelete(employee._id)} />
        </>
    ));
}

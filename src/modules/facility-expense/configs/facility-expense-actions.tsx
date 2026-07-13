import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/shared/ui/button/Button";
import { iconNames } from "@/shared/ui/icon/icon-name";
import { VoidFunc } from "@/shared/types/getter-setter-functions";
import { FacilityExpense } from "@/modules/facility-expense/types/facility-expense";

export function createFacilityExpenseActionsColumn(
    onDelete: VoidFunc<string>,
    onEdit: VoidFunc<FacilityExpense>,
) {
    const column: ColumnDef<FacilityExpense> = {
        id: "actions",
        header: "Дії",
        cell: ({ row }) => {
            const expense = row.original;

            return (
                <div className="flex gap-2">
                    <Button iconName={iconNames.edit} onClick={() => onEdit(expense)} />
                    <Button iconName={iconNames.trash} onClick={() => onDelete(expense._id)} />
                </div>
            );
        },
        size: 120,
        enableSorting: false,
        enableResizing: false,
        enableHiding: false,
    };

    return column;
}

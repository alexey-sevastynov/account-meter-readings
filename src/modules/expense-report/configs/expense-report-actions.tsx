import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/shared/ui/button/Button";
import { iconNames } from "@/shared/ui/icon/icon-name";
import { VoidFunc } from "@/shared/types/getter-setter-functions";
import { ExpenseReport } from "@/modules/expense-report/types/expense-report";

export function createExpenseReportActionsColumn(
    onDelete: VoidFunc<string>,
    onEdit: VoidFunc<ExpenseReport>,
) {
    const column: ColumnDef<ExpenseReport> = {
        id: "actions",
        header: "Дії",
        cell: ({ row }) => {
            const report = row.original;

            return (
                <div className="flex gap-2">
                    <Button iconName={iconNames.edit} onClick={() => onEdit(report)} />
                    <Button iconName={iconNames.trash} onClick={() => onDelete(report._id)} />
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

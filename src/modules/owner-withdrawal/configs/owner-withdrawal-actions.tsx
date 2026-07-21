import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/shared/ui/button/Button";
import { iconNames } from "@/shared/ui/icon/icon-name";
import { VoidFunc } from "@/shared/types/getter-setter-functions";
import { OwnerWithdrawal } from "@/modules/owner-withdrawal/types/owner-withdrawal";

export function createOwnerWithdrawalActionsColumn(
    onDelete: VoidFunc<string>,
    onEdit: VoidFunc<OwnerWithdrawal>,
) {
    const column: ColumnDef<OwnerWithdrawal> = {
        id: "actions",
        header: "Дії",
        cell: ({ row }) => {
            const withdrawal = row.original;

            return (
                <div className="flex gap-2">
                    <Button iconName={iconNames.edit} onClick={() => onEdit(withdrawal)} />
                    <Button iconName={iconNames.trash} onClick={() => onDelete(withdrawal._id)} />
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

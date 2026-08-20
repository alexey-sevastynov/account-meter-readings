import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/shared/ui/button/Button";
import { iconNames } from "@/shared/ui/icon/icon-name";
import { VoidFunc } from "@/shared/types/getter-setter-functions";
import { InventoryAlertRule } from "@/modules/kavapp-inventory-alert-rules/types/inventory-alert-rule";

export function createInventoryAlertRuleActionsColumn(
    onDelete: VoidFunc<string>,
    onEdit: VoidFunc<InventoryAlertRule>,
): ColumnDef<InventoryAlertRule> {
    return {
        id: "actions",
        header: "Дії",
        cell: ({ row }) => (
            <div className="flex gap-2">
                <Button
                    iconName={iconNames.edit}
                    title="Редагувати правило"
                    onClick={() => onEdit(row.original)}
                />
                <Button
                    iconName={iconNames.trash}
                    title="Видалити правило"
                    onClick={() => onDelete(row.original._id)}
                />
            </div>
        ),
        size: 120,
        enableSorting: false,
        enableResizing: false,
        enableHiding: false,
    };
}

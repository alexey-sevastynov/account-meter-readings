import { ColumnDef } from "@tanstack/react-table";
import { DailyReport } from "@/modules/daily-report/types/daily-report";
import { Button } from "@/shared/ui/button/Button";
import { iconNames } from "@/shared/ui/icon/icon-name";
import { VoidFunc } from "@/shared/types/getter-setter-functions";

export function createDailyReportActionsColumn(onDelete: VoidFunc<string>, onEdit: VoidFunc<DailyReport>) {
    const column: ColumnDef<DailyReport> = {
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

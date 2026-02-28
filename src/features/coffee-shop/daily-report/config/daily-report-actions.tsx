import { ColumnDef } from "@tanstack/react-table";
import { DailyReport } from "@/models/daily-report";
import { MrButton } from "@/components/ui/button/Button";
import { iconNames } from "@/enums/ui/icon-name";
import { VoidFunc } from "@/types/getter-setter-functions";

export function createDailyReportActionsColumn(onDelete: VoidFunc<string>, onEdit: VoidFunc<DailyReport>) {
    const column: ColumnDef<DailyReport> = {
        id: "actions",
        header: "Дії",
        cell: ({ row }) => {
            const report = row.original;

            return (
                <div className="flex gap-2">
                    <MrButton iconName={iconNames.edit} onClick={() => onEdit(report)} />
                    <MrButton iconName={iconNames.trash} onClick={() => onDelete(report._id)} />
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

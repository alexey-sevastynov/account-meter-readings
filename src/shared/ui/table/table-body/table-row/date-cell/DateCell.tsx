import { CellContext } from "@tanstack/react-table";
import { formatDate } from "@/shared/utils/date";

interface DateCellProps<TData> {
    cellInfo: CellContext<TData, unknown>;
}

export function DateCell<TData>({ cellInfo }: DateCellProps<TData>) {
    return <div className="w-full text-right">{formatDate(cellInfo.getValue())}</div>;
}

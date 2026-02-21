import { CellContext } from "@tanstack/react-table";
import { formatDate } from "@/utils/date";

interface MrDateCellProps<TData> {
    cellInfo: CellContext<TData, unknown>;
}

export function MrDateCell<TData>({ cellInfo }: MrDateCellProps<TData>) {
    return <div className="w-full text-right">{formatDate(cellInfo.getValue())}</div>;
}

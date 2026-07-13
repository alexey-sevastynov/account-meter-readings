import { formatDateToShortDate } from "@/shared/utils/date";
import { CellContext } from "@tanstack/react-table";

interface DateCellProps<TData> {
    cellInfo: CellContext<TData, unknown>;
    formatter?: (value: unknown) => string;
}

export function DateCell<TData>({ cellInfo, formatter = formatDateToShortDate }: DateCellProps<TData>) {
    return <div className="w-full text-right">{formatter(cellInfo.getValue())}</div>;
}

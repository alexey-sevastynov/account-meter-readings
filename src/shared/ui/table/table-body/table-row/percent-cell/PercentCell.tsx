import { isNumber } from "@/shared/utils/guards";
import { formatPercent } from "@/shared/utils/number";
import { CellContext } from "@tanstack/react-table";

interface PercentCellProps<TData> {
    cellInfo: CellContext<TData, unknown>;
}

export function PercentCell<TData>({ cellInfo }: PercentCellProps<TData>) {
    const value = cellInfo.getValue<number | null | undefined>();

    if (!isNumber(value)) return null;

    return <div className="w-full text-right">{formatPercent(value)}</div>;
}

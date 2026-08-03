import { formatUah } from "@/shared/utils/currency";
import { isNumber } from "@/shared/utils/guards";
import { CellContext } from "@tanstack/react-table";

interface CurrencyCellProps<TData> {
    cellInfo: CellContext<TData, unknown>;
}

export function CurrencyCell<TData>({ cellInfo }: CurrencyCellProps<TData>) {
    const value = cellInfo.getValue<number | null | undefined>();

    if (!isNumber(value)) return null;

    return <div className="w-full text-right">{formatUah(value)}</div>;
}

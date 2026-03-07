import { roundToPrecision } from "@/shared/utils/number";
import { CellContext } from "@tanstack/react-table";

interface NumberCellProps<TData> {
    cellInfo: CellContext<TData, unknown>;
}

export function NumberCell<TData>({ cellInfo }: NumberCellProps<TData>) {
    const value = cellInfo.getValue<number | null | undefined>();

    if (typeof value !== "number") return null;

    return <div className="w-full text-right">{roundToPrecision(value)}</div>;
}

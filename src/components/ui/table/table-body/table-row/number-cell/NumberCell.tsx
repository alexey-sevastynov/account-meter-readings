import { CellContext } from "@tanstack/react-table";

interface MrNumberCellProps<TData> {
    cellInfo: CellContext<TData, unknown>;
}

export function MrNumberCell<TData>({ cellInfo }: MrNumberCellProps<TData>) {
    const value = cellInfo.getValue<number | null | undefined>();

    if (typeof value !== "number") return null;

    return <div className="w-full text-right">{value}</div>;
}

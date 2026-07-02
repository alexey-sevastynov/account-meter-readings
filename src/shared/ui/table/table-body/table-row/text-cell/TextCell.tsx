import { CellContext } from "@tanstack/react-table";

interface TextCellProps<TData> {
    cellInfo: CellContext<TData, unknown>;
    className?: string;
}

export function TextCell<TData>({ cellInfo, className }: TextCellProps<TData>) {
    const value = cellInfo.getValue() as string | number | null | undefined;

    if (value === null || value === undefined) return null;

    return <div className={className}>{value}</div>;
}

import { HeaderContext } from "@tanstack/react-table";
import { roundToPrecision } from "@/shared/utils/number";

export function NumberFooterCell<TData>(props: HeaderContext<TData, unknown>) {
    const total = props.table.getFilteredRowModel().rows.reduce((sum, row) => {
        const value = row.getValue(props.column.id);

        return sum + (typeof value === "number" ? value : Number(value) || 0);
    }, 0);

    return <div className="w-full text-right">{roundToPrecision(total)}</div>;
}

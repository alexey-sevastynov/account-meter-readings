import { formatUah } from "@/shared/utils/currency";
import { isNumber } from "@/shared/utils/guards";
import { HeaderContext } from "@tanstack/react-table";

export function CurrencyFooterCell<TData>(props: HeaderContext<TData, unknown>) {
    const total = props.table.getFilteredRowModel().rows.reduce((sum, row) => {
        const value = row.getValue(props.column.id);

        return sum + (isNumber(value) ? value : Number(value) || 0);
    }, 0);

    return <div className="w-full text-right">{formatUah(total)}</div>;
}

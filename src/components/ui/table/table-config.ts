import { VoidFunc } from "@/types/getter-setter-functions";
import { Table } from "@tanstack/react-table";

export interface TableConfig<TData> {
    reactTable: Table<TData>;
    isLoading?: boolean;
    enableSorting?: boolean;
    enableResizing?: boolean;
    enableTableFooter?: boolean;
    noDataMessage?: string;
    onRowClick?: VoidFunc<TData>;
}

export function createTableConfig<TData>(
    reactTable: Table<TData>,
    isLoading?: boolean,
    noDataMessage?: string,
    enableSorting?: boolean,
    enableResizing?: boolean,
    enableTableFooter?: boolean,
    onRowClick?: VoidFunc<TData>,
): TableConfig<TData> {
    const tableConfig: TableConfig<TData> = {
        reactTable,
        isLoading: isLoading ?? true,
        noDataMessage,
        enableSorting: enableSorting ?? true,
        enableResizing: enableResizing ?? true,
        enableTableFooter: enableTableFooter ?? true,
        onRowClick,
    };

    return tableConfig;
}

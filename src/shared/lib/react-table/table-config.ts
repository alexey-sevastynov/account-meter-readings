import { VoidFunc } from "@/shared/types/getter-setter-functions";
import { Table } from "@tanstack/react-table";

export interface TableConfig<TData> {
    reactTable: Table<TData>;
    isLoading?: boolean;
    enableSorting?: boolean;
    enableResizing?: boolean;
    enableTableFooter?: boolean;
    stickyHeader?: boolean;
    noDataMessage?: string;
    onRowClick?: VoidFunc<TData>;
}

export function createTableConfig<TData>(tableConfig: TableConfig<TData>) {
    return {
        ...tableConfig,
        isLoading: tableConfig.isLoading ?? true,
        enableSorting: tableConfig.enableSorting ?? true,
        enableResizing: tableConfig.enableResizing ?? true,
        enableTableFooter: tableConfig.enableTableFooter ?? true,
        stickyHeader: tableConfig.stickyHeader ?? true,
    };
}

import { useState, useMemo } from "react";
import {
    useReactTable,
    getCoreRowModel,
    getSortedRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    SortingState,
    ColumnFiltersState,
    PaginationState,
    VisibilityState,
} from "@tanstack/react-table";
import { Table } from "@/shared/ui/table/Table";
import { TablePager } from "@/shared/ui/table-pager/TablePager";
import { Title } from "@/shared/ui/typography/title/Title";
import { Text } from "@/shared/ui/typography/text/Text";
import { TableToolbox } from "@/shared/ui/table-toolbox/TableToolbox";
import { Task } from "@/modules/task/types/task";
import { createTableConfig } from "@/shared/ui/table/table-config";
import { taskColumns } from "@/modules/task/configs/task-columns";
import { taskActionsColumn } from "@/modules/task/configs/task-actions";

interface TaskTableProps {
    data: Task[];
    isLoading?: boolean;
}

export function TaskTable({ data, isLoading }: TaskTableProps) {
    const [sorting, setSorting] = useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
    const [pagination, setPagination] = useState<PaginationState>({
        pageIndex: 0,
        pageSize: 10,
    });

    const finalColumns = useMemo(() => {
        const cols = [...taskColumns];
        cols.unshift(taskActionsColumn);

        return cols;
    }, []);

    const reactTable = useReactTable({
        data,
        columns: finalColumns,
        state: {
            sorting,
            columnFilters,
            columnVisibility,
            pagination,
        },
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        onColumnVisibilityChange: setColumnVisibility,
        onPaginationChange: setPagination,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        enableSorting: true,
        enableColumnResizing: true,
        columnResizeMode: "onChange",
    });

    return (
        <div className="w-full">
            <Title position="left">Coffee Shop</Title>
            <Text className="mt-1">Manage your tasks</Text>
            <TableToolbox columns={reactTable.getAllColumns()} />
            <Table config={createTableConfig(reactTable, isLoading, "Немає даних для відображення")} />
            <TablePager
                currentPage={reactTable.getState().pagination.pageIndex + 1}
                pageSize={reactTable.getState().pagination.pageSize}
                totalRows={reactTable.getFilteredRowModel().rows.length}
                pageCount={reactTable.getPageCount()}
                canNext={reactTable.getCanNextPage()}
                canPrevious={reactTable.getCanPreviousPage()}
                pageSizeOptions={[10, 20, 50]}
                onPageChange={(page) => reactTable.setPageIndex(page - 1)}
                onPageSizeChange={(size) => reactTable.setPageSize(size)}
            />
        </div>
    );
}

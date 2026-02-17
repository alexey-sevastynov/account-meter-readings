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
import { MrTable } from "@/components/ui/table/Table";
import { MrTablePager } from "@/components/ui/table-pager/TablePager";
import { MrTitle } from "@/components/ui/title/Title";
import { MrText } from "@/components/ui/text/Text";
import { MrTableToolbox } from "@/components/ui/table-toolbox/TableToolbox";
import { Task } from "@/models/task";
import { createTableConfig } from "@/components/ui/table/table-config";
import { taskColumns } from "@/features/task/config/task-columns";
import { taskActionsColumn } from "@/features/task/config/task-actions";

interface MrTaskTableProps {
    data: Task[];
    isLoading?: boolean;
}

export function MrTaskTable({ data, isLoading }: MrTaskTableProps) {
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
            <MrTitle position="left">Coffee Shop</MrTitle>
            <MrText className="mt-1">Manage your tasks</MrText>
            <MrTableToolbox columns={reactTable.getAllColumns()} />
            <MrTable config={createTableConfig(reactTable, isLoading, "Немає даних для відображення")} />
            <MrTablePager
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

import { useState } from "react";
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
    ColumnDef,
} from "@tanstack/react-table";
import { Title } from "@/shared/ui/typography/title/Title";
import { Text } from "@/shared/ui/typography/text/Text";
import { TableToolbox } from "@/shared/ui/table-toolbox/TableToolbox";
import { Table } from "@/shared/ui/table/Table";
import { createTableConfig } from "@/shared/lib/react-table/table-config";
import { TablePager } from "@/shared/ui/table-pager/TablePager";
import { FacilityExpense } from "@/modules/facility-expense/types/facility-expense";
import {
    deleteFacilityExpenseById,
    initializePaginationState,
    onEditExpense,
} from "@/modules/facility-expense/components/facility-expense-table/facilityExpenseTable.funcs";
import { createFacilityExpenseActionsColumn } from "@/modules/facility-expense/configs/facility-expense-actions";
import { facilityExpenseColumns } from "@/modules/facility-expense/configs/facility-expense-columns";
import { FacilityExpenseModals } from "@/modules/facility-expense/components/facility-expense-table/facility-expense-modals/FacilityExpenseModals";
import { textPositions } from "@/shared/ui/typography/text-position";

interface FacilityExpenseTableProps {
    data: FacilityExpense[];
    isLoading?: boolean;
}

export function FacilityExpenseTable({ data, isLoading }: FacilityExpenseTableProps) {
    const [sorting, setSorting] = useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
    const [pagination, setPagination] = useState<PaginationState>(initializePaginationState);
    const [editingExpense, setEditingExpense] = useState<FacilityExpense | null>(null);
    const [deletingExpenseId, setDeletingExpenseId] = useState<string | null>(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    function onDeleteExpense(expenseId?: string) {
        deleteFacilityExpenseById(data, setDeletingExpenseId, setIsDeleteModalOpen, expenseId);
    }

    const columns: ColumnDef<FacilityExpense>[] = [
        createFacilityExpenseActionsColumn(
            (id) => onDeleteExpense(id),
            (expense) => onEditExpense(expense, setEditingExpense),
        ),
        ...facilityExpenseColumns,
    ];

    const reactTable = useReactTable({
        data,
        columns,
        state: { sorting, columnFilters, columnVisibility, pagination },
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
        meta: {
            exportFileName: "facility-expenses",
            exportSheetName: "Оренда та утримання приміщення",
        },
    });

    return (
        <div className="w-full">
            <Title textPosition={textPositions.left}>Оренда та утримання приміщення</Title>
            <Text className="mt-1">Загальна кількість витрат: {data.length}</Text>
            <TableToolbox reactTable={reactTable} />
            <FacilityExpenseModals
                editingExpense={editingExpense}
                setEditingExpense={setEditingExpense}
                deletingExpenseId={deletingExpenseId}
                setDeletingExpenseId={setDeletingExpenseId}
                isDeleteModalOpen={isDeleteModalOpen}
                setIsDeleteModalOpen={setIsDeleteModalOpen}
            />
            <Table
                config={createTableConfig({
                    reactTable: reactTable,
                    isLoading: isLoading,
                    noDataMessage: "Немає даних для відображення",
                })}
            />
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

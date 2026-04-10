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
import { ExpenseReport } from "@/modules/expense-report/types/expense-report";
import {
    deleteExpenseReportById,
    initializePaginationState,
    onEditReport,
} from "@/modules/expense-report/components/expense-report-table/expenseReportTable.funcs";
import { createExpenseReportActionsColumn } from "@/modules/expense-report/configs/expense-report-actions";
import { expenseReportColumns } from "@/modules/expense-report/configs/expense-report-columns";
import { ExpenseReportModals } from "@/modules/expense-report/components/expense-report-table/expense-report-modals/ExpenseReportModals";

interface ExpenseReportTableProps {
    data: ExpenseReport[];
    isLoading?: boolean;
}

export function ExpenseReportTable({ data, isLoading }: ExpenseReportTableProps) {
    const [sorting, setSorting] = useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
    const [pagination, setPagination] = useState<PaginationState>(initializePaginationState);
    const [editingReport, setEditingReport] = useState<ExpenseReport | null>(null);
    const [deletingReportId, setDeletingReportId] = useState<string | null>(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    function onDeleteReport(reportId?: string) {
        deleteExpenseReportById(data, setDeletingReportId, setIsDeleteModalOpen, reportId);
    }

    const columns: ColumnDef<ExpenseReport>[] = [
        createExpenseReportActionsColumn(
            (id) => onDeleteReport(id),
            (report) => onEditReport(report, setEditingReport),
        ),
        ...expenseReportColumns,
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
    });

    return (
        <div className="w-full">
            <Title position="left">Звіти про витрати</Title>
            <Text className="mt-1">Загальна кількість звітів: {data.length}</Text>
            <TableToolbox columns={reactTable.getAllColumns()} />
            <ExpenseReportModals
                editingReport={editingReport}
                setEditingReport={setEditingReport}
                deletingReportId={deletingReportId}
                setDeletingReportId={setDeletingReportId}
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

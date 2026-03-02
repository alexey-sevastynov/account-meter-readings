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

import {
    deleteDailyReportById,
    initializePaginationState,
    onEditReport,
} from "@/modules/daily-report/components/daily-report-table/dailyReportTable.funcs";
import { MrDailyReportModals } from "@/modules/daily-report/components/daily-report-table/daily-report-modals/DailyReportModals";
import { DailyReport } from "@/modules/daily-report/types/daily-report";
import { createDailyReportActionsColumn } from "@/modules/daily-report/configs/daily-report-actions";
import { dailyReportColumns } from "@/modules/daily-report/configs/daily-report-columns";
import { MrTitle } from "@/shared/ui/typography/title/Title";
import { MrText } from "@/shared/ui/typography/text/Text";
import { MrTableToolbox } from "@/shared/ui/table-toolbox/TableToolbox";
import { MrTable } from "@/shared/ui/table/Table";
import { createTableConfig } from "@/shared/ui/table/table-config";
import { MrTablePager } from "@/shared/ui/table-pager/TablePager";

interface MrDailyReportTableProps {
    data: DailyReport[];
    isLoading?: boolean;
}

export function MrDailyReportTable({ data, isLoading }: MrDailyReportTableProps) {
    const [sorting, setSorting] = useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
    const [pagination, setPagination] = useState<PaginationState>(initializePaginationState);
    const [editingReport, setEditingReport] = useState<DailyReport | null>(null);
    const [deletingReportId, setDeletingReportId] = useState<string | null>(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    function onDeleteReport(reportId?: string) {
        deleteDailyReportById(data, setDeletingReportId, setIsDeleteModalOpen, reportId);
    }

    const columns: ColumnDef<DailyReport>[] = [
        createDailyReportActionsColumn(
            (id) => onDeleteReport(id),
            (report) => onEditReport(report, setEditingReport),
        ),
        ...dailyReportColumns,
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
            <MrTitle position="left">Щоденні звіти</MrTitle>
            <MrText className="mt-1">Загальна кількість звітів: {data.length}</MrText>
            <MrTableToolbox columns={reactTable.getAllColumns()} />
            <MrDailyReportModals
                editingReport={editingReport}
                setEditingReport={setEditingReport}
                deletingReportId={deletingReportId}
                setDeletingReportId={setDeletingReportId}
                isDeleteModalOpen={isDeleteModalOpen}
                setIsDeleteModalOpen={setIsDeleteModalOpen}
            />
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

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
import { textPositions } from "@/shared/ui/typography/text-position";
import { OwnerWithdrawal } from "@/modules/owner-withdrawal/types/owner-withdrawal";
import {
    deleteOwnerWithdrawalById,
    initializePaginationState,
    onEditWithdrawal,
} from "@/modules/owner-withdrawal/components/owner-withdrawal-table/ownerWithdrawalTable.funcs";
import { createOwnerWithdrawalActionsColumn } from "@/modules/owner-withdrawal/configs/owner-withdrawal-actions";
import { ownerWithdrawalColumns } from "@/modules/owner-withdrawal/configs/owner-withdrawal-columns";
import { OwnerWithdrawalModals } from "@/modules/owner-withdrawal/components/owner-withdrawal-table/owner-withdrawal-modals/OwnerWithdrawalModals";

interface OwnerWithdrawalTableProps {
    data: OwnerWithdrawal[];
    isLoading?: boolean;
}

export function OwnerWithdrawalTable({ data, isLoading }: OwnerWithdrawalTableProps) {
    const [sorting, setSorting] = useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
    const [pagination, setPagination] = useState<PaginationState>(initializePaginationState);
    const [editingWithdrawal, setEditingWithdrawal] = useState<OwnerWithdrawal | null>(null);
    const [deletingWithdrawalId, setDeletingWithdrawalId] = useState<string | null>(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    function onDeleteWithdrawal(withdrawalId?: string) {
        deleteOwnerWithdrawalById(data, setDeletingWithdrawalId, setIsDeleteModalOpen, withdrawalId);
    }

    const columns: ColumnDef<OwnerWithdrawal>[] = [
        createOwnerWithdrawalActionsColumn(
            (id) => onDeleteWithdrawal(id),
            (withdrawal) => onEditWithdrawal(withdrawal, setEditingWithdrawal),
        ),
        ...ownerWithdrawalColumns,
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
            exportFileName: "owner-withdrawals",
            exportSheetName: "Виведення коштів власником",
        },
    });

    return (
        <div className="w-full">
            <Title textPosition={textPositions.left}>Виведення коштів власником</Title>
            <Text className="mt-1">Загальна кількість виведень: {data.length}</Text>
            <TableToolbox reactTable={reactTable} />
            <OwnerWithdrawalModals
                editingWithdrawal={editingWithdrawal}
                setEditingWithdrawal={setEditingWithdrawal}
                deletingWithdrawalId={deletingWithdrawalId}
                setDeletingWithdrawalId={setDeletingWithdrawalId}
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

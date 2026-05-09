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
import { InventoryAudit } from "@/modules/inventory-audit/types/inventory-audit";
import {
    deleteInventoryAuditById,
    initializePaginationState,
    onEditAudit,
} from "@/modules/inventory-audit/components/inventory-audit-table/inventoryAuditTable.funcs";
import { createInventoryAuditActionsColumn } from "@/modules/inventory-audit/configs/inventory-audit-actions";
import { inventoryAuditColumns } from "@/modules/inventory-audit/configs/inventory-audit-columns";
import { InventoryAuditModals } from "@/modules/inventory-audit/components/inventory-audit-table/inventory-audit-modals/InventoryAuditModals";

interface InventoryAuditTableProps {
    data: InventoryAudit[];
    isLoading?: boolean;
}

export function InventoryAuditTable({ data, isLoading }: InventoryAuditTableProps) {
    const [sorting, setSorting] = useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
    const [pagination, setPagination] = useState<PaginationState>(initializePaginationState);
    const [editingAudit, setEditingAudit] = useState<InventoryAudit | null>(null);
    const [deletingAuditId, setDeletingAuditId] = useState<string | null>(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    function onDeleteAudit(auditId?: string) {
        deleteInventoryAuditById(data, setDeletingAuditId, setIsDeleteModalOpen, auditId);
    }

    const columns: ColumnDef<InventoryAudit>[] = [
        createInventoryAuditActionsColumn(
            (id) => onDeleteAudit(id),
            (audit) => onEditAudit(audit, setEditingAudit),
        ),
        ...inventoryAuditColumns,
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
            <Title textPosition={textPositions.left}>Аудит інвентаризації</Title>
            <Text className="mt-1">Загальна кількість аудитів: {data.length}</Text>
            <TableToolbox columns={reactTable.getAllColumns()} />
            <InventoryAuditModals
                editingAudit={editingAudit}
                setEditingAudit={setEditingAudit}
                deletingAuditId={deletingAuditId}
                setDeletingAuditId={setDeletingAuditId}
                isDeleteModalOpen={isDeleteModalOpen}
                setIsDeleteModalOpen={setIsDeleteModalOpen}
            />
            <Table
                config={createTableConfig({
                    reactTable,
                    isLoading,
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

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
} from "@tanstack/react-table";
import { Table } from "@/shared/ui/table/Table";
import { TablePager } from "@/shared/ui/table-pager/TablePager";
import { Title } from "@/shared/ui/typography/title/Title";
import { Text } from "@/shared/ui/typography/text/Text";
import { TableToolbox } from "@/shared/ui/table-toolbox/TableToolbox";
import { createTableConfig } from "@/shared/ui/table/table-config";
import { employeeColumns } from "@/modules/employee/configs/employee-columns";
import { Employee } from "@/modules/employee/types/employee";
import { createEmployeeActionsColumn } from "@/modules/employee/configs/employee-actions";
import {
    deleteEmployeeById,
    initializePaginationState,
} from "@/modules/employee/components/employee-table/employeeTable.funcs";
import { EmployeeModals } from "@/modules/employee/components/employee-table/employee-modals/EmolyeeModals";

interface EmployeeTableProps {
    data: Employee[];
    isLoading?: boolean;
}

// eslint-disable-next-line max-lines-per-function
export function EmployeeTable({ data, isLoading }: EmployeeTableProps) {
    const [sorting, setSorting] = useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
    const [pagination, setPagination] = useState<PaginationState>(initializePaginationState);
    const [editingEmployee, setEditingEmployee] = useState<Employee | null>(null);
    const [deletingEmployeeId, setDeletingEmployeeId] = useState<string | null>(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    function onEditEmployee(employee: Employee) {
        setEditingEmployee(employee);
    }

    function onDeleteEmployee(employeeId?: string) {
        deleteEmployeeById(data, setDeletingEmployeeId, setIsDeleteModalOpen, employeeId);
    }

    const columns = [createEmployeeActionsColumn(onDeleteEmployee, onEditEmployee), ...employeeColumns];
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
            <Title position="left">Список працівників</Title>
            <Text className="mt-1">Загальна кількість працівників: {data.length}</Text>
            <TableToolbox columns={reactTable.getAllColumns()} />
            <EmployeeModals
                editingEmployee={editingEmployee}
                setEditingEmployee={setEditingEmployee}
                deletingReportId={deletingEmployeeId}
                setDeletingReportId={setDeletingEmployeeId}
                isDeleteModalOpen={isDeleteModalOpen}
                setIsDeleteModalOpen={setIsDeleteModalOpen}
            />
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

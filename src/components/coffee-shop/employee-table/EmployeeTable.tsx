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
import { MrTable } from "@/components/ui/table/Table";
import { MrTablePager } from "@/components/ui/table-pager/TablePager";
import { MrTitle } from "@/components/ui/title/Title";
import { MrText } from "@/components/ui/text/Text";
import { MrTableToolbox } from "@/components/ui/table-toolbox/TableToolbox";
import { createTableConfig } from "@/components/ui/table/table-config";
import { employeeColumns } from "@/features/coffee-shop/employee/config/employee-columns";
import { Employee } from "@/models/employee";
import {
    createEmployee,
    deleteEmployee,
    updateEmployee,
} from "@/features/coffee-shop/employee/employee-thunks";
import { useAppDispatch } from "@/hooks/use-app-dispatch";
import { createEmployeeActionsColumn } from "@/features/coffee-shop/employee/config/employee-actions";
import { MrResourceFormModal } from "@/components/shared/resource-form-modal/ResourceFormModal";
import { employeeFormFields } from "@/features/coffee-shop/employee/config/emloyee-form-fields";
import { formModes } from "@/enums/ui/form-mode";
import { MrEmployeeDeleteModal } from "@/components/coffee-shop/employee-table/employee-delete-modal/EmployeeDeleteModal";
import {
    closeDeleteConfirmModal,
    deleteEmployeeById,
    initializePaginationState,
} from "@/components/coffee-shop/employee-table/employeeTable.funcs";
import { getTodayDate } from "@/utils/date";

interface MrEmployeeTableProps {
    data: Employee[];
    isLoading?: boolean;
}

export function MrEmployeeTable({ data, isLoading }: MrEmployeeTableProps) {
    const dispatch = useAppDispatch();
    const [sorting, setSorting] = useState<SortingState>([]);
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
    const [pagination, setPagination] = useState<PaginationState>(initializePaginationState);
    const [editingEmployee, setEditingEmployee] = useState<Employee | null>(null);
    const [deletingEmployeeId, setDeletingEmployeeId] = useState<string | null>(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    function handleDeleteConfirmed() {
        if (!deletingEmployeeId) return;

        dispatch(deleteEmployee(deletingEmployeeId));
        closeDeleteConfirmModal(setDeletingEmployeeId, setIsDeleteModalOpen);
    }

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

    function handleDeleteModalOpenChange(open: boolean) {
        if (!open) closeDeleteConfirmModal(setDeletingEmployeeId, setIsDeleteModalOpen);
    }

    return (
        <div className="w-full">
            <MrTitle position="left">Список працівників</MrTitle>
            <MrText className="mt-1">Загальна кількість працівників: {data.length}</MrText>
            <MrTableToolbox columns={reactTable.getAllColumns()} />
            <MrEmployeeDeleteModal
                open={isDeleteModalOpen}
                onOpenChange={handleDeleteModalOpenChange}
                onConfirm={handleDeleteConfirmed}
            />
            <MrResourceFormModal<Employee>
                fields={employeeFormFields}
                onSubmit={(employee: Employee) => dispatch(createEmployee(employee))}
                formMode={formModes.create}
                addButtonLabel="Додати працівника"
                createTitle="Створити працівника"
                defaultValues={{ employmentStartDate: getTodayDate() }}
            />
            {editingEmployee && (
                <MrResourceFormModal<Employee>
                    fields={employeeFormFields}
                    onSubmit={(employee: Employee) => dispatch(updateEmployee(employee))}
                    formMode={formModes.edit}
                    defaultValues={editingEmployee}
                    onClose={() => setEditingEmployee(null)}
                    editTitle="Редагувати працівника"
                />
            )}
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

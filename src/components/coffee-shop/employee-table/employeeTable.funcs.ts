import { Employee } from "@/models/employee";
import { VoidFunc } from "@/types/getter-setter-functions";
import { PaginationState } from "@tanstack/react-table";

export function closeDeleteConfirmModal(
    setDeletingEmployeeId: VoidFunc<string | null>,
    setIsDeleteModalOpen: VoidFunc<boolean>,
) {
    setDeletingEmployeeId(null);
    setIsDeleteModalOpen(false);
}

export function deleteEmployeeById(
    employees: Employee[],
    setDeletingEmployeeId: VoidFunc<string>,
    setIsDeleteModalOpen: VoidFunc<boolean>,
    employeeId?: string,
) {
    if (!employeeId) return;

    const employee = employees.find((e) => e._id === employeeId);

    if (!employee) return;

    openDeleteConfirmModal(employee, setDeletingEmployeeId, setIsDeleteModalOpen);
}

export function initializePaginationState() {
    const defaultPageSize = 10 as const;

    const paginationState: PaginationState = {
        pageIndex: 0,
        pageSize: defaultPageSize,
    };

    return paginationState;
}

function openDeleteConfirmModal(
    employee: Employee,
    setDeletingEmployeeId: VoidFunc<string>,
    setIsDeleteModalOpen: VoidFunc<boolean>,
) {
    if (!employee._id) return;

    setDeletingEmployeeId(employee._id);
    setIsDeleteModalOpen(true);
}

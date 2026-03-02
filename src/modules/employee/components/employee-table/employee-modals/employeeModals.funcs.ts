import { AppDispatch } from "@/store";
import {
    createEmployee,
    deleteEmployee,
    getAllEmployees,
    updateEmployee,
} from "@/modules/employee/model/employee-thunks";
import { Employee } from "@/modules/employee/types/employee";
import { VoidFunc } from "@/shared/types/getter-setter-functions";

export function closeDeleteConfirmModal(
    setDeletingEmployeeId: VoidFunc<string | null>,
    setIsDeleteModalOpen: VoidFunc<boolean>,
) {
    setDeletingEmployeeId(null);
    setIsDeleteModalOpen(false);
}

export async function onDeleteConfirmed(
    deletingEmployeeId: string | null,
    setIsDeleting: VoidFunc<boolean>,
    dispatch: AppDispatch,
    setIsDeleteModalOpen: VoidFunc<boolean>,
    setDeletingReportId: VoidFunc<string | null>,
) {
    if (!deletingEmployeeId) return;

    try {
        setIsDeleting(true);

        await dispatch(deleteEmployee(deletingEmployeeId)).unwrap();

        closeDeleteConfirmModal(setDeletingReportId, setIsDeleteModalOpen);
    } catch (error) {
        console.error(error);
    } finally {
        setIsDeleting(false);
    }
}

export async function onCreateEmployee(
    employee: Employee,
    dispatch: AppDispatch,
    setIsCreating: VoidFunc<boolean>,
) {
    try {
        setIsCreating(true);

        await dispatch(createEmployee(employee)).unwrap();
        await dispatch(getAllEmployees());
    } finally {
        setIsCreating(false);
    }
}

export async function onUpdateEmployee(
    employee: Employee,
    dispatch: AppDispatch,
    setIsUpdating: VoidFunc<boolean>,
    setEditingEmployee: VoidFunc<Employee | null>,
) {
    try {
        setIsUpdating(true);

        await dispatch(updateEmployee(employee)).unwrap();
        await dispatch(getAllEmployees());

        setEditingEmployee(null);
    } finally {
        setIsUpdating(false);
    }
}

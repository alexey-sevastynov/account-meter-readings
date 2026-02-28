import { useState } from "react";
import { useAppDispatch } from "@/hooks/use-app-dispatch";
import { VoidFunc } from "@/types/getter-setter-functions";
import { getTodayDate } from "@/utils/date";
import { MrResourceFormModal } from "@/components/shared/resource-form-modal/ResourceFormModal";
import { formModes } from "@/enums/ui/form-mode";
import { Employee } from "@/models/employee";
import { employeeFormFields } from "@/features/coffee-shop/employee/config/employee-form-fields";
import { MrEmployeeDeleteModal } from "@/components/coffee-shop/employee-table/employee-modals/employee-delete-modal/EmployeeDeleteModal";
import {
    closeDeleteConfirmModal,
    onCreateEmployee,
    onDeleteConfirmed,
    onUpdateEmployee,
} from "@/components/coffee-shop/employee-table/employee-modals/employeeModals.funcs";

interface EmployeeModalsProps {
    editingEmployee: Employee | null;
    setEditingEmployee: VoidFunc<Employee | null>;
    deletingReportId: string | null;
    setDeletingReportId: VoidFunc<string | null>;
    isDeleteModalOpen: boolean;
    setIsDeleteModalOpen: VoidFunc<boolean>;
}

export function EmployeeModals({
    editingEmployee,
    setEditingEmployee,
    deletingReportId,
    setDeletingReportId,
    isDeleteModalOpen,
    setIsDeleteModalOpen,
}: EmployeeModalsProps) {
    const dispatch = useAppDispatch();
    const [isDeleting, setIsDeleting] = useState(false);
    const [isCreating, setIsCreating] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);

    function handleDeleteModalOpenChange(open: boolean) {
        if (!open) closeDeleteConfirmModal(setDeletingReportId, setIsDeleteModalOpen);
    }

    return (
        <>
            <MrEmployeeDeleteModal
                open={isDeleteModalOpen}
                onOpenChange={handleDeleteModalOpenChange}
                onConfirm={() =>
                    onDeleteConfirmed(
                        deletingReportId,
                        setIsDeleting,
                        dispatch,
                        setIsDeleteModalOpen,
                        setDeletingReportId,
                    )
                }
                loading={isDeleting}
            />
            <MrResourceFormModal<Employee>
                fields={employeeFormFields}
                onSubmit={async (employee: Employee) => onCreateEmployee(employee, dispatch, setIsCreating)}
                formMode={formModes.create}
                addButtonLabel="Додати працівника"
                createTitle="Створити працівника"
                defaultValues={{ employmentStartDate: getTodayDate() }}
                loading={isCreating}
            />
            {editingEmployee && (
                <MrResourceFormModal<Employee>
                    fields={employeeFormFields}
                    onSubmit={async (employee: Employee) =>
                        onUpdateEmployee(employee, dispatch, setIsUpdating, setEditingEmployee)
                    }
                    formMode={formModes.edit}
                    defaultValues={editingEmployee}
                    onClose={() => setEditingEmployee(null)}
                    editTitle="Редагувати працівника"
                    loading={isUpdating}
                />
            )}
        </>
    );
}

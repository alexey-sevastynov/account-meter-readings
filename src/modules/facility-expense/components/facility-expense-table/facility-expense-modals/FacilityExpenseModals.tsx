import { useState } from "react";
import { FacilityExpenseDeleteModal } from "@/modules/facility-expense/components/facility-expense-table/facility-expense-modals/facility-expense-delete-modal/FacilityExpenseDeleteModal";
import { formModes } from "@/shared/ui/form/form-mode";
import {
    closeDeleteConfirmModal,
    defaultFacilityExpenseValues,
    onCreateExpense,
    onDeleteConfirmed,
    onUpdateExpense,
} from "@/modules/facility-expense/components/facility-expense-table/facility-expense-modals/facilityExpenseModals.funcs";
import { FacilityExpense } from "@/modules/facility-expense/types/facility-expense";
import { VoidFunc } from "@/shared/types/getter-setter-functions";
import { useAppDispatch } from "@/shared/lib/redux/hooks/use-app-dispatch";
import { ResourceFormModal } from "@/shared/ui/form/resource-form-modal/ResourceFormModal";
import { facilityExpenseFormFields } from "@/modules/facility-expense/configs/facility-expense-form-fields";

interface FacilityExpenseModalsProps {
    editingExpense: FacilityExpense | null;
    setEditingExpense: VoidFunc<FacilityExpense | null>;
    deletingExpenseId: string | null;
    setDeletingExpenseId: VoidFunc<string | null>;
    isDeleteModalOpen: boolean;
    setIsDeleteModalOpen: VoidFunc<boolean>;
}

export function FacilityExpenseModals({
    editingExpense,
    setEditingExpense,
    deletingExpenseId,
    setDeletingExpenseId,
    isDeleteModalOpen,
    setIsDeleteModalOpen,
}: FacilityExpenseModalsProps) {
    const dispatch = useAppDispatch();
    const [isDeleting, setIsDeleting] = useState(false);
    const [isCreating, setIsCreating] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);

    function handleDeleteModalOpenChange(open: boolean) {
        if (!open) closeDeleteConfirmModal(setDeletingExpenseId, setIsDeleteModalOpen);
    }

    return (
        <>
            <FacilityExpenseDeleteModal
                open={isDeleteModalOpen}
                onOpenChange={handleDeleteModalOpenChange}
                onConfirm={() =>
                    onDeleteConfirmed(
                        deletingExpenseId,
                        setIsDeleting,
                        dispatch,
                        setIsDeleteModalOpen,
                        setDeletingExpenseId,
                    )
                }
                isDeleting={isDeleting}
            />
            <ResourceFormModal<FacilityExpense>
                fields={facilityExpenseFormFields}
                onSubmit={async (expense: FacilityExpense) =>
                    onCreateExpense(expense, dispatch, setIsCreating)
                }
                formMode={formModes.create}
                addButtonLabel="Додати витрату"
                createTitle="Створити витрату закладу"
                loading={isCreating}
                defaultValues={defaultFacilityExpenseValues}
            />
            {editingExpense && (
                <ResourceFormModal<FacilityExpense>
                    fields={facilityExpenseFormFields}
                    onSubmit={async (expense: FacilityExpense) =>
                        onUpdateExpense(expense, dispatch, setIsUpdating, setEditingExpense)
                    }
                    formMode={formModes.edit}
                    onClose={() => setEditingExpense(null)}
                    editTitle="Редагувати витрату закладу"
                    defaultValues={editingExpense}
                    loading={isUpdating}
                />
            )}
        </>
    );
}

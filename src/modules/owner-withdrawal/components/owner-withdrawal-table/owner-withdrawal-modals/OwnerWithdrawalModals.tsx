import { useState } from "react";
import { formModes } from "@/shared/ui/form/form-mode";
import { VoidFunc } from "@/shared/types/getter-setter-functions";
import { useAppDispatch } from "@/shared/lib/redux/hooks/use-app-dispatch";
import { ResourceFormModal } from "@/shared/ui/form/resource-form-modal/ResourceFormModal";
import { OwnerWithdrawal } from "@/modules/owner-withdrawal/types/owner-withdrawal";
import { ownerWithdrawalFormFields } from "@/modules/owner-withdrawal/configs/owner-withdrawal-form-fields";
import { OwnerWithdrawalDeleteModal } from "@/modules/owner-withdrawal/components/owner-withdrawal-table/owner-withdrawal-modals/owner-withdrawal-delete-modal/OwnerWithdrawalDeleteModal";
import {
    closeDeleteConfirmModal,
    defaultOwnerWithdrawalValues,
    onCreateWithdrawal,
    onDeleteConfirmed,
    onUpdateWithdrawal,
} from "@/modules/owner-withdrawal/components/owner-withdrawal-table/owner-withdrawal-modals/ownerWithdrawalModals.funcs";

interface OwnerWithdrawalModalsProps {
    editingWithdrawal: OwnerWithdrawal | null;
    setEditingWithdrawal: VoidFunc<OwnerWithdrawal | null>;
    deletingWithdrawalId: string | null;
    setDeletingWithdrawalId: VoidFunc<string | null>;
    isDeleteModalOpen: boolean;
    setIsDeleteModalOpen: VoidFunc<boolean>;
}

export function OwnerWithdrawalModals({
    editingWithdrawal,
    setEditingWithdrawal,
    deletingWithdrawalId,
    setDeletingWithdrawalId,
    isDeleteModalOpen,
    setIsDeleteModalOpen,
}: OwnerWithdrawalModalsProps) {
    const dispatch = useAppDispatch();
    const [isDeleting, setIsDeleting] = useState(false);
    const [isCreating, setIsCreating] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);

    function handleDeleteModalOpenChange(open: boolean) {
        if (!open) closeDeleteConfirmModal(setDeletingWithdrawalId, setIsDeleteModalOpen);
    }

    return (
        <>
            <OwnerWithdrawalDeleteModal
                open={isDeleteModalOpen}
                onOpenChange={handleDeleteModalOpenChange}
                onConfirm={() =>
                    onDeleteConfirmed(
                        deletingWithdrawalId,
                        setIsDeleting,
                        dispatch,
                        setIsDeleteModalOpen,
                        setDeletingWithdrawalId,
                    )
                }
                isDeleting={isDeleting}
            />
            <ResourceFormModal<OwnerWithdrawal>
                fields={ownerWithdrawalFormFields}
                onSubmit={async (withdrawal: OwnerWithdrawal) =>
                    onCreateWithdrawal(withdrawal, dispatch, setIsCreating)
                }
                formMode={formModes.create}
                addButtonLabel="Додати виведення"
                createTitle="Створити виведення коштів"
                loading={isCreating}
                defaultValues={defaultOwnerWithdrawalValues}
            />
            {editingWithdrawal && (
                <ResourceFormModal<OwnerWithdrawal>
                    fields={ownerWithdrawalFormFields}
                    onSubmit={async (withdrawal: OwnerWithdrawal) =>
                        onUpdateWithdrawal(withdrawal, dispatch, setIsUpdating, setEditingWithdrawal)
                    }
                    formMode={formModes.edit}
                    onClose={() => setEditingWithdrawal(null)}
                    editTitle="Редагувати виведення коштів"
                    defaultValues={editingWithdrawal}
                    loading={isUpdating}
                />
            )}
        </>
    );
}

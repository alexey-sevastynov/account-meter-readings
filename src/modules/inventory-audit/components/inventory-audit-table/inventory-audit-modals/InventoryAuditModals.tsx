import { useState } from "react";
import { formModes } from "@/shared/ui/form/form-mode";
import { VoidFunc } from "@/shared/types/getter-setter-functions";
import { useAppDispatch } from "@/shared/lib/redux/hooks/use-app-dispatch";
import { ResourceFormModal } from "@/shared/ui/form/resource-form-modal/ResourceFormModal";
import { InventoryAudit } from "@/modules/inventory-audit/types/inventory-audit";
import { inventoryAuditFormFields } from "@/modules/inventory-audit/configs/inventory-audit-form-fields";
import { InventoryAuditDeleteModal } from "@/modules/inventory-audit/components/inventory-audit-table/inventory-audit-modals/inventory-audit-delete-modal/InventoryAuditDeleteModal";
import {
    closeDeleteConfirmModal,
    onCreateAudit,
    onDeleteConfirmed,
    onUpdateAudit,
} from "@/modules/inventory-audit/components/inventory-audit-table/inventory-audit-modals/inventoryAuditModals.funcs";

interface InventoryAuditModalsProps {
    editingAudit: InventoryAudit | null;
    setEditingAudit: VoidFunc<InventoryAudit | null>;
    deletingAuditId: string | null;
    setDeletingAuditId: VoidFunc<string | null>;
    isDeleteModalOpen: boolean;
    setIsDeleteModalOpen: VoidFunc<boolean>;
}

export function InventoryAuditModals({
    editingAudit,
    setEditingAudit,
    deletingAuditId,
    setDeletingAuditId,
    isDeleteModalOpen,
    setIsDeleteModalOpen,
}: InventoryAuditModalsProps) {
    const dispatch = useAppDispatch();
    const [isDeleting, setIsDeleting] = useState(false);
    const [isCreating, setIsCreating] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);

    function handleDeleteModalOpenChange(open: boolean) {
        if (!open) closeDeleteConfirmModal(setDeletingAuditId, setIsDeleteModalOpen);
    }

    return (
        <>
            <InventoryAuditDeleteModal
                open={isDeleteModalOpen}
                onOpenChange={handleDeleteModalOpenChange}
                onConfirm={() =>
                    onDeleteConfirmed(
                        deletingAuditId,
                        setIsDeleting,
                        dispatch,
                        setIsDeleteModalOpen,
                        setDeletingAuditId,
                    )
                }
                isDeleting={isDeleting}
            />
            <ResourceFormModal<InventoryAudit>
                fields={inventoryAuditFormFields}
                onSubmit={async (audit: InventoryAudit) => onCreateAudit(audit, dispatch, setIsCreating)}
                formMode={formModes.create}
                addButtonLabel="Додати аудит"
                createTitle="Створити аудит інвентаризації"
                loading={isCreating}
            />
            {editingAudit && (
                <ResourceFormModal<InventoryAudit>
                    fields={inventoryAuditFormFields}
                    onSubmit={async (audit: InventoryAudit) =>
                        onUpdateAudit(audit, dispatch, setIsUpdating, setEditingAudit)
                    }
                    formMode={formModes.edit}
                    onClose={() => setEditingAudit(null)}
                    editTitle="Редагувати аудит інвентаризації"
                    defaultValues={editingAudit}
                    loading={isUpdating}
                />
            )}
        </>
    );
}

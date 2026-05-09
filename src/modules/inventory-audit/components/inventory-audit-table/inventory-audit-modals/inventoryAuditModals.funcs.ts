import { AppDispatch } from "@/store";
import { VoidFunc } from "@/shared/types/getter-setter-functions";
import {
    createInventoryAudit,
    deleteInventoryAudit,
    getAllInventoryAudits,
    updateInventoryAudit,
} from "@/modules/inventory-audit/model/inventory-audit-thunks";
import { InventoryAudit } from "@/modules/inventory-audit/types/inventory-audit";

export function closeDeleteConfirmModal(
    setDeletingAuditId: VoidFunc<string | null>,
    setIsDeleteModalOpen: VoidFunc<boolean>,
) {
    setDeletingAuditId(null);
    setIsDeleteModalOpen(false);
}

export async function onDeleteConfirmed(
    deletingAuditId: string | null,
    setIsDeleting: VoidFunc<boolean>,
    dispatch: AppDispatch,
    setIsDeleteModalOpen: VoidFunc<boolean>,
    setDeletingAuditId: VoidFunc<string | null>,
) {
    if (!deletingAuditId) return;

    try {
        setIsDeleting(true);

        await dispatch(deleteInventoryAudit(deletingAuditId)).unwrap();

        closeDeleteConfirmModal(setDeletingAuditId, setIsDeleteModalOpen);
    } catch (error) {
        console.error(error);
    } finally {
        setIsDeleting(false);
    }
}

export async function onCreateAudit(
    audit: InventoryAudit,
    dispatch: AppDispatch,
    setIsCreating: VoidFunc<boolean>,
) {
    try {
        setIsCreating(true);

        await dispatch(createInventoryAudit(audit)).unwrap();
        await dispatch(getAllInventoryAudits());
    } finally {
        setIsCreating(false);
    }
}

export async function onUpdateAudit(
    audit: InventoryAudit,
    dispatch: AppDispatch,
    setIsUpdating: VoidFunc<boolean>,
    setEditingAudit: VoidFunc<InventoryAudit | null>,
) {
    try {
        setIsUpdating(true);

        await dispatch(updateInventoryAudit(audit)).unwrap();
        await dispatch(getAllInventoryAudits());

        setEditingAudit(null);
    } finally {
        setIsUpdating(false);
    }
}

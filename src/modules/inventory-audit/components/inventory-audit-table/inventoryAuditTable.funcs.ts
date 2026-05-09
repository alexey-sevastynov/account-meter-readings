import { PaginationState } from "@tanstack/react-table";
import { VoidFunc } from "@/shared/types/getter-setter-functions";
import { InventoryAudit } from "@/modules/inventory-audit/types/inventory-audit";

export function deleteInventoryAuditById(
    audits: InventoryAudit[],
    setDeletingAuditId: VoidFunc<string>,
    setIsDeleteModalOpen: VoidFunc<boolean>,
    auditId?: string,
) {
    if (!auditId) return;

    const audit = audits.find((item) => item._id === auditId);

    if (!audit) return;

    openDeleteConfirmModal(audit, setDeletingAuditId, setIsDeleteModalOpen);
}

export function initializePaginationState() {
    const defaultPageSize = 10 as const;
    return {
        pageIndex: 0,
        pageSize: defaultPageSize,
    } as PaginationState;
}

export function onEditAudit(audit: InventoryAudit, setEditingAudit: VoidFunc<InventoryAudit>) {
    setEditingAudit(audit);
}

function openDeleteConfirmModal(
    audit: InventoryAudit,
    setDeletingAuditId: VoidFunc<string>,
    setIsDeleteModalOpen: VoidFunc<boolean>,
) {
    if (!audit._id) return;

    setDeletingAuditId(audit._id);
    setIsDeleteModalOpen(true);
}

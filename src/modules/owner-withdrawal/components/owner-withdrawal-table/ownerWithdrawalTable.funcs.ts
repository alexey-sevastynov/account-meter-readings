import { PaginationState } from "@tanstack/react-table";
import { VoidFunc } from "@/shared/types/getter-setter-functions";
import { OwnerWithdrawal } from "@/modules/owner-withdrawal/types/owner-withdrawal";

export function deleteOwnerWithdrawalById(
    withdrawals: OwnerWithdrawal[],
    setDeletingWithdrawalId: VoidFunc<string>,
    setIsDeleteModalOpen: VoidFunc<boolean>,
    withdrawalId?: string,
) {
    if (!withdrawalId) return;

    const withdrawal = withdrawals.find((item) => item._id === withdrawalId);

    if (!withdrawal) return;

    openDeleteConfirmModal(withdrawal, setDeletingWithdrawalId, setIsDeleteModalOpen);
}

export function initializePaginationState() {
    const defaultPageSize = 10 as const;

    return {
        pageIndex: 0,
        pageSize: defaultPageSize,
    } as PaginationState;
}

export function onEditWithdrawal(
    withdrawal: OwnerWithdrawal,
    setEditingWithdrawal: VoidFunc<OwnerWithdrawal>,
) {
    const mappedWithdrawal: OwnerWithdrawal = {
        ...withdrawal,
    };

    setEditingWithdrawal(mappedWithdrawal);
}

function openDeleteConfirmModal(
    withdrawal: OwnerWithdrawal,
    setDeletingWithdrawalId: VoidFunc<string>,
    setIsDeleteModalOpen: VoidFunc<boolean>,
) {
    if (!withdrawal._id) return;

    setDeletingWithdrawalId(withdrawal._id);
    setIsDeleteModalOpen(true);
}

import { AppDispatch } from "@/store";
import { VoidFunc } from "@/shared/types/getter-setter-functions";
import { getTodayDate } from "@/shared/utils/date";
import {
    createOwnerWithdrawal,
    deleteOwnerWithdrawal,
    getAllOwnerWithdrawals,
    updateOwnerWithdrawal,
} from "@/modules/owner-withdrawal/model/owner-withdrawal-thunks";
import { OwnerWithdrawal } from "@/modules/owner-withdrawal/types/owner-withdrawal";

export function closeDeleteConfirmModal(
    setDeletingWithdrawalId: VoidFunc<string | null>,
    setIsDeleteModalOpen: VoidFunc<boolean>,
) {
    setDeletingWithdrawalId(null);
    setIsDeleteModalOpen(false);
}

export async function onDeleteConfirmed(
    deletingWithdrawalId: string | null,
    setIsDeleting: VoidFunc<boolean>,
    dispatch: AppDispatch,
    setIsDeleteModalOpen: VoidFunc<boolean>,
    setDeletingWithdrawalId: VoidFunc<string | null>,
) {
    if (!deletingWithdrawalId) return;

    try {
        setIsDeleting(true);

        await dispatch(deleteOwnerWithdrawal(deletingWithdrawalId)).unwrap();

        closeDeleteConfirmModal(setDeletingWithdrawalId, setIsDeleteModalOpen);
    } catch (error) {
        console.error(error);
    } finally {
        setIsDeleting(false);
    }
}

export async function onCreateWithdrawal(
    withdrawal: Omit<OwnerWithdrawal, "_id">,
    dispatch: AppDispatch,
    setIsCreating: VoidFunc<boolean>,
) {
    try {
        setIsCreating(true);

        await dispatch(createOwnerWithdrawal(withdrawal)).unwrap();
        await dispatch(getAllOwnerWithdrawals());
    } finally {
        setIsCreating(false);
    }
}

export async function onUpdateWithdrawal(
    withdrawal: OwnerWithdrawal,
    dispatch: AppDispatch,
    setIsUpdating: VoidFunc<boolean>,
    setEditingWithdrawal: VoidFunc<OwnerWithdrawal | null>,
) {
    try {
        setIsUpdating(true);

        await dispatch(updateOwnerWithdrawal(withdrawal)).unwrap();
        await dispatch(getAllOwnerWithdrawals());

        setEditingWithdrawal(null);
    } finally {
        setIsUpdating(false);
    }
}

export const defaultOwnerWithdrawalValues: Partial<OwnerWithdrawal> = {
    withdrawalDate: getTodayDate(),
} as const;

import { AppDispatch } from "@/store";
import { VoidFunc } from "@/shared/types/getter-setter-functions";
import {
    createFacilityExpense,
    deleteFacilityExpense,
    getAllFacilityExpenses,
    updateFacilityExpense,
} from "@/modules/facility-expense/model/facility-expense-thunks";
import { FacilityExpense } from "@/modules/facility-expense/types/facility-expense";
import { getTodayDate } from "@/shared/utils/date";

export function closeDeleteConfirmModal(
    setDeletingExpenseId: VoidFunc<string | null>,
    setIsDeleteModalOpen: VoidFunc<boolean>,
) {
    setDeletingExpenseId(null);
    setIsDeleteModalOpen(false);
}

export async function onDeleteConfirmed(
    deletingExpenseId: string | null,
    setIsDeleting: VoidFunc<boolean>,
    dispatch: AppDispatch,
    setIsDeleteModalOpen: VoidFunc<boolean>,
    setDeletingExpenseId: VoidFunc<string | null>,
) {
    if (!deletingExpenseId) return;

    try {
        setIsDeleting(true);

        await dispatch(deleteFacilityExpense(deletingExpenseId)).unwrap();

        closeDeleteConfirmModal(setDeletingExpenseId, setIsDeleteModalOpen);
    } catch (error) {
        console.error(error);
    } finally {
        setIsDeleting(false);
    }
}

export async function onCreateExpense(
    expense: Omit<FacilityExpense, "_id">,
    dispatch: AppDispatch,
    setIsCreating: VoidFunc<boolean>,
) {
    try {
        setIsCreating(true);

        await dispatch(createFacilityExpense(expense)).unwrap();
        await dispatch(getAllFacilityExpenses());
    } finally {
        setIsCreating(false);
    }
}

export async function onUpdateExpense(
    expense: FacilityExpense,
    dispatch: AppDispatch,
    setIsUpdating: VoidFunc<boolean>,
    setEditingExpense: VoidFunc<FacilityExpense | null>,
) {
    try {
        setIsUpdating(true);

        await dispatch(updateFacilityExpense(expense)).unwrap();
        await dispatch(getAllFacilityExpenses());

        setEditingExpense(null);
    } finally {
        setIsUpdating(false);
    }
}

export const defaultFacilityExpenseValues: Partial<FacilityExpense> = {
    date: getTodayDate(),
    period: getTodayDate(),
    title: "Прибирання",
    amount: 350,
} as const;

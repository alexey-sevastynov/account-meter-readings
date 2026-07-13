import { PaginationState } from "@tanstack/react-table";
import { VoidFunc } from "@/shared/types/getter-setter-functions";
import { FacilityExpense } from "@/modules/facility-expense/types/facility-expense";

export function deleteFacilityExpenseById(
    expenses: FacilityExpense[],
    setDeletingExpenseId: VoidFunc<string>,
    setIsDeleteModalOpen: VoidFunc<boolean>,
    expenseId?: string,
) {
    if (!expenseId) return;

    const expense = expenses.find((e) => e._id === expenseId);

    if (!expense) return;

    openDeleteConfirmModal(expense, setDeletingExpenseId, setIsDeleteModalOpen);
}

export function initializePaginationState() {
    const defaultPageSize = 10 as const;

    return {
        pageIndex: 0,
        pageSize: defaultPageSize,
    } as PaginationState;
}

export function onEditExpense(expense: FacilityExpense, setEditingExpense: VoidFunc<FacilityExpense>) {
    const mappedExpense: FacilityExpense = {
        ...expense,
    };

    setEditingExpense(mappedExpense);
}

function openDeleteConfirmModal(
    expense: FacilityExpense,
    setDeletingExpenseId: VoidFunc<string>,
    setIsDeleteModalOpen: VoidFunc<boolean>,
) {
    if (!expense._id) return;

    setDeletingExpenseId(expense._id);
    setIsDeleteModalOpen(true);
}

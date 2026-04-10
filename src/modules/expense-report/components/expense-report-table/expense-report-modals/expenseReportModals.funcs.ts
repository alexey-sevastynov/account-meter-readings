import { AppDispatch } from "@/store";
import { VoidFunc } from "@/shared/types/getter-setter-functions";
import {
    createExpenseReport,
    deleteExpenseReport,
    getAllExpenseReports,
    updateExpenseReport,
} from "@/modules/expense-report/model/expense-report-thunks";
import { ExpenseReport } from "@/modules/expense-report/types/expense-report";

export function closeDeleteConfirmModal(
    setDeletingReportId: VoidFunc<string | null>,
    setIsDeleteModalOpen: VoidFunc<boolean>,
) {
    setDeletingReportId(null);
    setIsDeleteModalOpen(false);
}

export async function onDeleteConfirmed(
    deletingReportId: string | null,
    setIsDeleting: VoidFunc<boolean>,
    dispatch: AppDispatch,
    setIsDeleteModalOpen: VoidFunc<boolean>,
    setDeletingReportId: VoidFunc<string | null>,
) {
    if (!deletingReportId) return;

    try {
        setIsDeleting(true);

        await dispatch(deleteExpenseReport(deletingReportId)).unwrap();

        closeDeleteConfirmModal(setDeletingReportId, setIsDeleteModalOpen);
    } catch (error) {
        console.error(error);
    } finally {
        setIsDeleting(false);
    }
}

export async function onCreateReport(
    report: ExpenseReport,
    dispatch: AppDispatch,
    setIsCreating: VoidFunc<boolean>,
) {
    try {
        setIsCreating(true);

        await dispatch(createExpenseReport(report)).unwrap();
        await dispatch(getAllExpenseReports());
    } finally {
        setIsCreating(false);
    }
}

export async function onUpdateReport(
    report: ExpenseReport,
    dispatch: AppDispatch,
    setIsUpdating: VoidFunc<boolean>,
    setEditingReport: VoidFunc<ExpenseReport | null>,
) {
    try {
        setIsUpdating(true);

        await dispatch(updateExpenseReport(report)).unwrap();
        await dispatch(getAllExpenseReports());

        setEditingReport(null);
    } finally {
        setIsUpdating(false);
    }
}

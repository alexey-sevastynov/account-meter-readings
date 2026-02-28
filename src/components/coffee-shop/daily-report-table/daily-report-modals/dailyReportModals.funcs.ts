import { AppDispatch } from "@/app/store";
import {
    createDailyReport,
    deleteDailyReport,
    getAllDailyReports,
    updateDailyReport,
} from "@/features/coffee-shop/daily-report/daily-report-thunks";
import { DailyReport } from "@/models/daily-report";
import { VoidFunc } from "@/types/getter-setter-functions";

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

        await dispatch(deleteDailyReport(deletingReportId)).unwrap();

        closeDeleteConfirmModal(setDeletingReportId, setIsDeleteModalOpen);
    } catch (error) {
        console.error(error);
    } finally {
        setIsDeleting(false);
    }
}

export async function onCreateReport(
    report: DailyReport,
    dispatch: AppDispatch,
    setIsCreating: VoidFunc<boolean>,
) {
    try {
        setIsCreating(true);

        await dispatch(createDailyReport(report)).unwrap();
        await dispatch(getAllDailyReports());
    } finally {
        setIsCreating(false);
    }
}

export async function onUpdateReport(
    report: DailyReport,
    dispatch: AppDispatch,
    setIsUpdating: VoidFunc<boolean>,
    setEditingReport: VoidFunc<DailyReport | null>,
) {
    try {
        setIsUpdating(true);

        await dispatch(updateDailyReport(report)).unwrap();
        await dispatch(getAllDailyReports());

        setEditingReport(null);
    } finally {
        setIsUpdating(false);
    }
}

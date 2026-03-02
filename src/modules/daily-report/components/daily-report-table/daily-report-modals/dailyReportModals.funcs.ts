import { AppDispatch } from "@/store";
import { VoidFunc } from "@/shared/types/getter-setter-functions";
import {
    createDailyReport,
    deleteDailyReport,
    getAllDailyReports,
    updateDailyReport,
} from "@/modules/daily-report/model/daily-report-thunks";
import { DailyReport } from "@/modules/daily-report/types/daily-report";

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

import { DailyReport } from "@/modules/daily-report/types/daily-report";
import { VoidFunc } from "@/shared/types/getter-setter-functions";
import { PaginationState } from "@tanstack/react-table";

export function deleteDailyReportById(
    reports: DailyReport[],
    setDeletingReportId: VoidFunc<string>,
    setIsDeleteModalOpen: VoidFunc<boolean>,
    reportId?: string,
) {
    if (!reportId) return;

    const report = reports.find((r) => r._id === reportId);

    if (!report) return;

    openDeleteConfirmModal(report, setDeletingReportId, setIsDeleteModalOpen);
}

export function initializePaginationState() {
    const defaultPageSize = 10 as const;
    return {
        pageIndex: 0,
        pageSize: defaultPageSize,
    } as PaginationState;
}

export function onEditReport(report: DailyReport, setEditingReport: VoidFunc<DailyReport>) {
    const mappedReport: DailyReport = {
        ...report,
        employee: report.employee,
    };

    setEditingReport(mappedReport);
}

function openDeleteConfirmModal(
    report: DailyReport,
    setDeletingReportId: VoidFunc<string>,
    setIsDeleteModalOpen: VoidFunc<boolean>,
) {
    if (!report._id) return;

    setDeletingReportId(report._id);
    setIsDeleteModalOpen(true);
}

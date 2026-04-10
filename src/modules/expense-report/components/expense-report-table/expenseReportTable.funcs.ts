import { PaginationState } from "@tanstack/react-table";
import { VoidFunc } from "@/shared/types/getter-setter-functions";
import { ExpenseReport } from "@/modules/expense-report/types/expense-report";

export function deleteExpenseReportById(
    reports: ExpenseReport[],
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

export function onEditReport(report: ExpenseReport, setEditingReport: VoidFunc<ExpenseReport>) {
    const mappedReport: ExpenseReport = {
        ...report,
    };

    setEditingReport(mappedReport);
}

function openDeleteConfirmModal(
    report: ExpenseReport,
    setDeletingReportId: VoidFunc<string>,
    setIsDeleteModalOpen: VoidFunc<boolean>,
) {
    if (!report._id) return;

    setDeletingReportId(report._id);
    setIsDeleteModalOpen(true);
}

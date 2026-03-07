import { useState } from "react";
import { useDailyReportFormFields } from "@/modules/daily-report/components/daily-report-table/daily-report-modals/use-daily-report-form-fields";
import { DailyReportDeleteModal } from "@/modules/daily-report/components/daily-report-table/daily-report-modals/daily-report-delete-modal/DailyReportDeleteModal";
import { formModes } from "@/shared/ui/form/form-mode";
import {
    closeDeleteConfirmModal,
    onCreateReport,
    onDeleteConfirmed,
    onUpdateReport,
} from "@/modules/daily-report/components/daily-report-table/daily-report-modals/dailyReportModals.funcs";
import { DailyReport } from "@/modules/daily-report/types/daily-report";
import { VoidFunc } from "@/shared/types/getter-setter-functions";
import { useAppDispatch } from "@/shared/lib/redux/hooks/use-app-dispatch";
import { ResourceFormModal } from "@/shared/ui/form/resource-form-modal/ResourceFormModal";
import { getTodayDate } from "@/shared/utils/date";

interface DailyReportModalsProps {
    editingReport: DailyReport | null;
    setEditingReport: VoidFunc<DailyReport | null>;
    deletingReportId: string | null;
    setDeletingReportId: VoidFunc<string | null>;
    isDeleteModalOpen: boolean;
    setIsDeleteModalOpen: VoidFunc<boolean>;
}

export function DailyReportModals({
    editingReport,
    setEditingReport,
    deletingReportId,
    setDeletingReportId,
    isDeleteModalOpen,
    setIsDeleteModalOpen,
}: DailyReportModalsProps) {
    const dispatch = useAppDispatch();
    const dailyReportFormFields = useDailyReportFormFields();
    const [isDeleting, setIsDeleting] = useState(false);
    const [isCreating, setIsCreating] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);

    function handleDeleteModalOpenChange(open: boolean) {
        if (!open) closeDeleteConfirmModal(setDeletingReportId, setIsDeleteModalOpen);
    }

    return (
        <>
            <DailyReportDeleteModal
                open={isDeleteModalOpen}
                onOpenChange={handleDeleteModalOpenChange}
                onConfirm={() =>
                    onDeleteConfirmed(
                        deletingReportId,
                        setIsDeleting,
                        dispatch,
                        setIsDeleteModalOpen,
                        setDeletingReportId,
                    )
                }
                isDeleting={isDeleting}
            />
            <ResourceFormModal<DailyReport>
                fields={dailyReportFormFields}
                onSubmit={async (report: DailyReport) => onCreateReport(report, dispatch, setIsCreating)}
                formMode={formModes.create}
                addButtonLabel="Додати звіт"
                createTitle="Створити щоденний звіт"
                defaultValues={{ date: getTodayDate() }}
                loading={isCreating}
            />
            {editingReport && (
                <ResourceFormModal<DailyReport>
                    fields={dailyReportFormFields}
                    onSubmit={async (report: DailyReport) =>
                        onUpdateReport(report, dispatch, setIsUpdating, setEditingReport)
                    }
                    formMode={formModes.edit}
                    onClose={() => setEditingReport(null)}
                    editTitle="Редагувати щоденний звіт"
                    defaultValues={editingReport}
                    loading={isUpdating}
                />
            )}
        </>
    );
}

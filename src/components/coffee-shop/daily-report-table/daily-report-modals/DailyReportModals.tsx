import { useState } from "react";
import { useAppDispatch } from "@/hooks/use-app-dispatch";
import { VoidFunc } from "@/types/getter-setter-functions";
import { getTodayDate } from "@/utils/date";
import { DailyReport } from "@/models/daily-report";
import { useDailyReportFormFields } from "@/components/coffee-shop/daily-report-table/daily-report-modals/use-daily-report-form-fields";
import { MrDailyReportDeleteModal } from "@/components/coffee-shop/daily-report-table/daily-report-modals/daily-report-delete-modal/DailyReportDeleteModal";
import { MrResourceFormModal } from "@/components/shared/resource-form-modal/ResourceFormModal";
import { formModes } from "@/enums/ui/form-mode";
import {
    closeDeleteConfirmModal,
    onCreateReport,
    onDeleteConfirmed,
    onUpdateReport,
} from "@/components/coffee-shop/daily-report-table/daily-report-modals/dailyReportModals.funcs";

interface MrDailyReportModalsProps {
    editingReport: DailyReport | null;
    setEditingReport: VoidFunc<DailyReport | null>;
    deletingReportId: string | null;
    setDeletingReportId: VoidFunc<string | null>;
    isDeleteModalOpen: boolean;
    setIsDeleteModalOpen: VoidFunc<boolean>;
}

export function MrDailyReportModals({
    editingReport,
    setEditingReport,
    deletingReportId,
    setDeletingReportId,
    isDeleteModalOpen,
    setIsDeleteModalOpen,
}: MrDailyReportModalsProps) {
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
            <MrDailyReportDeleteModal
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
            <MrResourceFormModal<DailyReport>
                fields={dailyReportFormFields}
                onSubmit={async (report: DailyReport) => onCreateReport(report, dispatch, setIsCreating)}
                formMode={formModes.create}
                addButtonLabel="Додати звіт"
                createTitle="Створити щоденний звіт"
                defaultValues={{ date: getTodayDate() }}
                loading={isCreating}
            />
            {editingReport && (
                <MrResourceFormModal<DailyReport>
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

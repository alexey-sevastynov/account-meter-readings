import { useState } from "react";
import { ExpenseReportDeleteModal } from "@/modules/expense-report/components/expense-report-table/expense-report-modals/expense-report-delete-modal/ExpenseReportDeleteModal";
import { formModes } from "@/shared/ui/form/form-mode";
import {
    closeDeleteConfirmModal,
    onCreateReport,
    onDeleteConfirmed,
    onUpdateReport,
} from "@/modules/expense-report/components/expense-report-table/expense-report-modals/expenseReportModals.funcs";
import { ExpenseReport } from "@/modules/expense-report/types/expense-report";
import { VoidFunc } from "@/shared/types/getter-setter-functions";
import { useAppDispatch } from "@/shared/lib/redux/hooks/use-app-dispatch";
import { ResourceFormModal } from "@/shared/ui/form/resource-form-modal/ResourceFormModal";
import { expenseReportFormFields } from "@/modules/expense-report/configs/expense-report-form-fields";

interface ExpenseReportModalsProps {
    editingReport: ExpenseReport | null;
    setEditingReport: VoidFunc<ExpenseReport | null>;
    deletingReportId: string | null;
    setDeletingReportId: VoidFunc<string | null>;
    isDeleteModalOpen: boolean;
    setIsDeleteModalOpen: VoidFunc<boolean>;
}

export function ExpenseReportModals({
    editingReport,
    setEditingReport,
    deletingReportId,
    setDeletingReportId,
    isDeleteModalOpen,
    setIsDeleteModalOpen,
}: ExpenseReportModalsProps) {
    const dispatch = useAppDispatch();
    const [isDeleting, setIsDeleting] = useState(false);
    const [isCreating, setIsCreating] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);

    function handleDeleteModalOpenChange(open: boolean) {
        if (!open) closeDeleteConfirmModal(setDeletingReportId, setIsDeleteModalOpen);
    }

    return (
        <>
            <ExpenseReportDeleteModal
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
            <ResourceFormModal<ExpenseReport>
                fields={expenseReportFormFields}
                onSubmit={async (report: ExpenseReport) => onCreateReport(report, dispatch, setIsCreating)}
                formMode={formModes.create}
                addButtonLabel="Додати звіт"
                createTitle="Створити звіт про витрати"
                loading={isCreating}
            />
            {editingReport && (
                <ResourceFormModal<ExpenseReport>
                    fields={expenseReportFormFields}
                    onSubmit={async (report: ExpenseReport) =>
                        onUpdateReport(report, dispatch, setIsUpdating, setEditingReport)
                    }
                    formMode={formModes.edit}
                    onClose={() => setEditingReport(null)}
                    editTitle="Редагувати звіт про витрати"
                    defaultValues={editingReport}
                    loading={isUpdating}
                />
            )}
        </>
    );
}

"use client";

import { useEffect } from "react";
import { ExpenseReport } from "@/modules/expense-report/types/expense-report";
import { createExpenseReportActionsColumn } from "@/modules/expense-report/configs/expense-report-actions";
import { expenseReportColumns } from "@/modules/expense-report/configs/expense-report-columns";
import { useAppDispatch } from "@/shared/lib/redux/hooks/use-app-dispatch";
import { expenseReportFormFields } from "@/modules/expense-report/configs/expense-report-form-fields";
import { ResourceTable } from "@/shared/ui/resource-table/ResourceTable";
import {
    createExpenseReport,
    deleteExpenseReport,
    getAllExpenseReports,
    updateExpenseReport,
} from "@/modules/expense-report/model/expense-report-thunks";
import { useAppSelector } from "@/shared/lib/redux/hooks/use-app-selector";

export function ExpenseReportResourceTable() {
    const dispatch = useAppDispatch();
    const reports = useAppSelector((state) => state.expenseReport.data);
    const isLoadingReports = useAppSelector((state) => state.expenseReport.loading);

    useEffect(() => {
        dispatch(getAllExpenseReports());
    }, [dispatch]);

    return (
        <ResourceTable<ExpenseReport>
            title="Звіти про витрати"
            data={reports}
            isLoading={isLoadingReports}
            columns={expenseReportColumns}
            formFields={expenseReportFormFields}
            createActionsColumn={createExpenseReportActionsColumn}
            addButtonLabel="Додати звіт"
            createTitle="Створити звіт про витрати"
            editTitle="Редагувати звіт про витрати"
            deleteConfirmDescription="Ви дійсно хочете видалити цей звіт про витрати?"
            onCreate={async (report) => {
                await dispatch(createExpenseReport(report)).unwrap();
                await dispatch(getAllExpenseReports());
            }}
            onUpdate={async (report) => {
                await dispatch(updateExpenseReport(report)).unwrap();
                await dispatch(getAllExpenseReports());
            }}
            onDelete={async (id) => {
                await dispatch(deleteExpenseReport(id)).unwrap();
            }}
            exportConfig={{
                fileName: "expense-reports",
                sheetName: "Звіти про витрати",
            }}
            stickyHeader={true}
        />
    );
}

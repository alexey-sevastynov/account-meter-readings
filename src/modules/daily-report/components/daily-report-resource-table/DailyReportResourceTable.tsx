"use client";

import { DailyReport } from "@/modules/daily-report/types/daily-report";
import { createDailyReportActionsColumn } from "@/modules/daily-report/configs/daily-report-actions";
import { dailyReportColumns } from "@/modules/daily-report/configs/daily-report-columns";
import { useAppDispatch } from "@/shared/lib/redux/hooks/use-app-dispatch";
import { useDailyReportFormFields } from "@/modules/daily-report/components/daily-report-resource-table/use-daily-report-form-fields";
import { getTodayDate } from "@/shared/utils/date";
import { ResourceTable } from "@/shared/ui/resource-table/ResourceTable";
import {
    createDailyReport,
    deleteDailyReport,
    getAllDailyReports,
    updateDailyReport,
} from "@/modules/daily-report/model/daily-report-thunks";
import { useAppSelector } from "@/shared/lib/redux/hooks/use-app-selector";
import { useEffect } from "react";

export function DailyReportResourceTable() {
    const dispatch = useAppDispatch();
    const reports = useAppSelector((state) => state.dailyReport.data);
    const isLoadingReports = useAppSelector((state) => state.dailyReport.loading);

    useEffect(() => {
        dispatch(getAllDailyReports());
    }, [dispatch]);
    const dailyReportFormFields = useDailyReportFormFields();

    return (
        <ResourceTable<DailyReport>
            title="Щоденні звіти"
            data={reports}
            isLoading={isLoadingReports}
            columns={dailyReportColumns}
            formFields={dailyReportFormFields}
            createActionsColumn={createDailyReportActionsColumn}
            defaultValues={{ date: getTodayDate() }}
            addButtonLabel="Додати звіт"
            createTitle="Створити щоденний звіт"
            editTitle="Редагувати щоденний звіт"
            deleteConfirmDescription="Ви дійсно хочете видалити цей щоденний звіт?"
            onCreate={async (report) => {
                await dispatch(createDailyReport(report)).unwrap();
                await dispatch(getAllDailyReports());
            }}
            onUpdate={async (report) => {
                await dispatch(updateDailyReport(report)).unwrap();
                await dispatch(getAllDailyReports());
            }}
            onDelete={async (id) => {
                await dispatch(deleteDailyReport(id)).unwrap();
            }}
            exportConfig={{
                fileName: "daily-reports",
                sheetName: "Щоденні звіти",
            }}
            stickyHeader={true}
        />
    );
}

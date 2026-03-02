"use client";

import { useEffect } from "react";

import { MrDailyReportTable } from "@/modules/daily-report/components/daily-report-table/DailyReportTable";
import { useAppSelector } from "@/shared/lib/redux/hooks/use-app-selector";
import { useAppDispatch } from "@/shared/lib/redux/hooks/use-app-dispatch";
import { getAllDailyReports } from "@/modules/daily-report/model/daily-report-thunks";

export function MrDailyReports() {
    const dispatch = useAppDispatch();

    const reports = useAppSelector((state) => state.dailyReport.data);
    const isLoadingReports = useAppSelector((state) => state.dailyReport.loading);

    useEffect(() => {
        dispatch(getAllDailyReports());
    }, [dispatch]);

    return (
        <div className="p-0">
            <MrDailyReportTable data={reports} isLoading={isLoadingReports} />
        </div>
    );
}

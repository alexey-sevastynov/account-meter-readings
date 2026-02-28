"use client";

import { useEffect } from "react";
import { useAppDispatch } from "@/hooks/use-app-dispatch";
import { useAppSelector } from "@/hooks/use-app-selector";
import { getAllDailyReports } from "@/features/coffee-shop/daily-report/daily-report-thunks";
import { MrDailyReportTable } from "@/components/coffee-shop/daily-report-table/DailyReportTable";

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

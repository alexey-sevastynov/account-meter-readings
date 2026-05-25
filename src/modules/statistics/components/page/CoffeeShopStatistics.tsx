"use client";

import { useEffect, useState } from "react";
import { useAppDispatch } from "@/shared/lib/redux/hooks/use-app-dispatch";
import { useAppSelector } from "@/shared/lib/redux/hooks/use-app-selector";
import { getAllEmployees } from "@/modules/employee/model/employee-thunks";
import { getAllDailyReports } from "@/modules/daily-report/model/daily-report-thunks";
import { getCoffeeShopStatistics } from "@/modules/statistics/model/statistics-thunks";
import { RangeDatePicker } from "@/shared/ui/date-picker/RangeDatePicker";
import { DateRange } from "@/shared/types/date-range/date-range-type";
import { initializeDateRangeFromDailyReports } from "@/modules/statistics/components/page/coffeeShopStatistics.funcs";
import { StatisticsDashboard } from "@/modules/statistics/components/page/statistics-dashboard/StatisticsDashboard";
import { LoadingIndicator } from "@/shared/ui/loading-indicator/LoadingIndicator";
import { textPositions } from "@/shared/ui/typography/text-position";
import { Title } from "@/shared/ui/typography/title/Title";

export function CoffeeShopStatistics() {
    const dispatch = useAppDispatch();
    const dailyReports = useAppSelector((state) => state.dailyReport.data);
    const dailyReportLoading = useAppSelector((state) => state.dailyReport.loading);
    const statisticsData = useAppSelector((state) => state.statistics.data);
    const statisticsLoading = useAppSelector((state) => state.statistics.loading);

    const [dateRange, setDateRange] = useState<DateRange>({});
    const [isAutoInitialized, setIsAutoInitialized] = useState(false);

    useEffect(() => {
        dispatch(getAllEmployees());
        dispatch(getAllDailyReports());
    }, [dispatch]);

    useEffect(() => {
        if (isAutoInitialized) return;

        if (!initializeDateRangeFromDailyReports(dailyReports, dailyReportLoading, setDateRange)) return;

        // TODO: temporary workaround — avoid setState inside effect warning; refactor initialization logic

        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsAutoInitialized(true);
    }, [isAutoInitialized, dailyReports, dailyReportLoading]);

    useEffect(() => {
        if (dateRange.from && dateRange.to) {
            dispatch(getCoffeeShopStatistics(dateRange));
        }
    }, [dateRange, dispatch]);

    const isInitialLoading = dailyReportLoading || (!isAutoInitialized && !dailyReports.length);
    const highlightDates = dailyReports.map((report) => new Date(report.date));

    return (
        <div className="flex flex-col gap-6 p-4">
            <div className="flex flex-col gap-4 rounded-xl border p-4 shadow-sm">
                <Title textPosition={textPositions.left}>Статистика кав&apos;ярні</Title>

                {isInitialLoading ? (
                    <LoadingIndicator text="Завантаження звітів..." />
                ) : (
                    <RangeDatePicker
                        value={dateRange}
                        onChange={setDateRange}
                        highlightDates={highlightDates}
                        className="max-w-sm"
                    />
                )}
            </div>

            {statisticsLoading && <LoadingIndicator text="Завантаження статистики..." className="px-1" />}

            {statisticsData && !statisticsLoading && <StatisticsDashboard statisticsData={statisticsData} />}
        </div>
    );
}

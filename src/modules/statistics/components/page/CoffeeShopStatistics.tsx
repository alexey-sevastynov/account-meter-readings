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

    return (
        <div className="flex flex-col gap-6 p-4">
            <div className="flex flex-col gap-4 rounded-xl border p-4 shadow-sm">
                <h2 className="text-lg font-semibold text-gray-800">Статистика кав&apos;ярні</h2>

                {isInitialLoading ? (
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <svg className="h-4 w-4 animate-spin text-gray-400" viewBox="0 0 24 24" fill="none">
                            <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                            />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        Завантаження звітів...
                    </div>
                ) : (
                    <RangeDatePicker value={dateRange} onChange={setDateRange} className="max-w-sm" />
                )}
            </div>

            {statisticsLoading && (
                <div className="flex items-center gap-2 px-1 text-sm text-gray-500">
                    <svg className="h-4 w-4 animate-spin text-gray-400" viewBox="0 0 24 24" fill="none">
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    Завантаження статистики...
                </div>
            )}

            {statisticsData && !statisticsLoading && (
                <div className="flex flex-col gap-2 rounded-xl border p-4 shadow-sm">
                    <h3 className="text-sm font-semibold">Результат (JSON)</h3>
                    <pre className="overflow-x-auto rounded-lg p-4 text-xs">
                        {JSON.stringify(statisticsData, null, 2)}
                    </pre>
                </div>
            )}
        </div>
    );
}

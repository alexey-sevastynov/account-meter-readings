"use client";

import { useEffect } from "react";
import { useAppSelector } from "@/shared/lib/redux/hooks/use-app-selector";
import { useAppDispatch } from "@/shared/lib/redux/hooks/use-app-dispatch";
import { ExpenseReportTable } from "@/modules/expense-report/components/expense-report-table/ExpenseReportTable";
import { getAllExpenseReports } from "@/modules/expense-report/model/expense-report-thunks";

export function ExpenseReport() {
    const dispatch = useAppDispatch();

    const reports = useAppSelector((state) => state.expenseReport.data);
    const isLoadingReports = useAppSelector((state) => state.expenseReport.loading);

    useEffect(() => {
        dispatch(getAllExpenseReports());
    }, [dispatch]);

    console.log(reports);

    return (
        <div className="p-0">
            <ExpenseReportTable data={reports} isLoading={isLoadingReports} />
        </div>
    );
}

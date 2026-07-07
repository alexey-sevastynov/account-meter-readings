import { ExpenseReportType } from "@/modules/expense-report/enums/expense-report-type";

export interface ExpenseBreakdownItem {
    title: string;
    amount: number;
    type: ExpenseReportType;
    count: number;
    description?: string;
}

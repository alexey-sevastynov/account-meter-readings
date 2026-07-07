import { ExpenseBreakdownItem } from "@/modules/statistics/types/expense-breakdown-item";

export interface ExpensesBreakdown {
    dailyExpenses: ExpenseGroup;
    monthlyExpenses: ExpenseGroup;
}

export interface ExpenseGroup {
    totalAmount: number;
    expenseItems: ExpenseBreakdownItem[];
}

import { ExpenseReport } from "@/modules/expense-report/types/expense-report";

export const expenseReportLabels: Record<keyof ExpenseReport, string> = {
    _id: "Id",
    title: "Назва",
    amount: "Сума",
    type: "Тип",
    date: "Дата",
    validFrom: "Діє з",
    validTo: "Діє до",
    description: "Опис",
    createdAt: "Створено",
    updatedAt: "Оновлено",
} as const;

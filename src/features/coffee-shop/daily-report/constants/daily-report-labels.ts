import { DailyReport } from "@/models/daily-report";

export const dailyReportLabels: Record<keyof DailyReport, string> = {
    _id: "Id",
    date: "Дата",
    cashRevenue: "Готівка",
    terminalRevenue: "Термінал",
    employee: "Працівник",
    costOfGoods: "Собівартість",
    productWriteOffs: "Списання продуктів",
    employeeBonus: "Бонус працівника",
    employeeTotalSalary: "Загальна зарплата працівника",
    acquiringFee: "Комісія еквайрингу",
    totalRevenue: "Загальна виручка",
    netProfit: "Чистий прибуток",
    salaryPercent: "Відсоток зарплати",
    costPercent: "Відсоток собівартості",
    writeOffPercent: "Відсоток списання",
    cashPercent: "Відсоток готівки",
    terminalPercent: "Відсоток терміналу",
    createdAt: "Створено",
    updatedAt: "Оновлено",
} as const;

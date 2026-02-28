import { nameOf } from "@/utils/name-of";
import { DailyReport } from "@/models/daily-report";

export const dailyReportProps: Record<keyof DailyReport, string> = {
    _id: nameOf<DailyReport>("_id"),
    date: nameOf<DailyReport>("date"),
    cashRevenue: nameOf<DailyReport>("cashRevenue"),
    terminalRevenue: nameOf<DailyReport>("terminalRevenue"),
    employee: nameOf<DailyReport>("employee"),
    costOfGoods: nameOf<DailyReport>("costOfGoods"),
    productWriteOffs: nameOf<DailyReport>("productWriteOffs"),
    employeeBonus: nameOf<DailyReport>("employeeBonus"),
    employeeTotalSalary: nameOf<DailyReport>("employeeTotalSalary"),
    acquiringFee: nameOf<DailyReport>("acquiringFee"),
    totalRevenue: nameOf<DailyReport>("totalRevenue"),
    netProfit: nameOf<DailyReport>("netProfit"),
    salaryPercent: nameOf<DailyReport>("salaryPercent"),
    costPercent: nameOf<DailyReport>("costPercent"),
    writeOffPercent: nameOf<DailyReport>("writeOffPercent"),
    cashPercent: nameOf<DailyReport>("cashPercent"),
    terminalPercent: nameOf<DailyReport>("terminalPercent"),
    createdAt: nameOf<DailyReport>("createdAt"),
    updatedAt: nameOf<DailyReport>("updatedAt"),
} as const;

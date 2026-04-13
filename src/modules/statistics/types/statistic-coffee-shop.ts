import { DateRange } from "@/shared/types/date-range/date-range-type";
import { ExpensesBreakdown } from "@/modules/statistics/types/expenses-breakdown";
import { StatisticsPercentages } from "@/modules/statistics/types/statistics-percentages";
import { EmployeeStats } from "@/modules/statistics/types/employee-stats";

export interface CoffeeShopStatistics {
    period: DateRange;
    totalDays: number;
    totalShifts: number;
    totalRevenue: number;
    cashRevenue: number;
    terminalRevenue: number;
    costOfGoods: number;
    productWriteOffs: number;
    acquiringFee: number;
    totalExpenses: number;
    breakdown: ExpensesBreakdown;
    netProfit: number;
    netProfitAfterExpenses: number;
    percentages: StatisticsPercentages;
    employees: EmployeeStats[];
}

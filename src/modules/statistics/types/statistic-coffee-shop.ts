import { DateRange } from "@/shared/types/date-range/date-range-type";
import { ExpensesBreakdown } from "@/modules/statistics/types/expenses-breakdown";
import { StatisticsPercentages } from "@/modules/statistics/types/statistics-percentages";
import { EmployeeStats } from "@/modules/statistics/types/employee-stats";
import { InventoryAuditTotals } from "@/modules/statistics/types/inventory-audit-totals";
import { OwnerWithdrawalSummary } from "@/modules/statistics/types/owner-withdrawal-summary";
import { FacilityExpenseSummary } from "@/modules/statistics/types/facility-expense-summary";

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
    inventoryAuditTotals: InventoryAuditTotals;
    expensesBreakdown: ExpensesBreakdown;
    netProfit: number;
    netProfitAfterExpenses: number;
    percentages: StatisticsPercentages;
    employees: EmployeeStats[];
    ownerWithdrawals: OwnerWithdrawalSummary;
    facilityExpense: FacilityExpenseSummary;
}

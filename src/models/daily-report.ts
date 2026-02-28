import { EntityTimestamps } from "@/types/entity-timestamps";
import { WithObjectId } from "@/types/with-object-id";

export interface DailyReport<TEmployee = string> extends WithObjectId, EntityTimestamps {
    date: string;
    cashRevenue: number;
    terminalRevenue: number;
    employee: TEmployee;
    costOfGoods: number;
    productWriteOffs: number;
    employeeBonus?: number;
    employeeTotalSalary?: number;
    acquiringFee?: number;
    totalRevenue?: number;
    netProfit?: number;
    salaryPercent?: number;
    costPercent?: number;
    writeOffPercent?: number;
    cashPercent?: number;
    terminalPercent?: number;
}

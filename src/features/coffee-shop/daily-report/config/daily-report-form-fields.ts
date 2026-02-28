import { DailyReport } from "@/models/daily-report";
import { ResourceField } from "@/types/resource-field";
import { resourceFieldTypes } from "@/enums/ui/resource-field-type";
import { dailyReportLabels } from "@/features/coffee-shop/daily-report/constants/daily-report-labels";
import { dailyReportProps } from "@/features/coffee-shop/daily-report/constants/daily-report-props";

export const dailyReportFormFields: ResourceField<DailyReport>[] = [
    {
        name: dailyReportProps.date as keyof DailyReport,
        required: true,
        label: dailyReportLabels.date,
        type: resourceFieldTypes.date,
    },
    {
        name: dailyReportProps.employee as keyof DailyReport,
        label: dailyReportLabels.employee,
        type: resourceFieldTypes.select,
    },
    {
        name: dailyReportProps.cashRevenue as keyof DailyReport,
        required: true,
        label: dailyReportLabels.cashRevenue,
        type: resourceFieldTypes.number,
    },
    {
        name: dailyReportProps.terminalRevenue as keyof DailyReport,
        required: true,
        label: dailyReportLabels.terminalRevenue,
        type: resourceFieldTypes.number,
    },
    {
        name: dailyReportProps.costOfGoods as keyof DailyReport,
        required: true,
        label: dailyReportLabels.costOfGoods,
        type: resourceFieldTypes.number,
    },
    {
        name: dailyReportProps.productWriteOffs as keyof DailyReport,
        required: true,
        label: dailyReportLabels.productWriteOffs,
        type: resourceFieldTypes.number,
    },
    {
        name: dailyReportProps.employeeBonus as keyof DailyReport,
        label: dailyReportLabels.employeeBonus,
        type: resourceFieldTypes.number,
    },
   
];

import { ColumnDef } from "@tanstack/react-table";
import { DailyReport } from "@/models/daily-report";
import { Employee } from "@/models/employee";
import { resourceFieldTypes } from "@/enums/ui/resource-field-type";
import { MrDateCell } from "@/components/ui/table/table-body/table-row/date-cell/DateCell";
import { MrNumberCell } from "@/components/ui/table/table-body/table-row/number-cell/NumberCell";
import { MrAvatarCell } from "@/components/ui/table/table-body/table-row/avatar-cell/AvatarCell";
import { dailyReportProps } from "@/features/coffee-shop/daily-report/constants/daily-report-props";
import { dailyReportLabels } from "@/features/coffee-shop/daily-report/constants/daily-report-labels";

export const dailyReportColumns: ColumnDef<DailyReport>[] = [
    {
        accessorKey: dailyReportProps.date,
        header: () => <div className="w-full text-right">{dailyReportLabels.date}</div>,
        enableResizing: true,
        cell: (cellInfo) => <MrDateCell cellInfo={cellInfo} />,
        meta: { label: dailyReportLabels.date, resourceFieldType: resourceFieldTypes.date },
    },
    {
        accessorFn: (row: DailyReport) => {
            const emp = row.employee as unknown as Employee;
            return emp?.name || "";
        },
        header: dailyReportLabels.employee,
        enableResizing: true,
        cell: (cellInfo) => <MrAvatarCell cellInfo={cellInfo} />,
        meta: { label: dailyReportLabels.employee, resourceFieldType: resourceFieldTypes.select },
    },
    {
        accessorKey: dailyReportProps.cashRevenue,
        header: () => <div className="w-full text-right">{dailyReportLabels.cashRevenue}</div>,
        enableResizing: true,
        cell: (cellInfo) => <MrNumberCell cellInfo={cellInfo} />,
        meta: { label: dailyReportLabels.cashRevenue, resourceFieldType: resourceFieldTypes.number },
    },
    {
        accessorKey: dailyReportProps.terminalRevenue,
        header: () => <div className="w-full text-right">{dailyReportLabels.terminalRevenue}</div>,
        enableResizing: true,
        cell: (cellInfo) => <MrNumberCell cellInfo={cellInfo} />,
        meta: { label: dailyReportLabels.terminalRevenue, resourceFieldType: resourceFieldTypes.number },
    },
    {
        accessorKey: dailyReportProps.acquiringFee,
        header: () => <div className="w-full text-right">{dailyReportLabels.acquiringFee}</div>,
        enableResizing: true,
        cell: (cellInfo) => <MrNumberCell cellInfo={cellInfo} />,
        meta: { label: dailyReportLabels.acquiringFee, resourceFieldType: resourceFieldTypes.number },
    },
    {
        accessorKey: dailyReportProps.costOfGoods,
        header: () => <div className="w-full text-right">{dailyReportLabels.costOfGoods}</div>,
        enableResizing: true,
        cell: (cellInfo) => <MrNumberCell cellInfo={cellInfo} />,
        meta: { label: dailyReportLabels.costOfGoods, resourceFieldType: resourceFieldTypes.number },
    },
    {
        accessorKey: dailyReportProps.productWriteOffs,
        header: () => <div className="w-full text-right">{dailyReportLabels.productWriteOffs}</div>,
        enableResizing: true,
        cell: (cellInfo) => <MrNumberCell cellInfo={cellInfo} />,
        meta: { label: dailyReportLabels.productWriteOffs, resourceFieldType: resourceFieldTypes.number },
    },
    {
        accessorKey: dailyReportProps.employeeBonus,
        header: () => <div className="w-full text-right">{dailyReportLabels.employeeBonus}</div>,
        enableResizing: true,
        cell: (cellInfo) => <MrNumberCell cellInfo={cellInfo} />,
        meta: { label: dailyReportLabels.employeeBonus, resourceFieldType: resourceFieldTypes.number },
    },
    {
        accessorKey: dailyReportProps.totalRevenue,
        header: () => <div className="w-full text-right">{dailyReportLabels.totalRevenue}</div>,
        enableResizing: true,
        cell: (cellInfo) => <MrNumberCell cellInfo={cellInfo} />,
        meta: { label: dailyReportLabels.totalRevenue, resourceFieldType: resourceFieldTypes.number },
    },
    {
        accessorKey: dailyReportProps.netProfit,
        header: () => <div className="w-full text-right">{dailyReportLabels.netProfit}</div>,
        enableResizing: true,
        cell: (cellInfo) => <MrNumberCell cellInfo={cellInfo} />,
        meta: { label: dailyReportLabels.netProfit, resourceFieldType: resourceFieldTypes.number },
    },
    {
        accessorKey: dailyReportProps.salaryPercent,
        header: () => <div className="w-full text-right">{dailyReportLabels.salaryPercent}</div>,
        enableResizing: true,
        cell: (cellInfo) => <MrNumberCell cellInfo={cellInfo} />,
        meta: { label: dailyReportLabels.salaryPercent, resourceFieldType: resourceFieldTypes.number },
    },
    {
        accessorKey: dailyReportProps.costPercent,
        header: () => <div className="w-full text-right">{dailyReportLabels.costPercent}</div>,
        enableResizing: true,
        cell: (cellInfo) => <MrNumberCell cellInfo={cellInfo} />,
        meta: { label: dailyReportLabels.costPercent, resourceFieldType: resourceFieldTypes.number },
    },
    {
        accessorKey: dailyReportProps.writeOffPercent,
        header: () => <div className="w-full text-right">{dailyReportLabels.writeOffPercent}</div>,
        enableResizing: true,
        cell: (cellInfo) => <MrNumberCell cellInfo={cellInfo} />,
        meta: { label: dailyReportLabels.writeOffPercent, resourceFieldType: resourceFieldTypes.number },
    },
    {
        accessorKey: dailyReportProps.cashPercent,
        header: () => <div className="w-full text-right">{dailyReportLabels.cashPercent}</div>,
        enableResizing: true,
        cell: (cellInfo) => <MrNumberCell cellInfo={cellInfo} />,
        meta: { label: dailyReportLabels.cashPercent, resourceFieldType: resourceFieldTypes.number },
    },
    {
        accessorKey: dailyReportProps.terminalPercent,
        header: () => <div className="w-full text-right">{dailyReportLabels.terminalPercent}</div>,
        enableResizing: true,
        cell: (cellInfo) => <MrNumberCell cellInfo={cellInfo} />,
        meta: { label: dailyReportLabels.terminalPercent, resourceFieldType: resourceFieldTypes.number },
    },
    {
        accessorKey: dailyReportProps.createdAt,
        header: () => <div className="w-full text-right">{dailyReportLabels.createdAt}</div>,
        enableResizing: true,
        cell: (cellInfo) => <MrDateCell cellInfo={cellInfo} />,
        meta: { label: dailyReportLabels.createdAt, resourceFieldType: resourceFieldTypes.date },
    },
    {
        accessorKey: dailyReportProps.updatedAt,
        header: () => <div className="w-full text-right">{dailyReportLabels.updatedAt}</div>,
        enableResizing: true,
        cell: (cellInfo) => <MrDateCell cellInfo={cellInfo} />,
        meta: { label: dailyReportLabels.updatedAt, resourceFieldType: resourceFieldTypes.date },
    },
];

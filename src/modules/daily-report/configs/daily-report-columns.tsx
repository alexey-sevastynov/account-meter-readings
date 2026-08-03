import { ColumnDef } from "@tanstack/react-table";
import { DailyReport } from "@/modules/daily-report/types/daily-report";
import { Employee } from "@/modules/employee/types/employee";
import { resourceFieldTypes } from "@/shared/enums/resource-field-type";
import { AvatarCell } from "@/shared/ui/table/table-body/table-row/avatar-cell/AvatarCell";
import { dailyReportProps } from "@/modules/daily-report/constants/daily-report-props";
import { dailyReportLabels } from "@/modules/daily-report/constants/daily-report-labels";
import {
    createDateTableColumn,
    createTableColumn,
} from "@/shared/lib/react-table/column/create-table-column";
import { CurrencyCell } from "@/shared/ui/table/table-body/table-row/currency-cell/CurrencyCell";
import { PercentCell } from "@/shared/ui/table/table-body/table-row/percent-cell/PercentCell";
import { CurrencyFooterCell } from "@/shared/ui/table/table-footer/currency-footer-cell/CurrencyFooterCell";

export const dailyReportColumns: ColumnDef<DailyReport>[] = [
    createDateTableColumn<DailyReport>({
        accessorKey: dailyReportProps.date,
        accessorFn: (row) => new Date(row.date),
        header: dailyReportLabels.date,
        filterable: true,
    }),
    createTableColumn<DailyReport>({
        accessorFn: (row: DailyReport) => {
            const emp = row.employee as unknown as Employee;

            return emp?.name || "";
        },
        header: dailyReportLabels.employee,
        cell: (cellInfo) => <AvatarCell cellInfo={cellInfo} />,
        meta: {
            label: dailyReportLabels.employee,
            resourceFieldType: resourceFieldTypes.select,
            filterable: false,
        },
    }),
    createTableColumn({
        accessorKey: dailyReportProps.cashRevenue,
        header: () => <div className="w-full text-right">{dailyReportLabels.cashRevenue}</div>,
        cell: (cellInfo) => <CurrencyCell cellInfo={cellInfo} />,
        footer: (props) => <CurrencyFooterCell {...props} />,
        meta: {
            label: dailyReportLabels.cashRevenue,
            resourceFieldType: resourceFieldTypes.number,
            filterable: false,
        },
    }),
    createTableColumn({
        accessorKey: dailyReportProps.terminalRevenue,
        header: () => <div className="w-full text-right">{dailyReportLabels.terminalRevenue}</div>,
        cell: (cellInfo) => <CurrencyCell cellInfo={cellInfo} />,
        footer: (props) => <CurrencyFooterCell {...props} />,
        meta: {
            label: dailyReportLabels.terminalRevenue,
            resourceFieldType: resourceFieldTypes.number,
            filterable: false,
        },
    }),
    createTableColumn({
        accessorKey: dailyReportProps.acquiringFee,
        header: () => <div className="w-full text-right">{dailyReportLabels.acquiringFee}</div>,
        cell: (cellInfo) => <CurrencyCell cellInfo={cellInfo} />,
        footer: (props) => <CurrencyFooterCell {...props} />,
        meta: {
            label: dailyReportLabels.acquiringFee,
            resourceFieldType: resourceFieldTypes.number,
            filterable: false,
        },
    }),
    createTableColumn({
        accessorKey: dailyReportProps.costOfGoods,
        header: () => <div className="w-full text-right">{dailyReportLabels.costOfGoods}</div>,
        cell: (cellInfo) => <CurrencyCell cellInfo={cellInfo} />,
        footer: (props) => <CurrencyFooterCell {...props} />,
        meta: {
            label: dailyReportLabels.costOfGoods,
            resourceFieldType: resourceFieldTypes.number,
            filterable: false,
        },
    }),
    createTableColumn({
        accessorKey: dailyReportProps.productWriteOffs,
        header: () => <div className="w-full text-right">{dailyReportLabels.productWriteOffs}</div>,
        cell: (cellInfo) => <CurrencyCell cellInfo={cellInfo} />,
        footer: (props) => <CurrencyFooterCell {...props} />,
        meta: {
            label: dailyReportLabels.productWriteOffs,
            resourceFieldType: resourceFieldTypes.number,
            filterable: false,
        },
    }),
    createTableColumn({
        accessorKey: dailyReportProps.employeeBonus,
        header: () => <div className="w-full text-right">{dailyReportLabels.employeeBonus}</div>,
        cell: (cellInfo) => <CurrencyCell cellInfo={cellInfo} />,
        footer: (props) => <CurrencyFooterCell {...props} />,
        filterFn: "weakEquals",
        meta: {
            label: dailyReportLabels.employeeBonus,
            resourceFieldType: resourceFieldTypes.number,
            filterable: true,
        },
    }),
    createTableColumn({
        accessorKey: dailyReportProps.totalRevenue,
        header: () => <div className="w-full text-right">{dailyReportLabels.totalRevenue}</div>,
        cell: (cellInfo) => <CurrencyCell cellInfo={cellInfo} />,
        footer: (props) => <CurrencyFooterCell {...props} />,
        meta: {
            label: dailyReportLabels.totalRevenue,
            resourceFieldType: resourceFieldTypes.number,
            filterable: false,
        },
    }),
    createTableColumn({
        accessorKey: dailyReportProps.netProfit,
        header: () => <div className="w-full text-right">{dailyReportLabels.netProfit}</div>,
        cell: (cellInfo) => <CurrencyCell cellInfo={cellInfo} />,
        footer: (props) => <CurrencyFooterCell {...props} />,
        meta: {
            label: dailyReportLabels.netProfit,
            resourceFieldType: resourceFieldTypes.number,
            filterable: false,
        },
    }),
    createTableColumn({
        accessorKey: dailyReportProps.salaryPercent,
        header: () => <div className="w-full text-right">{dailyReportLabels.salaryPercent}</div>,
        cell: (cellInfo) => <PercentCell cellInfo={cellInfo} />,
        meta: {
            label: dailyReportLabels.salaryPercent,
            resourceFieldType: resourceFieldTypes.number,
            filterable: false,
        },
    }),
    createTableColumn({
        accessorKey: dailyReportProps.costPercent,
        header: () => <div className="w-full text-right">{dailyReportLabels.costPercent}</div>,
        cell: (cellInfo) => <PercentCell cellInfo={cellInfo} />,
        meta: {
            label: dailyReportLabels.costPercent,
            resourceFieldType: resourceFieldTypes.number,
            filterable: false,
        },
    }),
    createTableColumn({
        accessorKey: dailyReportProps.writeOffPercent,
        header: () => <div className="w-full text-right">{dailyReportLabels.writeOffPercent}</div>,
        cell: (cellInfo) => <PercentCell cellInfo={cellInfo} />,
        meta: {
            label: dailyReportLabels.writeOffPercent,
            resourceFieldType: resourceFieldTypes.number,
            filterable: false,
        },
    }),
    createTableColumn({
        accessorKey: dailyReportProps.cashPercent,
        header: () => <div className="w-full text-right">{dailyReportLabels.cashPercent}</div>,
        cell: (cellInfo) => <PercentCell cellInfo={cellInfo} />,
        meta: {
            label: dailyReportLabels.cashPercent,
            resourceFieldType: resourceFieldTypes.number,
            filterable: false,
        },
    }),
    createTableColumn({
        accessorKey: dailyReportProps.terminalPercent,
        header: () => <div className="w-full text-right">{dailyReportLabels.terminalPercent}</div>,
        cell: (cellInfo) => <PercentCell cellInfo={cellInfo} />,
        meta: {
            label: dailyReportLabels.terminalPercent,
            resourceFieldType: resourceFieldTypes.number,
            filterable: false,
        },
    }),
    createDateTableColumn<DailyReport>({
        accessorKey: dailyReportProps.createdAt,
        header: dailyReportLabels.createdAt,
    }),

    createDateTableColumn<DailyReport>({
        accessorKey: dailyReportProps.updatedAt,
        header: dailyReportLabels.updatedAt,
    }),
];

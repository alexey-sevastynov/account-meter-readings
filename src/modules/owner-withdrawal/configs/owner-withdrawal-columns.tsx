import { ColumnDef } from "@tanstack/react-table";
import { resourceFieldTypes } from "@/shared/enums/resource-field-type";
import { NumberCell } from "@/shared/ui/table/table-body/table-row/number-cell/NumberCell";
import { NumberFooterCell } from "@/shared/ui/table/table-footer/number-footer-cell/NumberFooterCell";
import {
    createDateTableColumn,
    createTableColumn,
} from "@/shared/lib/react-table/column/create-table-column";
import { OwnerWithdrawal } from "@/modules/owner-withdrawal/types/owner-withdrawal";
import { ownerWithdrawalLabels } from "@/modules/owner-withdrawal/constants/owner-withdrawal-labels";
import { ownerWithdrawalProps } from "@/modules/owner-withdrawal/constants/owner-withdrawal-props";

export const ownerWithdrawalColumns: ColumnDef<OwnerWithdrawal>[] = [
    createDateTableColumn<OwnerWithdrawal>({
        accessorKey: ownerWithdrawalProps.withdrawalDate,
        accessorFn: (row) => new Date(row.withdrawalDate),
        header: ownerWithdrawalLabels.withdrawalDate,
        filterable: true,
    }),
    createTableColumn({
        accessorKey: ownerWithdrawalProps.amount,
        header: () => <div className="w-full text-right">{ownerWithdrawalLabels.amount}</div>,
        cell: (cellInfo) => <NumberCell cellInfo={cellInfo} />,
        footer: (props) => <NumberFooterCell {...props} />,
        meta: {
            label: ownerWithdrawalLabels.amount,
            resourceFieldType: resourceFieldTypes.number,
            filterable: false,
        },
    }),
    createTableColumn<OwnerWithdrawal>({
        accessorKey: ownerWithdrawalProps.description,
        header: ownerWithdrawalLabels.description,
        meta: {
            label: ownerWithdrawalLabels.description,
            resourceFieldType: resourceFieldTypes.text,
            filterable: true,
        },
    }),
    createDateTableColumn<OwnerWithdrawal>({
        accessorKey: ownerWithdrawalProps.createdAt,
        header: ownerWithdrawalLabels.createdAt,
    }),
    createDateTableColumn<OwnerWithdrawal>({
        accessorKey: ownerWithdrawalProps.updatedAt,
        header: ownerWithdrawalLabels.updatedAt,
    }),
];

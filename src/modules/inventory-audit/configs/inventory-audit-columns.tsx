import { ColumnDef } from "@tanstack/react-table";
import { resourceFieldTypes } from "@/shared/enums/resource-field-type";
import { NumberCell } from "@/shared/ui/table/table-body/table-row/number-cell/NumberCell";
import { NumberFooterCell } from "@/shared/ui/table/table-footer/number-footer-cell/NumberFooterCell";
import {
    createDateTableColumn,
    createTableColumn,
} from "@/shared/lib/react-table/column/create-table-column";
import { InventoryAudit } from "@/modules/inventory-audit/types/inventory-audit";
import { inventoryAuditProps } from "@/modules/inventory-audit/constants/inventory-audit-props";
import { inventoryAuditLabels } from "@/modules/inventory-audit/constants/inventory-audit-labels";

export const inventoryAuditColumns: ColumnDef<InventoryAudit>[] = [
    createTableColumn<InventoryAudit>({
        accessorKey: inventoryAuditProps.title,
        header: inventoryAuditLabels.title,
        meta: {
            label: inventoryAuditLabels.title,
            resourceFieldType: resourceFieldTypes.text,
            filterable: true,
        },
    }),
    createTableColumn({
        accessorKey: inventoryAuditProps.shortageAmount,
        header: () => <div className="w-full text-right">{inventoryAuditLabels.shortageAmount}</div>,
        cell: (cellInfo) => <NumberCell cellInfo={cellInfo} />,
        footer: (props) => <NumberFooterCell {...props} />,
        meta: {
            label: inventoryAuditLabels.shortageAmount,
            resourceFieldType: resourceFieldTypes.number,
            filterable: false,
        },
    }),
    createTableColumn({
        accessorKey: inventoryAuditProps.surplusAmount,
        header: () => <div className="w-full text-right">{inventoryAuditLabels.surplusAmount}</div>,
        cell: (cellInfo) => <NumberCell cellInfo={cellInfo} />,
        footer: (props) => <NumberFooterCell {...props} />,
        meta: {
            label: inventoryAuditLabels.surplusAmount,
            resourceFieldType: resourceFieldTypes.number,
            filterable: false,
        },
    }),
    createDateTableColumn<InventoryAudit>({
        accessorKey: inventoryAuditProps.validFrom,
        header: inventoryAuditLabels.validFrom,
    }),
    createDateTableColumn<InventoryAudit>({
        accessorKey: inventoryAuditProps.validTo,
        header: inventoryAuditLabels.validTo,
    }),
    createTableColumn<InventoryAudit>({
        accessorKey: inventoryAuditProps.description,
        header: inventoryAuditLabels.description,
        meta: {
            label: inventoryAuditLabels.description,
            resourceFieldType: resourceFieldTypes.text,
            filterable: true,
        },
    }),
    createDateTableColumn<InventoryAudit>({
        accessorKey: inventoryAuditProps.createdAt,
        header: inventoryAuditLabels.createdAt,
    }),
    createDateTableColumn<InventoryAudit>({
        accessorKey: inventoryAuditProps.updatedAt,
        header: inventoryAuditLabels.updatedAt,
    }),
];

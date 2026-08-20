import { ColumnDef } from "@tanstack/react-table";
import { resourceFieldTypes } from "@/shared/enums/resource-field-type";
import { createTableColumn } from "@/shared/lib/react-table/column/create-table-column";
import { KavappInventoryItem } from "@/modules/kavapp-inventory/types/kavapp-inventory-item";
import { kavappInventoryProps } from "@/modules/kavapp-inventory/constants/kavapp-inventory-props";
import { kavappInventoryLabels } from "@/modules/kavapp-inventory/constants/kavapp-inventory-labels";
import { CurrencyCell } from "@/shared/ui/table/table-body/table-row/currency-cell/CurrencyCell";
import { NumberCell } from "@/shared/ui/table/table-body/table-row/number-cell/NumberCell";
import { CurrencyFooterCell } from "@/shared/ui/table/table-footer/currency-footer-cell/CurrencyFooterCell";
import { kavappInventoryUnitLabels } from "@/modules/kavapp-inventory/constants/kavapp-inventory-unit-labels";

export const kavappInventoryColumns: ColumnDef<KavappInventoryItem>[] = [
    createTableColumn<KavappInventoryItem>({
        accessorKey: kavappInventoryProps.name,
        header: kavappInventoryLabels.name,
        meta: {
            label: kavappInventoryLabels.name,
            resourceFieldType: resourceFieldTypes.text,
            filterable: true,
        },
    }),
    createTableColumn<KavappInventoryItem>({
        accessorKey: kavappInventoryProps.itemcount,
        header: () => <div className="w-full text-right">{kavappInventoryLabels.itemcount}</div>,
        cell: (cellInfo) => <NumberCell cellInfo={cellInfo} />,
        meta: {
            label: kavappInventoryLabels.itemcount,
            resourceFieldType: resourceFieldTypes.number,
            filterable: false,
        },
    }),
    createTableColumn<KavappInventoryItem>({
        accessorKey: kavappInventoryProps.units,
        header: kavappInventoryLabels.units,
        cell: (cellInfo) => kavappInventoryUnitLabels[cellInfo.getValue() as 1 | 2 | 4],
        meta: {
            label: kavappInventoryLabels.units,
            resourceFieldType: resourceFieldTypes.text,
            filterable: false,
        },
    }),
    createTableColumn<KavappInventoryItem>({
        accessorKey: kavappInventoryProps.itemPrice,
        header: () => <div className="w-full text-right">{kavappInventoryLabels.itemPrice}</div>,
        cell: (cellInfo) => <CurrencyCell cellInfo={cellInfo} />,
        footer: (props) => <CurrencyFooterCell {...props} />,
        meta: {
            label: kavappInventoryLabels.itemPrice,
            resourceFieldType: resourceFieldTypes.number,
            filterable: false,
        },
    }),
    createTableColumn<KavappInventoryItem>({
        accessorKey: kavappInventoryProps.itemsCost,
        header: () => <div className="w-full text-right">{kavappInventoryLabels.itemsCost}</div>,
        cell: (cellInfo) => <CurrencyCell cellInfo={cellInfo} />,
        footer: (props) => <CurrencyFooterCell {...props} />,
        meta: {
            label: kavappInventoryLabels.itemsCost,
            resourceFieldType: resourceFieldTypes.number,
            filterable: false,
        },
    }),
    createTableColumn<KavappInventoryItem>({
        accessorKey: kavappInventoryProps.salePrice,
        header: () => <div className="w-full text-right">{kavappInventoryLabels.salePrice}</div>,
        cell: (cellInfo) => <CurrencyCell cellInfo={cellInfo} />,
        footer: (props) => <CurrencyFooterCell {...props} />,
        meta: {
            label: kavappInventoryLabels.salePrice,
            resourceFieldType: resourceFieldTypes.number,
            filterable: false,
        },
    }),
    createTableColumn<KavappInventoryItem>({
        accessorKey: kavappInventoryProps.saleCost,
        header: () => <div className="w-full text-right">{kavappInventoryLabels.saleCost}</div>,
        cell: (cellInfo) => <CurrencyCell cellInfo={cellInfo} />,
        footer: (props) => <CurrencyFooterCell {...props} />,
        meta: {
            label: kavappInventoryLabels.saleCost,
            resourceFieldType: resourceFieldTypes.number,
            filterable: false,
        },
    }),
];

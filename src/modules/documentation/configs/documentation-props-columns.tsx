import { ColumnDef } from "@tanstack/react-table";
import { createTableColumn } from "@/shared/lib/react-table/column/create-table-column";
import { ComponentProp } from "@/shared/types/ui/documentation";
import { componentPropProps } from "@/modules/documentation/constants/documentation-prop-props";
import { componentPropLabels } from "@/modules/documentation/constants/documentation-prop-labels";
import { TextCell } from "@/shared/ui/table/table-body/table-row/text-cell/TextCell";
import { BadgeCell } from "@/shared/ui/table/table-body/table-row/badge-cell/BadgeCell";
import { PropNameCell } from "@/modules/documentation/components/documentation-content/documentation-overview-section/documentation-props-table/PropNameCell";

export const documentationPropsColumns: ColumnDef<ComponentProp>[] = [
    createTableColumn({
        accessorKey: componentPropProps.name,
        header: componentPropLabels.name,
        cell: (cellInfo) => <PropNameCell cellInfo={cellInfo} />,
    }),
    createTableColumn({
        accessorKey: componentPropProps.type,
        header: componentPropLabels.type,
        cell: (cellInfo) => <BadgeCell cellInfo={cellInfo} />,
    }),
    createTableColumn({
        accessorKey: componentPropProps.defaultValue,
        header: componentPropLabels.defaultValue,
        cell: (cellInfo) => <TextCell cellInfo={cellInfo} />,
    }),
    createTableColumn({
        accessorKey: componentPropProps.description,
        header: componentPropLabels.description,
        cell: (cellInfo) => <TextCell cellInfo={cellInfo} />,
    }),
];

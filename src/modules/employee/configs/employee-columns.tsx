import { ColumnDef } from "@tanstack/react-table";
import { resourceFieldTypes } from "@/shared/enums/resource-field-type";
import { NumberCell } from "@/shared/ui/table/table-body/table-row/number-cell/NumberCell";
import { BooleanCell } from "@/shared/ui/table/table-body/table-row/boolean-cell/BooleanCell";
import { BadgeCell } from "@/shared/ui/table/table-body/table-row/badge-cell/BadgeCell";
import { AvatarCell } from "@/shared/ui/table/table-body/table-row/avatar-cell/AvatarCell";
import {
    createDateTableColumn,
    createTableColumn,
} from "@/shared/lib/react-table/column/create-table-column";
import { Employee } from "@/modules/employee/types/employee";
import { employeeProps } from "@/modules/employee/constants/employee-props";
import { employeeLabels } from "@/modules/employee/constants/employee-labels";
import { employerPositionLabels } from "@/modules/employee/constants/employer-position-labels";

export const employeeColumns: ColumnDef<Employee>[] = [
    createTableColumn({
        accessorKey: employeeProps.name,
        header: employeeLabels.name,
        cell: (cellInfo) => <AvatarCell cellInfo={cellInfo} />,
        meta: { label: employeeLabels.name, resourceFieldType: resourceFieldTypes.text, filterable: true },
    }),
    createTableColumn({
        accessorKey: employeeProps.position,
        header: employeeLabels.position,
        cell: (cellInfo) => <BadgeCell cellInfo={cellInfo} labels={employerPositionLabels} />,
        meta: {
            label: employeeLabels.position,
            resourceFieldType: resourceFieldTypes.select,
            filterable: true,
        },
    }),
    createTableColumn({
        accessorKey: employeeProps.phone,
        header: employeeLabels.phone,
        meta: { label: employeeLabels.phone, resourceFieldType: resourceFieldTypes.text, filterable: true },
    }),
    createDateTableColumn<Employee>({
        accessorKey: employeeProps.birthDate,
        accessorFn: (row) => (row.birthDate ? new Date(row.birthDate) : null),
        header: employeeLabels.birthDate,
        filterable: true,
    }),
    createTableColumn({
        accessorKey: employeeProps.fixedSalary,
        header: () => <div className="w-full text-right">{employeeLabels.fixedSalary}</div>,
        cell: (cellInfo) => <NumberCell cellInfo={cellInfo} />,
        filterFn: "weakEquals",
        meta: {
            label: employeeLabels.fixedSalary,
            resourceFieldType: resourceFieldTypes.number,
            filterable: true,
        },
    }),
    createDateTableColumn<Employee>({
        accessorKey: employeeProps.employmentStartDate,
        accessorFn: (row) => (row.employmentStartDate ? new Date(row.employmentStartDate) : null),
        header: employeeLabels.employmentStartDate,
        filterable: true,
    }),
    createDateTableColumn<Employee>({
        accessorKey: employeeProps.employmentEndDate,
        accessorFn: (row) => (row.employmentEndDate ? new Date(row.employmentEndDate) : null),
        header: employeeLabels.employmentEndDate,
    }),
    createTableColumn({
        accessorKey: employeeProps.isActive,
        header: employeeLabels.isActive,
        cell: (cellInfo) => <BooleanCell cellInfo={cellInfo} />,
        meta: {
            label: employeeLabels.isActive,
            resourceFieldType: resourceFieldTypes.checkbox,
            filterable: true,
        },
    }),
];

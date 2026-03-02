import { ColumnDef } from "@tanstack/react-table";
import { Employee } from "@/modules/employee/types/employee";
import { employeeProps } from "@/modules/employee/constants/employee-props";
import { employeeLabels } from "@/modules/employee/constants/employee-labels";
import { MrDateCell } from "@/shared/ui/table/table-body/table-row/date-cell/DateCell";
import { MrNumberCell } from "@/shared/ui/table/table-body/table-row/number-cell/NumberCell";
import { MrBooleanCell } from "@/shared/ui/table/table-body/table-row/boolean-cell/BooleanCell";
import { MrBadgeCell } from "@/shared/ui/table/table-body/table-row/badge-cell/BadgeCell";
import { MrAvatarCell } from "@/shared/ui/table/table-body/table-row/avatar-cell/AvatarCell";
import { employerPositionLabels } from "@/modules/employee/constants/employer-position-labels";
import { resourceFieldTypes } from "@/shared/ui/form/resource-field-type";

export const employeeColumns: ColumnDef<Employee>[] = [
    {
        accessorKey: employeeProps.name,
        header: employeeLabels.name,
        enableResizing: true,
        cell: (cellInfo) => <MrAvatarCell cellInfo={cellInfo} />,
        meta: { label: employeeLabels.name, resourceFieldType: resourceFieldTypes.text },
    },
    {
        accessorKey: employeeProps.position,
        header: employeeLabels.position,
        enableResizing: true,
        cell: (cellInfo) => <MrBadgeCell cellInfo={cellInfo} labels={employerPositionLabels} />,
        meta: { label: employeeLabels.position, resourceFieldType: resourceFieldTypes.select },
    },
    {
        accessorKey: employeeProps.phone,
        header: employeeLabels.phone,
        enableResizing: true,
        meta: { label: employeeLabels.phone, resourceFieldType: resourceFieldTypes.text },
    },
    {
        accessorKey: employeeProps.birthDate,
        header: () => <div className="w-full text-right">{employeeLabels.birthDate}</div>,
        enableResizing: true,
        cell: (cellInfo) => <MrDateCell cellInfo={cellInfo} />,
        meta: { label: employeeLabels.birthDate, resourceFieldType: resourceFieldTypes.date },
    },
    {
        accessorKey: employeeProps.fixedSalary,
        header: () => <div className="w-full text-right">{employeeLabels.fixedSalary}</div>,
        enableResizing: true,
        cell: (cellInfo) => <MrNumberCell cellInfo={cellInfo} />,
        meta: { label: employeeLabels.fixedSalary, resourceFieldType: resourceFieldTypes.number },
    },
    {
        accessorKey: employeeProps.employmentStartDate,
        header: () => <div className="w-full text-right">{employeeLabels.employmentStartDate}</div>,
        enableResizing: true,
        cell: (cellInfo) => <MrDateCell cellInfo={cellInfo} />,
        meta: { label: employeeLabels.employmentStartDate, resourceFieldType: resourceFieldTypes.date },
    },
    {
        accessorKey: employeeProps.employmentEndDate,
        header: () => <div className="w-full text-right">{employeeLabels.employmentEndDate}</div>,
        enableResizing: true,
        cell: (cellInfo) => <MrDateCell cellInfo={cellInfo} />,
        meta: { label: employeeLabels.employmentEndDate, resourceFieldType: resourceFieldTypes.date },
    },
    {
        accessorKey: employeeProps.isActive,
        header: employeeLabels.isActive,
        enableResizing: false,
        cell: (cellInfo) => <MrBooleanCell cellInfo={cellInfo} />,
        meta: { label: employeeLabels.isActive, resourceFieldType: resourceFieldTypes.checkbox },
    },
];

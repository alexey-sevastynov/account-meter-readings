import { ColumnDef } from "@tanstack/react-table";
import { Employee } from "@/models/employee";
import { employeeProps } from "@/features/coffee-shop/employee/constants/employee-props";
import { employeeLabels } from "@/features/coffee-shop/employee/constants/employee-labels";
import { MrDateCell } from "@/components/ui/table/table-body/table-row/date-cell/DateCell";
import { MrNumberCell } from "@/components/ui/table/table-body/table-row/number-cell/NumberCell";
import { MrBooleanCell } from "@/components/ui/table/table-body/table-row/boolean-cell/BooleanCell";
import { MrBadgeCell } from "@/components/ui/table/table-body/table-row/badge-cell/BadgeCell";
import { MrAvatarCell } from "@/components/ui/table/table-body/table-row/avatar-cell/AvatarCell";
import { employerPositionLabels } from "@/constants/employer-position-labels";

export const employeeColumns: ColumnDef<Employee>[] = [
    {
        accessorKey: employeeProps.name,
        header: employeeLabels.name,
        enableResizing: true,
        cell: (cellInfo) => <MrAvatarCell cellInfo={cellInfo} />,
    },
    {
        accessorKey: employeeProps.position,
        header: employeeLabels.position,
        enableResizing: true,
        cell: (cellInfo) => <MrBadgeCell cellInfo={cellInfo} labels={employerPositionLabels} />,
    },
    {
        accessorKey: employeeProps.phone,
        header: employeeLabels.phone,
        enableResizing: true,
    },
    {
        accessorKey: employeeProps.birthDate,
        header: () => <div className="w-full text-right">{employeeLabels.birthDate}</div>,
        enableResizing: true,
        cell: (cellInfo) => <MrDateCell cellInfo={cellInfo} />,
    },
    {
        accessorKey: employeeProps.fixedSalary,
        header: () => <div className="w-full text-right">{employeeLabels.fixedSalary}</div>,
        enableResizing: true,
        cell: (cellInfo) => <MrNumberCell cellInfo={cellInfo} />,
    },
    {
        accessorKey: employeeProps.employmentStartDate,
        header: () => <div className="w-full text-right">{employeeLabels.employmentStartDate}</div>,
        enableResizing: true,
        cell: (cellInfo) => <MrDateCell cellInfo={cellInfo} />,
    },
    {
        accessorKey: employeeProps.employmentEndDate,
        header: () => <div className="w-full text-right">{employeeLabels.employmentEndDate}</div>,
        enableResizing: true,
        cell: (cellInfo) => <MrDateCell cellInfo={cellInfo} />,
    },
    {
        accessorKey: employeeProps.isActive,
        header: employeeLabels.isActive,
        enableResizing: false,
        cell: (cellInfo) => <MrBooleanCell cellInfo={cellInfo} />,
    },
];

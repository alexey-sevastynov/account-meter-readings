import { ColumnDef } from "@tanstack/react-table";
import { Employee } from "@/models/employee";
import { employeeProps } from "@/features/coffee-shop/employee/constants/employee-props";
import { employeeLabels } from "@/features/coffee-shop/employee/constants/employee-labels";

export const employeeColumns: ColumnDef<Employee>[] = [
    {
        accessorKey: employeeProps.name,
        header: employeeLabels.name,
        enableResizing: true,
    },
    {
        accessorKey: employeeProps.position,
        header: employeeLabels.position,
        enableResizing: true,
    },
    {
        accessorKey: employeeProps.phone,
        header: employeeLabels.phone,
        enableResizing: true,
    },
    {
        accessorKey: employeeProps.birthDate,
        header: employeeLabels.birthDate,
        enableResizing: true,
    },
    {
        accessorKey: employeeProps.fixedSalary,
        header: employeeLabels.fixedSalary,
        enableResizing: true,
    },
    {
        accessorKey: employeeProps.employmentStartDate,
        header: employeeLabels.employmentStartDate,
        enableResizing: true,
    },
    {
        accessorKey: employeeProps.employmentEndDate,
        header: employeeLabels.employmentEndDate,
        enableResizing: true,
    },
    {
        accessorKey: employeeProps.isActive,
        header: employeeLabels.isActive,
        enableResizing: false,
    },
];

import { ColumnDef } from "@tanstack/react-table";
import { Employee } from "@/models/employee";
import { employeeProps } from "@/features/coffee-shop/employee/employee-props";

export const employeeColumns: ColumnDef<Employee>[] = [
    {
        accessorKey: employeeProps.name,
        header: "Імʼя",
        enableResizing: true,
    },
    {
        accessorKey: employeeProps.position,
        header: "Посада",
        enableResizing: true,
    },
    {
        accessorKey: employeeProps.phone,
        header: "Телефон",
        enableResizing: true,
    },
    {
        accessorKey: employeeProps.birthDate,
        header: "Дата народження",
        enableResizing: true,
    },
    {
        accessorKey: employeeProps.fixedSalary,
        header: "Фіксована зарплата",
        enableResizing: true,
    },
    {
        accessorKey: employeeProps.employmentStartDate,
        header: "Дата початку роботи",
        enableResizing: true,
    },
    {
        accessorKey: employeeProps.employmentEndDate,
        header: "Дата закінчення роботи",
        enableResizing: true,
    },
    {
        accessorKey: employeeProps.isActive,
        header: "Статус",
        enableResizing: false,
    },
];

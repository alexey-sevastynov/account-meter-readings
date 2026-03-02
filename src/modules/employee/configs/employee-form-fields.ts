import { employerPositionLabels } from "@/modules/employee/constants/employer-position-labels";
import { employerPositionKeys } from "@/modules/employee/enums/employer-position-key";
import { resourceFieldTypes } from "@/shared/ui/form/resource-field-type";
import { ResourceField } from "@/shared/types/resource-field";
import { createEnumOptions } from "@/shared/utils/create-enum-options";
import { employeeProps } from "@/modules/employee/constants/employee-props";
import { employeeLabels } from "@/modules/employee/constants/employee-labels";
import { Employee } from "@/modules/employee/types/employee";

export const employeeFormFields: ResourceField<Employee>[] = [
    {
        name: employeeProps.name as keyof Employee,
        required: true,
        label: employeeLabels.name,
        type: resourceFieldTypes.text,
    },
    {
        name: employeeProps.position as keyof Employee,
        required: true,
        label: employeeLabels.position,
        type: resourceFieldTypes.select,
        options: createEnumOptions(employerPositionKeys, employerPositionLabels),
    },
    {
        name: employeeProps.fixedSalary as keyof Employee,
        label: employeeLabels.fixedSalary,
        type: resourceFieldTypes.number,
    },
    {
        name: employeeProps.phone as keyof Employee,
        label: employeeLabels.phone,
        type: resourceFieldTypes.text,
    },
    {
        name: employeeProps.birthDate as keyof Employee,
        label: employeeLabels.birthDate,
        type: resourceFieldTypes.date,
    },
    {
        name: employeeProps.employmentStartDate as keyof Employee,
        label: employeeLabels.employmentStartDate,
        type: resourceFieldTypes.date,
    },
    {
        name: employeeProps.employmentEndDate as keyof Employee,
        label: employeeLabels.employmentEndDate,
        type: resourceFieldTypes.date,
    },
];

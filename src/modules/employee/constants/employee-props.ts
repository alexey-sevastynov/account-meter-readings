import { nameOf } from "@/shared/utils/name-of";
import { Employee } from "@/modules/employee/types/employee";

export const employeeProps: Record<keyof Employee, string> = {
    _id: nameOf<Employee>("_id"),
    name: nameOf<Employee>("name"),
    position: nameOf<Employee>("position"),
    fixedSalary: nameOf<Employee>("fixedSalary"),
    isActive: nameOf<Employee>("isActive"),
    phone: nameOf<Employee>("phone"),
    birthDate: nameOf<Employee>("birthDate"),
    employmentStartDate: nameOf<Employee>("employmentStartDate"),
    employmentEndDate: nameOf<Employee>("employmentEndDate"),
    createdAt: nameOf<Employee>("createdAt"),
    updatedAt: nameOf<Employee>("updatedAt"),
} as const;

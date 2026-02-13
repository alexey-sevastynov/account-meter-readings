import { nameOf } from "@/utils/name-of";
import { Employee } from "@/models/employee";

export const employeeProps: Record<keyof Employee, string> = {
    name: nameOf<Employee>("name"),
    position: nameOf<Employee>("position"),
    fixedSalary: nameOf<Employee>("fixedSalary"),
    isActive: nameOf<Employee>("isActive"),
    phone: nameOf<Employee>("phone"),
    birthDate: nameOf<Employee>("birthDate"),
    employmentStartDate: nameOf<Employee>("employmentStartDate"),
    employmentEndDate: nameOf<Employee>("employmentEndDate"),
} as const;

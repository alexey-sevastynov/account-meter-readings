import { EmployerPositionKey } from "@/enums/models/employer-position-key";

export interface Employee {
    name: string;
    position: EmployerPositionKey;
    fixedSalary?: number;
    isActive?: boolean;
    phone?: string;
    birthDate?: string;
    employmentStartDate?: string;
    employmentEndDate?: string;
}

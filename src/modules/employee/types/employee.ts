import { EmployerPositionKey } from "@/modules/employee/enums/employer-position-key";
import { EntityTimestamps } from "@/shared/types/entity-timestamps";
import { WithObjectId } from "@/shared/types/with-object-id";

export interface Employee extends WithObjectId, EntityTimestamps {
    name: string;
    position: EmployerPositionKey;
    fixedSalary?: number;
    isActive?: boolean;
    phone?: string;
    birthDate?: string;
    employmentStartDate?: string;
    employmentEndDate?: string;
}

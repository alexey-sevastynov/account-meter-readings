import { EmployerPositionKey } from "@/enums/models/employer-position-key";
import { EntityTimestamps } from "@/types/entity-timestamps";
import { WithObjectId } from "@/types/with-object-id";

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

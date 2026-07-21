import { EntityTimestamps } from "@/shared/types/entity-timestamps";
import { WithObjectId } from "@/shared/types/with-object-id";

export interface OwnerWithdrawal extends WithObjectId, EntityTimestamps {
    withdrawalDate: string;
    amount: number;
    description?: string;
}

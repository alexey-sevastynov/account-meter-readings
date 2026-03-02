import { EntityTimestamps } from "@/shared/types/entity-timestamps";
import { WithId } from "@/shared/types/with-id";

export interface BaseResource extends WithId, EntityTimestamps {}

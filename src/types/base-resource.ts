import { EntityTimestamps } from "@/types/entity-timestamps";
import { WithId } from "@/types/with-id";

export interface BaseResource extends WithId, EntityTimestamps {}

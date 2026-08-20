import { KavappInventoryCategoryKey } from "@/modules/kavapp-inventory/enums/kavapp-inventory-category-key";
import { EntityTimestamps } from "@/shared/types/entity-timestamps";
import { WithObjectId } from "@/shared/types/with-object-id";

export interface InventoryAlertRule extends WithObjectId, EntityTimestamps {
    itemType: Exclude<KavappInventoryCategoryKey, "all">;
    kavappItemId: string;
    name: string;
    unit: string;
    threshold: number;
    description?: string;
}

export interface InventoryAlertRuleForm extends InventoryAlertRule {
    inventoryItem: string;
}

export type InventoryAlertRulePayload = Omit<InventoryAlertRule, "_id" | "createdAt" | "updatedAt">;

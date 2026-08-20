import { KavappInventoryCategoryKey } from "@/modules/kavapp-inventory/enums/kavapp-inventory-category-key";

export interface KavappCatalogItem {
    id: string;
    name: string;
    units?: number;
    unitsName?: string;
    volumeUnits?: string;
    volumeUnitsName?: string;
    type: Exclude<KavappInventoryCategoryKey, "all" | "kitchen">;
}

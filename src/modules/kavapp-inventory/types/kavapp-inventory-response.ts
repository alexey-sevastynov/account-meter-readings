import { KavappInventoryItem } from "@/modules/kavapp-inventory/types/kavapp-inventory-item";

export interface KavappInventoryResponse {
    cup: KavappInventoryItem[];
    ingredient: KavappInventoryItem[];
    product: KavappInventoryItem[];
    kitchen: KavappInventoryItem[];
}

export interface KavappInventorySnapshot {
    _id: string;
    syncDate: string;
    cup: KavappInventoryItem[];
    ingredient: KavappInventoryItem[];
    product: KavappInventoryItem[];
    kitchen: KavappInventoryItem[];
    createdAt?: string;
    updatedAt?: string;
}

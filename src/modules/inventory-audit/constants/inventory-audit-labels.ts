import { InventoryAudit } from "@/modules/inventory-audit/types/inventory-audit";

export const inventoryAuditLabels: Record<keyof InventoryAudit, string> = {
    _id: "Id",
    title: "Назва",
    shortageAmount: "Сума нестачі",
    surplusAmount: "Сума надлишку",
    validFrom: "Діє з",
    validTo: "Діє до",
    description: "Опис",
    createdAt: "Створено",
    updatedAt: "Оновлено",
} as const;

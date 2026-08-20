import { kavappInventoryUnitKeys } from "@/modules/kavapp-inventory/enums/kavapp-inventory-unit-keys";

export const kavappInventoryUnitLabels = {
    [kavappInventoryUnitKeys.piece]: "штук",
    [kavappInventoryUnitKeys.gram]: "грам",
    [kavappInventoryUnitKeys.milliliter]: "мілілітрів",
} as const;

export type KavappInventoryUnit = (typeof kavappInventoryUnitKeys)[keyof typeof kavappInventoryUnitKeys];

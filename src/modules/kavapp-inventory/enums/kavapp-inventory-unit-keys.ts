export const kavappInventoryUnitKeys = {
    piece: 1,
    gram: 2,
    milliliter: 4,
} as const;

export type KavappInventoryUnitKey = (typeof kavappInventoryUnitKeys)[keyof typeof kavappInventoryUnitKeys];

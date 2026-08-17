export const kavappInventoryCategoryKeys = {
    all: "all",
    cup: "cup",
    ingredient: "ingredient",
    product: "product",
    kitchen: "kitchen",
} as const;

export type KavappInventoryCategoryKey =
    (typeof kavappInventoryCategoryKeys)[keyof typeof kavappInventoryCategoryKeys];

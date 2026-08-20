import { KavappInventoryItem } from "@/modules/kavapp-inventory/types/kavapp-inventory-item";

type KavappInventoryItemLabels = Record<keyof KavappInventoryItem, string>;

export const kavappInventoryLabels: KavappInventoryItemLabels = {
    article: "Артикул",
    manufacturer: "Виробник",
    name: "Назва",
    type: "Тип",
    itemcount: "Кількість",
    units: "Одиниця вимірювання",
    itemPrice: "Ціна собівартості",
    itemsCost: "Сума собівартості",
    id: "Id",
    itemid: "Id товару",
    unitsName: "Назва одиниць",
    orderid: "Id замовлення",
    salePrice: "Ціна реалізації",
    saleCost: "Сума реалізації",
} as const;

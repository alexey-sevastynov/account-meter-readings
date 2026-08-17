import { nameOf } from "@/shared/utils/name-of";
import { KavappInventoryItem } from "@/modules/kavapp-inventory/types/kavapp-inventory-item";

export const kavappInventoryProps: Record<keyof KavappInventoryItem, string> = {
    article: nameOf<KavappInventoryItem>("article"),
    manufacturer: nameOf<KavappInventoryItem>("manufacturer"),
    name: nameOf<KavappInventoryItem>("name"),
    type: nameOf<KavappInventoryItem>("type"),
    itemcount: nameOf<KavappInventoryItem>("itemcount"),
    units: nameOf<KavappInventoryItem>("units"),
    itemPrice: nameOf<KavappInventoryItem>("itemPrice"),
    itemsCost: nameOf<KavappInventoryItem>("itemsCost"),
    id: nameOf<KavappInventoryItem>("id"),
    itemid: nameOf<KavappInventoryItem>("itemid"),
    unitsName: nameOf<KavappInventoryItem>("unitsName"),
    orderid: nameOf<KavappInventoryItem>("orderid"),
    salePrice: nameOf<KavappInventoryItem>("salePrice"),
    saleCost: nameOf<KavappInventoryItem>("saleCost"),
} as const;

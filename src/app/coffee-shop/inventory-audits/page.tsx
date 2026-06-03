import { InventoryAudit } from "@/modules/inventory-audit/components/page/InventoryAudit";
import { createMetadata } from "@/shared/utils/seo/create-metadata";
import { JsonLd } from "@/shared/ui/seo/JsonLd";
import { generateBreadcrumbSchema } from "@/shared/utils/seo/shema/generate-breadcrumb";
import { routeKeys } from "@/shared/constants/route-keys";

export const metadata = createMetadata({
    title: "Інвентаризація та склад",
    resourceName: "Кав'ярня",
    description: `Проводьте регулярний аудит інгредієнтів та товарів: зернової кави, молока, сиропів, 
    стаканчиків та витратних матеріалів.`,
    canonicalPath: routeKeys.inventoryAudits,
});

export default async function InventoryAuditsPage() {
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Кав'ярня", path: routeKeys.coffeeShop },
        { name: "Інвентаризація", path: routeKeys.inventoryAudits },
    ]);

    return (
        <>
            <JsonLd schema={breadcrumbSchema} />
            <InventoryAudit />
        </>
    );
}

import { KavappInventory } from "@/modules/kavapp-inventory/components/page/KavappInventory";
import { createMetadata } from "@/shared/utils/seo/create-metadata";
import { JsonLd } from "@/shared/ui/seo/JsonLd";
import { generateBreadcrumbSchema } from "@/shared/utils/seo/shema/generate-breadcrumb";
import { routeKeys } from "@/shared/constants/route-keys";

export const metadata = createMetadata({
    title: "Наявність товару на торговій точці",
    resourceName: "Кав'ярня",
    description: `Наявність товару на торговій точці із системи Kavapp. 
    Посуд, інгредієнти, товари та заготівлі.`,
    canonicalPath: routeKeys.kavappInventory,
});

export default async function KavappInventoryPage() {
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Кав'ярня", path: routeKeys.coffeeShop },
        { name: "Kavapp інвентаризація", path: routeKeys.kavappInventory },
    ]);

    return (
        <>
            <JsonLd schema={breadcrumbSchema} />
            <KavappInventory />
        </>
    );
}

import { InventoryAlertRuleResourceTable } from "@/modules/kavapp-inventory-alert-rules/components/InventoryAlertRuleResourceTable";
import { createMetadata } from "@/shared/utils/seo/create-metadata";
import { routeKeys } from "@/shared/constants/route-keys";
import { Breadcrumbs } from "@/shared/ui/breadcrumbs/Breadcrumbs";

export const metadata = createMetadata({
    title: "Правила сповіщень про залишки",
    resourceName: "Кав'ярня",
    description: "Налаштування сповіщень про мінімальні залишки інвентарю Kavapp.",
    canonicalPath: routeKeys.kavappInventoryAlertRules,
});

export default function InventoryAlertRulesPage() {
    return (
        <>
            <Breadcrumbs
                items={[
                    { label: "Кав'ярня", href: routeKeys.coffeeShop },
                    { label: "Наявність товару", href: routeKeys.kavappInventory },
                    { label: "Правила сповіщень" },
                ]}
            />
            <InventoryAlertRuleResourceTable />
        </>
    );
}

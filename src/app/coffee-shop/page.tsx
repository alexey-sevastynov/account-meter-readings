import { CoffeeShopStatistics } from "@/modules/statistics/components/page/CoffeeShopStatistics";
import { createMetadata } from "@/shared/utils/seo/create-metadata";
import { JsonLd } from "@/shared/ui/seo/JsonLd";
import { generateResourceWorkspaceSchema } from "@/shared/utils/seo/shema/generate-resource-workspace";
import { routeKeys } from "@/shared/constants/route-keys";

export const metadata = createMetadata({
    title: "Панель управління",
    resourceName: "Кав'ярня",
    description: `Статистика та аналітика закладу. 
    Відстежуйте виторг, кількість замовлень, середній чек та фінансову динаміку в реальному часі.`,
    canonicalPath: routeKeys.coffeeShop,
});

export default async function CoffeeShopPage() {
    const shopSchema = generateResourceWorkspaceSchema(
        "Кав'ярня — Панель аналітики",
        "Аналітичний дашборд для контролю виторгу, транзакцій та прибутковості кав'ярні.",
        routeKeys.coffeeShop,
        "FoodEstablishment",
    );

    return (
        <>
            <JsonLd schema={shopSchema} />
            <CoffeeShopStatistics />
        </>
    );
}

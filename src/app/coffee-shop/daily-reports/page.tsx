import { DailyReports } from "@/modules/daily-report/components/page/DailyReports";
import { createMetadata } from "@/shared/utils/seo/create-metadata";
import { JsonLd } from "@/shared/ui/seo/JsonLd";
import { generateBreadcrumbSchema } from "@/shared/utils/seo/shema/generate-breadcrumb";
import { routeKeys } from "@/shared/constants/route-keys";

export const metadata = createMetadata({
    title: "Щоденні звіти",
    resourceName: "Кав'ярня",
    description: `Журнал фінансових та касових звітів кав'ярні за зміну. 
    Фіксуйте виторг, суми готівки, термінал, транзакції та залишки.`,
    canonicalPath: routeKeys.dailyReports,
});

export default async function DailyReportsPage() {
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Кав'ярня", path: routeKeys.coffeeShop },
        { name: "Щоденні звіти", path: routeKeys.dailyReports },
    ]);

    return (
        <>
            <JsonLd schema={breadcrumbSchema} />
            <DailyReports />
        </>
    );
}

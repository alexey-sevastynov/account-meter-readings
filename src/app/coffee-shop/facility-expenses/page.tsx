import { FacilityExpense } from "@/modules/facility-expense/components/page/FacilityExpense";
import { createMetadata } from "@/shared/utils/seo/create-metadata";
import { JsonLd } from "@/shared/ui/seo/JsonLd";
import { routeKeys } from "@/shared/constants/route-keys";
import { generateBreadcrumbSchema } from "@/shared/utils/seo/shema/generate-breadcrumb";

export const metadata = createMetadata({
    title: "Оренда та утримання приміщення",
    resourceName: "Кав'ярня",
    description: `Контролюйте витрати на оренду та утримання приміщення: 
    орендна плата, прибирання, витратні матеріали, дрібний ремонт та інші витрати.`,
    canonicalPath: routeKeys.facilityExpenses,
});

export default async function FacilityExpensesPage() {
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Кав'ярня", path: routeKeys.coffeeShop },
        { name: "Оренда та утримання приміщення", path: routeKeys.facilityExpenses },
    ]);

    return (
        <>
            <JsonLd schema={breadcrumbSchema} />
            <FacilityExpense />
        </>
    );
}

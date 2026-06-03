import { ExpenseReport } from "@/modules/expense-report/components/page/ExpenseReport";
import { createMetadata } from "@/shared/utils/seo/create-metadata";
import { JsonLd } from "@/shared/ui/seo/JsonLd";
import { routeKeys } from "@/shared/constants/route-keys";
import { generateBreadcrumbSchema } from "@/shared/utils/seo/shema/generate-breadcrumb";

export const metadata = createMetadata({
    title: "Звіти про витрати",
    resourceName: "Кав'ярня",
    description: `Контролюйте та оптимізуйте витрати вашої кав'ярні: 
    закупівля зерна, молока, господарських товарів, оренда та комунальні послуги.`,
    canonicalPath: routeKeys.expenseReports,
});

export default async function ExpenseReportsPage() {
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Кав'ярня", path: routeKeys.coffeeShop },
        { name: "Звіти про витрати", path: routeKeys.expenseReports },
    ]);

    return (
        <>
            <JsonLd schema={breadcrumbSchema} />
            <ExpenseReport />
        </>
    );
}

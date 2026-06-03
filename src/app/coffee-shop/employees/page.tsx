import { Employees } from "@/modules/employee/components/page/Employees";
import { createMetadata } from "@/shared/utils/seo/create-metadata";
import { JsonLd } from "@/shared/ui/seo/JsonLd";
import { routeKeys } from "@/shared/constants/route-keys";
import { generateBreadcrumbSchema } from "@/shared/utils/seo/shema/generate-breadcrumb";

export const metadata = createMetadata({
    title: "Працівники та персонал",
    resourceName: "Кав'ярня",
    description: `База даних співробітників кав'ярні. 
    Керуйте списком бариста та адміністраторів, призначайте ролі, переглядайте контакти та активність.`,
    canonicalPath: routeKeys.coffeeShop,
});

export default async function EmployeesPage() {
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Кав'ярня", path: routeKeys.coffeeShop },
        { name: "Працівники", path: routeKeys.employees },
    ]);

    return (
        <>
            <JsonLd schema={breadcrumbSchema} />
            <Employees />
        </>
    );
}

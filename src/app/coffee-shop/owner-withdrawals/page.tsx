import { OwnerWithdrawal } from "@/modules/owner-withdrawal/components/page/OwnerWithdrawal";
import { createMetadata } from "@/shared/utils/seo/create-metadata";
import { JsonLd } from "@/shared/ui/seo/JsonLd";
import { routeKeys } from "@/shared/constants/route-keys";
import { generateBreadcrumbSchema } from "@/shared/utils/seo/shema/generate-breadcrumb";

export const metadata = createMetadata({
    title: "Виведення коштів власником",
    resourceName: "Кав'ярня",
    description: "Контролюйте виведення коштів власником: дату, суму та короткий опис операції.",
    canonicalPath: routeKeys.ownerWithdrawals,
});

export default async function OwnerWithdrawalsPage() {
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Кав'ярня", path: routeKeys.coffeeShop },
        { name: "Виведення коштів власником", path: routeKeys.ownerWithdrawals },
    ]);

    return (
        <>
            <JsonLd schema={breadcrumbSchema} />
            <OwnerWithdrawal />
        </>
    );
}

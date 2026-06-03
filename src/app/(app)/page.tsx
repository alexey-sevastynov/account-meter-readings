import { Home } from "@/app/(app)/Home";
import { cookieKeys } from "@/shared/utils/cookie/cookie-key";
import { getServerCookie } from "@/shared/utils/cookie/cookie-server";
import { createMetadata } from "@/shared/utils/seo/create-metadata";
import { JsonLd } from "@/shared/ui/seo/JsonLd";
import { generateWebApplicationSchema } from "@/shared/utils/seo/shema/web-application";

export const metadata = createMetadata({
    title: "Головна панель управління",
});

export default async function HomePage() {
    const userName = await getServerCookie(cookieKeys.userName);

    return (
        <>
            <JsonLd schema={generateWebApplicationSchema()} />
            <Home userName={userName} />
        </>
    );
}

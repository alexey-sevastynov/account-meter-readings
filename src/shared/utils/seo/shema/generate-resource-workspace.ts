import { siteMetadata } from "@/shared/utils/seo/site-metada";

export function generateResourceWorkspaceSchema(
    name: string,
    description: string,
    urlPath: string,
    category = "Business",
) {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        name,
        description,
        url: `${siteMetadata.url}${urlPath}`,
        additionalType: `https://schema.org/${category}`,
    };
}

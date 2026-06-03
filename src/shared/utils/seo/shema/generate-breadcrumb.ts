import { siteMetadata } from "@/shared/utils/seo/site-metada";

export function generateBreadcrumbSchema(items: { name: string; path: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: `${siteMetadata.url}${item.path}`,
        })),
    };
}

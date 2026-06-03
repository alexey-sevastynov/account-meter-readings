import { siteMetadata } from "@/shared/utils/seo/site-metada";

export function generateWebApplicationSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: siteMetadata.name,
        url: siteMetadata.url,
        description: siteMetadata.description,
        applicationCategory: "BusinessApplication",
        operatingSystem: "All",
        browserRequirements: "Requires HTML5 compatible browser",
        offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
        },
    };
}

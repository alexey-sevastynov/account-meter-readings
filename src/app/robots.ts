import type { MetadataRoute } from "next";
import { siteMetadata } from "@/shared/utils/seo/site-metada";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/auth/", "/_next/", "/api/"],
        },
        sitemap: `${siteMetadata.url}/sitemap.xml`,
    };
}

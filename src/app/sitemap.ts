import type { MetadataRoute } from "next";
import { siteMetadata } from "@/shared/utils/seo/site-metada";
import { routeKeys } from "@/shared/constants/route-keys";

export default function sitemap(): MetadataRoute.Sitemap {
    return Object.values(routeKeys).map((route) => ({
        url: `${siteMetadata.url}${route}`,
        lastModified: new Date(),
        changeFrequency: route === routeKeys.home ? "daily" : "weekly",
        priority: route === routeKeys.home ? 1.0 : route === routeKeys.coffeeShop ? 0.8 : 0.6,
    }));
}

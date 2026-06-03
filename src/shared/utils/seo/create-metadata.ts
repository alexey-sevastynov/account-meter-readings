import type { Metadata } from "next";
import { siteMetadata } from "@/shared/utils/seo/site-metada";
import { SEOOptions } from "@/shared/utils/seo/types/seo-options";

const robotsIndex = {
    index: true,
    follow: true,
    googleBot: {
        index: true,
        follow: true,
    },
};

const robotsNoIndex = {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
        index: false,
        follow: false,
    },
};

export function createMetadata(options: SEOOptions): Metadata {
    const title = buildTitle(options.title, options.resourceName);
    const url = buildFullUrl(options.canonicalPath);
    const description = options.description ?? siteMetadata.description;
    const ogImage = options.ogImage ?? siteMetadata.ogImage;

    return {
        metadataBase: new URL(siteMetadata.url),
        title,
        description,
        keywords: normalizeKeywords(options.keywords),
        alternates: options.canonicalPath ? { canonical: url } : undefined,
        openGraph: {
            title: `${title} | ${siteMetadata.name}`,
            description,
            url,
            siteName: siteMetadata.name,
            locale: "uk_UA",
            type: "website",
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: `${title} | ${siteMetadata.name}`,
            description,
            images: [ogImage],
        },

        robots: buildRobots(options.noIndex ?? false),
    };
}

function normalizeKeywords(keywords?: string[] | string) {
    if (!keywords) return siteMetadata.defaultKeywords;

    return Array.isArray(keywords) ? keywords : [keywords];
}

function buildFullUrl(path?: string) {
    if (!path) return siteMetadata.url;

    return `${siteMetadata.url}${path.startsWith("/") ? path : `/${path}`}`;
}

function buildTitle(title: string, resourceName?: string) {
    return resourceName ? `${title} (${resourceName})` : title;
}

function buildRobots(noIndex: boolean) {
    return noIndex ? robotsNoIndex : robotsIndex;
}

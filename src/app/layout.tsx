import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/app/AppProvider";
import { getThemeModeFromCookie } from "@/shared/context/theme-provider/theme-from-cookie";
import { cookieKeys } from "@/shared/utils/cookie/cookie-key";
import { getServerCookie } from "@/shared/utils/cookie/cookie-server";
import { siteMetadata } from "@/shared/utils/seo/site-metada";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        template: siteMetadata.titleTemplate,
        default: siteMetadata.defaultTitle,
    },
    description: siteMetadata.description,
    keywords: siteMetadata.defaultKeywords,
    metadataBase: new URL(siteMetadata.url),
    openGraph: {
        title: siteMetadata.defaultTitle,
        description: siteMetadata.description,
        siteName: siteMetadata.name,
        locale: "uk_UA",
        type: "website",
        images: [
            {
                url: siteMetadata.ogImage,
                width: 1200,
                height: 630,
                alt: siteMetadata.name,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: siteMetadata.defaultTitle,
        description: siteMetadata.description,
        images: [siteMetadata.ogImage],
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/favicon.ico",
    },
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const themeCookie = await getServerCookie(cookieKeys.theme);

    return (
        <html lang="uk">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <AppProvider initialTheme={getThemeModeFromCookie(themeCookie)}>{children}</AppProvider>
            </body>
        </html>
    );
}

import { ReactNode } from "react";
import NextLink from "next/link";
import { cn } from "@/shared/lib/cn";
import { LinkVariantKey, linkVariantKeys } from "@/shared/ui/link/link-variant-key";

interface LinkProps {
    href: string;
    children: ReactNode;
    variant?: LinkVariantKey;
    className?: string;
}

const baseStyles =
    "text-sm transition-colors hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2";

const variants: Record<LinkVariantKey, string> = {
    primary: "text-gray-900 hover:text-gray-700 focus:ring-gray-400",
    secondary: "text-gray-500 hover:text-gray-700 focus:ring-gray-300",
    underline: "text-gray-900 underline hover:text-gray-700 focus:ring-gray-400",
};

export function Link({
    href,
    children,
    variant = linkVariantKeys.primary,
    className,
    ...props
}: LinkProps) {
    return (
        <NextLink href={href} {...props} className={cn(baseStyles, variants[variant], className)}>
            {children}
        </NextLink>
    );
}

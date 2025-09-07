import { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { LinkVariantKey, linkVariantKeys } from "@/enums/ui/link-variant-key";

interface MrLinkProps {
    href: string;
    children: ReactNode;
    variant?: LinkVariantKey;
    className?: string;
}

const baseStyles =
    "text-sm transition-colors hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2";

const variants: Record<LinkVariantKey, string> = {
    primary: "text-blue-600 hover:text-blue-700 focus:ring-blue-500",
    secondary: "text-gray-600 hover:text-gray-800 focus:ring-gray-400",
    underline: "text-blue-600 underline hover:text-blue-700 focus:ring-blue-500",
};

export function MrLink({
    href,
    children,
    variant = linkVariantKeys.primary,
    className,
    ...props
}: MrLinkProps) {
    return (
        <Link href={href} {...props} className={cn(baseStyles, variants[variant], className)}>
            {children}
        </Link>
    );
}

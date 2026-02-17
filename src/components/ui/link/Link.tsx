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
    primary: "text-gray-900 hover:text-gray-700 focus:ring-gray-400",
    secondary: "text-gray-500 hover:text-gray-700 focus:ring-gray-300",
    underline: "text-gray-900 underline hover:text-gray-700 focus:ring-gray-400",
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

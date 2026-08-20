import Link from "next/link";
import { Fragment } from "react";
import { ChevronRight } from "lucide-react";
import { cn } from "@/shared/lib/cn";

export interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
    className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
    return (
        <nav aria-label="Хлібні крихти" className={cn("mb-3", className)}>
            <ol className="text-muted-foreground flex flex-wrap items-center gap-1 text-sm">
                {items.map((item, index) => {
                    const isCurrent = index === items.length - 1;

                    return (
                        <Fragment key={`${item.label}-${index}`}>
                            {index > 0 && <ChevronRight aria-hidden className="h-4 w-4 shrink-0" />}
                            <li aria-current={isCurrent ? "page" : undefined}>
                                {item.href && !isCurrent ? (
                                    <Link
                                        className="hover:text-foreground transition-colors"
                                        href={item.href}
                                    >
                                        {item.label}
                                    </Link>
                                ) : (
                                    <span className={isCurrent ? "text-foreground" : undefined}>
                                        {item.label}
                                    </span>
                                )}
                            </li>
                        </Fragment>
                    );
                })}
            </ol>
        </nav>
    );
}

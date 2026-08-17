"use client";

import { cn } from "@/shared/lib/cn";
import {
    KavappInventoryCategoryKey,
    kavappInventoryCategoryKeys,
} from "@/modules/kavapp-inventory/enums/kavapp-inventory-category-key";
import { kavappInventoryCategoryLabels } from "@/modules/kavapp-inventory/constants/kavapp-inventory-category";

interface KavappInventoryCategoryTabsProps {
    activeCategory: KavappInventoryCategoryKey;
    onCategoryChange: (category: KavappInventoryCategoryKey) => void;
}

const categoryKeys = Object.values(kavappInventoryCategoryKeys);

export function KavappInventoryCategoryTabs({
    activeCategory,
    onCategoryChange,
}: KavappInventoryCategoryTabsProps) {
    return (
        <div className="bg-secondary flex gap-1 overflow-x-auto rounded-xl p-1">
            {categoryKeys.map((categoryKey) => (
                <button
                    key={categoryKey}
                    type="button"
                    onClick={() => onCategoryChange(categoryKey)}
                    className={cn(
                        "cursor-pointer rounded-lg px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors",
                        activeCategory === categoryKey
                            ? "bg-background text-foreground shadow-xs"
                            : "text-muted-foreground hover:text-foreground",
                    )}
                >
                    {kavappInventoryCategoryLabels[categoryKey]}
                </button>
            ))}
        </div>
    );
}

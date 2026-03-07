import { CellContext } from "@tanstack/react-table";
import { Badge } from "@/shared/ui/badge/Badge";
import { getRandomBadgeColor } from "@/shared/ui/badge/badge.funcs";

interface BadgeCellProps<TData, TKey extends string> {
    cellInfo: CellContext<TData, unknown>;
    labels: Record<TKey, string>;
}

export function BadgeCell<TData, TKey extends string>({ cellInfo, labels }: BadgeCellProps<TData, TKey>) {
    const value = cellInfo.getValue() as TKey;

    if (!value || !labels[value]) return null;

    const randomBadgeColor = getRandomBadgeColor(value);

    return (
        <Badge color={randomBadgeColor.bg} textColor={randomBadgeColor.text}>
            {labels[value]}
        </Badge>
    );
}

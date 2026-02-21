import { CellContext } from "@tanstack/react-table";
import { MrBadge } from "@/components/ui/badge/Badge";
import { getRandomBadgeColor } from "@/components/ui/badge/badge.funcs";

interface MrBadgeCellProps<TData, TKey extends string> {
    cellInfo: CellContext<TData, unknown>;
    labels: Record<TKey, string>;
}

export function MrBadgeCell<TData, TKey extends string>({ cellInfo, labels }: MrBadgeCellProps<TData, TKey>) {
    const value = cellInfo.getValue() as TKey;

    if (!value || !labels[value]) return null;

    const randomBadgeColor = getRandomBadgeColor(value);

    return (
        <MrBadge color={randomBadgeColor.bg} textColor={randomBadgeColor.text}>
            {labels[value]}
        </MrBadge>
    );
}

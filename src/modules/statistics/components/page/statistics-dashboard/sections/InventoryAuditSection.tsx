import { MetricCard } from "@/shared/ui/metric-card/MetricCard";
import { formatUah } from "@/shared/utils/currency";
import { iconNames } from "@/shared/ui/icon/icon-name";
import { InventoryAuditTotals } from "@/modules/statistics/types/inventory-audit-totals";
import { Text } from "@/shared/ui/typography/text/Text";

interface InventoryAuditSectionProps {
    inventoryAuditTotals: InventoryAuditTotals;
}

export function InventoryAuditSection({ inventoryAuditTotals }: InventoryAuditSectionProps) {
    return (
        <section className="flex flex-col gap-3">
            <Text uppercase>Інвентаризація</Text>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                <MetricCard
                    title="Сума нестачі"
                    value={formatUah(inventoryAuditTotals.totalInventoryShortageAmount)}
                    iconName={iconNames.trendingDown}
                />
                <MetricCard
                    title="Сума надлишку"
                    value={formatUah(inventoryAuditTotals.totalInventorySurplusAmount)}
                    iconName={iconNames.piggyBank}
                />
                <MetricCard
                    title="Коригування інвентаризації"
                    value={formatUah(inventoryAuditTotals.inventoryAuditAdjustmentAmount)}
                    iconName={iconNames.activity}
                />
            </div>
        </section>
    );
}

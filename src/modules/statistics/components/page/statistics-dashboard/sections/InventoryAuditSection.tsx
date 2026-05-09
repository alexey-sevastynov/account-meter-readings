import { MetricCard } from "@/shared/ui/metric-card/MetricCard";
import { formatUah } from "@/shared/utils/currency";
import { iconNames } from "@/shared/ui/icon/icon-name";
import { InventoryAuditTotals } from "@/modules/statistics/types/inventory-audit-totals";

interface InventoryAuditSectionProps {
    inventoryAuditTotals: InventoryAuditTotals;
}

export function InventoryAuditSection({ inventoryAuditTotals }: InventoryAuditSectionProps) {
    return (
        <section className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold tracking-wide text-gray-500 uppercase">Інвентаризація</h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                <MetricCard
                    title="Сума нестачі"
                    value={formatUah(inventoryAuditTotals.totalInventoryShortageAmount)}
                    iconName={iconNames.trendingDown}
                    className="border-rose-200 bg-rose-50"
                />
                <MetricCard
                    title="Сума надлишку"
                    value={formatUah(inventoryAuditTotals.totalInventorySurplusAmount)}
                    iconName={iconNames.piggyBank}
                    className="border-emerald-200 bg-emerald-50"
                />
                <MetricCard
                    title="Коригування інвентаризації"
                    value={formatUah(inventoryAuditTotals.inventoryAuditAdjustmentAmount)}
                    iconName={iconNames.activity}
                    className="border-sky-200 bg-sky-50"
                />
            </div>
        </section>
    );
}

import { MetricCard } from "@/shared/ui/metric-card/MetricCard";
import { formatUah } from "@/shared/utils/currency";
import { Icon } from "@/shared/ui/icon/Icon";

interface ExpensesSectionProps {
    costOfGoods: number;
    productWriteOffs: number;
    acquiringFee: number;
    totalExpenses: number;
}

export function ExpensesSection({
    costOfGoods,
    productWriteOffs,
    acquiringFee,
    totalExpenses,
}: ExpensesSectionProps) {
    return (
        <section className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold tracking-wide text-gray-500 uppercase">Витрати</h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                <MetricCard
                    title="Собівартість товарів"
                    value={formatUah(costOfGoods)}
                    icon={<Icon name="shoppingCart" />}
                />
                <MetricCard
                    title="Списання продуктів"
                    value={formatUah(productWriteOffs)}
                    icon={<Icon name="trash2" />}
                />
                <MetricCard
                    title="Комісія еквайрингу"
                    value={formatUah(acquiringFee)}
                    icon={<Icon name="percent" />}
                />
                <MetricCard
                    title="Загальні витрати"
                    value={formatUah(totalExpenses)}
                    icon={<Icon name="trendingDown" />}
                />
            </div>
        </section>
    );
}

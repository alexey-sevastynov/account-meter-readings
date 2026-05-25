import { MetricCard } from "@/shared/ui/metric-card/MetricCard";
import { formatUah } from "@/shared/utils/currency";
import { iconNames } from "@/shared/ui/icon/icon-name";
import { Text } from "@/shared/ui/typography/text/Text";

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
            <Text uppercase>Витрати</Text>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                <MetricCard
                    title="Собівартість товарів"
                    value={formatUah(costOfGoods)}
                    iconName={iconNames.shoppingCart}
                />
                <MetricCard
                    title="Списання продуктів"
                    value={formatUah(productWriteOffs)}
                    iconName={iconNames.trash2}
                />
                <MetricCard
                    title="Комісія еквайрингу"
                    value={formatUah(acquiringFee)}
                    iconName={iconNames.percent}
                />
                <MetricCard
                    title="Операційні витрати"
                    value={formatUah(totalExpenses)}
                    iconName={iconNames.trendingDown}
                />
            </div>
        </section>
    );
}

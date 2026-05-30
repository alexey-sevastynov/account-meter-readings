import { MetricCard } from "@/shared/ui/metrics/metric-card/MetricCard";
import { formatUah } from "@/shared/utils/currency";
import { iconNames } from "@/shared/ui/icon/icon-name";
import { Text } from "@/shared/ui/typography/text/Text";

interface FinancialResultSectionProps {
    netProfit: number;
    netProfitAfterExpenses: number;
}

export function FinancialResultSection({ netProfit, netProfitAfterExpenses }: FinancialResultSectionProps) {
    return (
        <section className="flex flex-col gap-3">
            <Text uppercase>Фінансовий результат</Text>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <MetricCard
                    title="Брудний прибуток"
                    value={formatUah(netProfit)}
                    iconName={iconNames.wallet}
                />
                <MetricCard
                    title="Чистий прибуток після витрат та інвентаризації"
                    value={formatUah(netProfitAfterExpenses)}
                    iconName={iconNames.piggyBank}
                />
            </div>
        </section>
    );
}

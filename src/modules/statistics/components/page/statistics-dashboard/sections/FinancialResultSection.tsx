import { MetricCard } from "@/shared/ui/metric-card/MetricCard";
import { formatUah } from "@/shared/utils/currency";
import { iconNames } from "@/shared/ui/icon/icon-name";

interface FinancialResultSectionProps {
    netProfit: number;
    netProfitAfterExpenses: number;
}

export function FinancialResultSection({ netProfit, netProfitAfterExpenses }: FinancialResultSectionProps) {
    return (
        <section className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold tracking-wide text-gray-500 uppercase">
                Фінансовий результат
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <MetricCard
                    title="Брудний прибуток"
                    value={formatUah(netProfit)}
                    iconName={iconNames.wallet}
                    className="border-emerald-200 bg-emerald-50"
                />
                <MetricCard
                    title="Чистий прибуток після витрат та інвентаризації"
                    value={formatUah(netProfitAfterExpenses)}
                    iconName={iconNames.piggyBank}
                    className="border-emerald-300 bg-emerald-100"
                />
            </div>
        </section>
    );
}

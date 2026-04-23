import { MetricCard } from "@/shared/ui/metric-card/MetricCard";
import { formatUah } from "@/shared/utils/currency";
import { Icon } from "@/shared/ui/icon/Icon";
import { iconSizes } from "@/shared/ui/icon/icon-size";

interface FinancialResultSectionProps {
    netProfit: number;
    netProfitAfterExpenses: number;
}

export function FinancialResultSection({ netProfit, netProfitAfterExpenses }: FinancialResultSectionProps) {
    return (
        <section className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold tracking-wide text-gray-500 uppercase">
                Фінансовий результат (Головне)
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <MetricCard
                    title="Брудний прибуток"
                    value={formatUah(netProfit)}
                    icon={<Icon name="wallet" size={iconSizes.large} className="text-emerald-500" />}
                    className="border-emerald-200 bg-emerald-50"
                />
                <MetricCard
                    title="Чистий прибуток"
                    value={formatUah(netProfitAfterExpenses)}
                    icon={<Icon name="piggyBank" size={iconSizes.large} className="text-emerald-600" />}
                    className="border-emerald-300 bg-emerald-100"
                />
            </div>
        </section>
    );
}

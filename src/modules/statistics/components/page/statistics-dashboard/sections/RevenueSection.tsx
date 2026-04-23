import { MetricCard } from "@/shared/ui/metric-card/MetricCard";
import { formatUah } from "@/shared/utils/currency";
import { Icon } from "@/shared/ui/icon/Icon";

interface RevenueSectionProps {
    totalRevenue: number;
    cashRevenue: number;
    terminalRevenue: number;
}

export function RevenueSection({ totalRevenue, cashRevenue, terminalRevenue }: RevenueSectionProps) {
    return (
        <section className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold tracking-wide text-gray-500 uppercase">Виручка</h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                <MetricCard
                    title="Загальна виручка"
                    value={formatUah(totalRevenue)}
                    icon={<Icon name="dollarSign" />}
                />
                <MetricCard title="Готівка" value={formatUah(cashRevenue)} icon={<Icon name="banknote" />} />
                <MetricCard
                    title="Термінал"
                    value={formatUah(terminalRevenue)}
                    icon={<Icon name="creditCard" />}
                />
            </div>
        </section>
    );
}

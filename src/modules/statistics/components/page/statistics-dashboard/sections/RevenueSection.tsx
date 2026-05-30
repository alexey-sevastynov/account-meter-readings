import { MetricCard } from "@/shared/ui/metrics/metric-card/MetricCard";
import { formatUah } from "@/shared/utils/currency";
import { iconNames } from "@/shared/ui/icon/icon-name";
import { Text } from "@/shared/ui/typography/text/Text";

interface RevenueSectionProps {
    totalRevenue: number;
    cashRevenue: number;
    terminalRevenue: number;
}

export function RevenueSection({ totalRevenue, cashRevenue, terminalRevenue }: RevenueSectionProps) {
    return (
        <section className="flex flex-col gap-3">
            <Text uppercase>Виручка</Text>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                <MetricCard
                    title="Загальна виручка"
                    value={formatUah(totalRevenue)}
                    iconName={iconNames.dollarSign}
                />
                <MetricCard title="Готівка" value={formatUah(cashRevenue)} iconName={iconNames.banknote} />
                <MetricCard
                    title="Термінал"
                    value={formatUah(terminalRevenue)}
                    iconName={iconNames.creditCard}
                />
            </div>
        </section>
    );
}

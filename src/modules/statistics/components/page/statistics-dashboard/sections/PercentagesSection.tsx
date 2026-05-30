import { MetricCard } from "@/shared/ui/metrics/metric-card/MetricCard";
import { StatisticsPercentages } from "@/modules/statistics/types/statistics-percentages";
import { formatPercent } from "@/shared/utils/number";
import { iconNames } from "@/shared/ui/icon/icon-name";
import { Text } from "@/shared/ui/typography/text/Text";

interface PercentagesSectionProps {
    percentages: StatisticsPercentages;
}

export function PercentagesSection({ percentages }: PercentagesSectionProps) {
    return (
        <section className="flex flex-col gap-3">
            <Text uppercase>Відсотки</Text>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                <MetricCard
                    title="Частка комісій від загального прибутку"
                    value={formatPercent(percentages.acquiringPercent)}
                    iconName={iconNames.activity}
                />
                <MetricCard
                    title="Частка готівки від загального прибутку"
                    value={formatPercent(percentages.cashPercent)}
                    iconName={iconNames.activity}
                />
                <MetricCard
                    title="Частка терміналу від загального прибутку"
                    value={formatPercent(percentages.terminalPercent)}
                    iconName={iconNames.activity}
                />
                <MetricCard
                    title="Собівартість продуктів від загального прибутку"
                    value={formatPercent(percentages.costPercent)}
                    iconName={iconNames.activity}
                />
                <MetricCard
                    title="Частка списання від загального прибутку"
                    value={formatPercent(percentages.writeOffPercent)}
                    iconName={iconNames.activity}
                />
                <MetricCard
                    title="Частка зарплат від загального прибутку"
                    value={formatPercent(percentages.salaryPercent)}
                    iconName={iconNames.activity}
                />
            </div>
        </section>
    );
}

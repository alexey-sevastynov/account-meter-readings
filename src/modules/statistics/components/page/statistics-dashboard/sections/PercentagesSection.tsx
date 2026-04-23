import { MetricCard } from "@/shared/ui/metric-card/MetricCard";
import { Icon } from "@/shared/ui/icon/Icon";
import { StatisticsPercentages } from "@/modules/statistics/types/statistics-percentages";
import { formatPercent } from "@/shared/utils/number";

interface PercentagesSectionProps {
    percentages: StatisticsPercentages;
}

export function PercentagesSection({ percentages }: PercentagesSectionProps) {
    return (
        <section className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold tracking-wide text-gray-500 uppercase">Відсотки</h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                <MetricCard
                    title="Частка комісій від загального прибутку"
                    value={formatPercent(percentages.acquiringPercent)}
                    icon={<Icon name="pieChart" />}
                />
                <MetricCard
                    title="Частка готівки від загального прибутку"
                    value={formatPercent(percentages.cashPercent)}
                    icon={<Icon name="activity" />}
                />
                <MetricCard
                    title="Частка терміналу від загального прибутку"
                    value={formatPercent(percentages.terminalPercent)}
                    icon={<Icon name="activity" />}
                />
                <MetricCard
                    title="Собівартість продуктів від загального прибутку"
                    value={formatPercent(percentages.costPercent)}
                    icon={<Icon name="activity" />}
                />
                <MetricCard
                    title="Частка списання від загального прибутку"
                    value={formatPercent(percentages.writeOffPercent)}
                    icon={<Icon name="activity" />}
                />
                <MetricCard
                    title="Частка зарплат від загального прибутку"
                    value={formatPercent(percentages.salaryPercent)}
                    icon={<Icon name="activity" />}
                />
            </div>
        </section>
    );
}

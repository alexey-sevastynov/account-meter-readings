import { StatisticsPercentages } from "@/modules/statistics/types/statistics-percentages";
import { ThresholdScaleCard } from "@/shared/ui/threshold-scale-card/ThresholdScaleCard";
import { Text } from "@/shared/ui/typography/text/Text";
import { formatPercent } from "@/shared/utils/number";

interface PercentagesSectionProps {
    percentages: StatisticsPercentages;
}

export function FinancialMetricsSection({ percentages }: PercentagesSectionProps) {
    const foodCostDescription =
        "Показує, скільки відсотків від каси йде суто на закупку продуктів. " +
        "Якщо цифра росте — це сигнал, що постачальники підняли ціни або баристи роблять перерозхід.";

    const writeOffDescription =
        "Це відсоток продуктів, які списали через закінчення термінів або зіпсованість. " +
        "Тримати його низьким допомагає правильний контроль вітрини та залишків.";

    const salaryDescription =
        "Показує частку чистої ставки та бонусів барист у загальному виторгу. " +
        "Що вища каса кав'ярні, то вигіднішим стає цей відсоток для бізнесу.";

    return (
        <section className="flex flex-col gap-3">
            <Text uppercase>Фінансові метрики з порогами</Text>
            <ThresholdScaleCard
                className="sm:col-span-2 lg:col-span-2"
                title="Собівартість продуктів від виторгу (Food Cost)"
                value={formatPercent(percentages.costPercent)}
                currentValue={percentages.costPercent}
                maxValue={45}
                acceptableFrom={33}
                riskFrom={36}
                targetRangeLabel="Ідеал: 30-33%"
                acceptableRangeLabel="Норма: 33-36%"
                riskRangeLabel="Критично: від 36%"
                description={foodCostDescription}
            />
            <ThresholdScaleCard
                className="sm:col-span-2 lg:col-span-2"
                title="Частка списання товарів від загального виторгу"
                value={formatPercent(percentages.writeOffPercent)}
                currentValue={percentages.writeOffPercent}
                maxValue={8}
                acceptableFrom={3}
                riskFrom={5}
                targetRangeLabel="Ідеал: 1-3%"
                acceptableRangeLabel="Норма: 3-5%"
                riskRangeLabel="Критично: від 5%"
                description={writeOffDescription}
            />
            <ThresholdScaleCard
                className="sm:col-span-2 lg:col-span-2"
                title="Частка зарплат від загального виторгу (Labor Cost)"
                value={formatPercent(percentages.salaryPercent)}
                currentValue={percentages.salaryPercent}
                maxValue={25}
                acceptableFrom={15}
                riskFrom={22}
                targetRangeLabel="Ідеал: 12-15%"
                acceptableRangeLabel="Норма: 15-20%"
                riskRangeLabel="Критично: від 22%"
                description={salaryDescription}
            />
        </section>
    );
}

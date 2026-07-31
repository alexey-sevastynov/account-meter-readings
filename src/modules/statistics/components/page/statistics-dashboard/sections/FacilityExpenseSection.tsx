import { Divider } from "@/shared/ui/divider/Divider";
import { formatUah } from "@/shared/utils/currency";
import { Text } from "@/shared/ui/typography/text/Text";
import { textSizes } from "@/shared/ui/typography/text-size";
import { textWeights } from "@/shared/ui/typography/text-weight";
import { FacilityExpenseSummary } from "@/modules/statistics/types/facility-expense-summary";
import { MetricCard } from "@/shared/ui/metrics/metric-card/MetricCard";
import { iconNames } from "@/shared/ui/icon/icon-name";
import { cn } from "@/shared/lib/cn";

interface FacilityExpenseSectionProps {
    facilityExpenseSummary: FacilityExpenseSummary;
}

export function FacilityExpenseSection({ facilityExpenseSummary }: FacilityExpenseSectionProps) {
    return (
        <section className="flex flex-col gap-3">
            <Text uppercase>Витрати закладу</Text>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <MetricCard
                    title={`Цільові накопичення (${facilityExpenseSummary.monthLabel})`}
                    value={formatUah(facilityExpenseSummary.collectedAmount)}
                    iconName={iconNames.building2}
                    description={
                        <FacilityExpenseDescription facilityExpenseSummary={facilityExpenseSummary} />
                    }
                />
            </div>
        </section>
    );
}

function FacilityExpenseDescription({
    facilityExpenseSummary,
}: {
    facilityExpenseSummary: FacilityExpenseSummary;
}) {
    return (
        <div className="mt-2 space-y-2 text-xs text-gray-500">
            <div className="flex justify-between">
                <Text textSize={textSizes.sm} className="text-muted-foreground">
                    Цільова сума:
                </Text>
                <Text textSize={textSizes.sm} textWeight={textWeights.medium}>
                    {formatUah(facilityExpenseSummary.targetAmount)}
                </Text>
            </div>

            <div className="flex justify-between">
                <Text textSize={textSizes.sm} className="text-muted-foreground">
                    Залишилось зібрати:
                </Text>
                <Text textSize={textSizes.sm} textWeight={textWeights.medium}>
                    {formatUah(facilityExpenseSummary.remainingAmount)}
                </Text>
            </div>

            <div className="flex justify-between">
                <Text textSize={textSizes.sm} className="text-muted-foreground">
                    Кількість операцій:
                </Text>
                <Text textSize={textSizes.sm} textWeight={textWeights.medium}>
                    {facilityExpenseSummary.operationsCount}
                </Text>
            </div>

            <Divider className="my-2" />

            <div className="space-y-1">
                <div className="text-muted-foreground flex justify-between text-[11px]">
                    <span>Прогрес: {facilityExpenseSummary.progressPercentage.toFixed(1)}%</span>
                    <span>{facilityExpenseSummary.isFullyCollected ? "Виконано" : "В процесі"}</span>
                </div>
                <div className="bg-secondary relative h-2 w-full overflow-hidden rounded-full">
                    <div
                        className={cn(
                            "h-full rounded-full transition-all duration-500",
                            facilityExpenseSummary.isFullyCollected ? "bg-emerald-500" : "bg-primary",
                        )}
                        style={{ width: `${Math.min(facilityExpenseSummary.progressPercentage, 100)}%` }}
                    />
                </div>
            </div>
        </div>
    );
}

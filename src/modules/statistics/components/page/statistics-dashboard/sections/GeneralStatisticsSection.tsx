import { MetricCard } from "@/shared/ui/metric-card/MetricCard";
import { iconNames } from "@/shared/ui/icon/icon-name";
import { formatNumber } from "@/shared/utils/number";

interface GeneralStatisticsSectionProps {
    totalDays: number;
    totalShifts: number;
}

export function GeneralStatisticsSection({ totalDays, totalShifts }: GeneralStatisticsSectionProps) {
    return (
        <section className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold tracking-wide text-gray-500 uppercase">Загальне</h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                <MetricCard
                    title="Кількість днів"
                    value={formatNumber(totalDays)}
                    iconName={iconNames.calendarDays}
                />
                <MetricCard
                    title="Кількість змін"
                    value={formatNumber(totalShifts)}
                    iconName={iconNames.coffee}
                />
            </div>
        </section>
    );
}

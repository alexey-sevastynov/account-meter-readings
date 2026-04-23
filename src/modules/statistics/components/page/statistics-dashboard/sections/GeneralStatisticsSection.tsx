import { MetricCard } from "@/shared/ui/metric-card/MetricCard";
import { Icon } from "@/shared/ui/icon/Icon";

interface GeneralStatisticsSectionProps {
    totalDays: number;
    totalShifts: number;
}

export function GeneralStatisticsSection({ totalDays, totalShifts }: GeneralStatisticsSectionProps) {
    return (
        <section className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold tracking-wide text-gray-500 uppercase">Загальне</h3>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                <MetricCard title="Кількість днів" value={totalDays} icon={<Icon name="calendarDays" />} />
                <MetricCard title="Кількість змін" value={totalShifts} icon={<Icon name="coffee" />} />
            </div>
        </section>
    );
}

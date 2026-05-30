import { MetricCard } from "@/shared/ui/metrics/metric-card/MetricCard";
import { formatUah } from "@/shared/utils/currency";
import { iconNames } from "@/shared/ui/icon/icon-name";
import { Text } from "@/shared/ui/typography/text/Text";

interface EmployeeStat {
    name: string;
    shifts: number;
    totalSalary: number;
    basicSalary: number;
    bonuses: number;
}

interface TeamStatisticsSectionProps {
    employees?: EmployeeStat[];
}

export function TeamStatisticsSection({ employees }: TeamStatisticsSectionProps) {
    if (!employees || employees.length === 0) return null;

    return (
        <section className="flex flex-col gap-3">
            <Text uppercase>Команда</Text>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {employees.map((emp) => (
                    <MetricCard
                        key={emp.name}
                        title={`${emp.name} (${emp.shifts} зм.)`}
                        value={formatUah(emp.totalSalary)}
                        description={
                            <span className="mt-1 font-normal text-gray-500">
                                База: {formatUah(emp.basicSalary)} | Бонуси:{" "}
                                <span className="font-medium text-emerald-600">
                                    +{formatUah(emp.bonuses)}
                                </span>
                            </span>
                        }
                        iconName={iconNames.users}
                    />
                ))}
            </div>
        </section>
    );
}

import { MetricCard } from "@/shared/ui/metrics/metric-card/MetricCard";
import { ExpensesBreakdown } from "@/modules/statistics/types/expenses-breakdown";
import { formatUah } from "@/shared/utils/currency";
import { iconNames } from "@/shared/ui/icon/icon-name";
import { Text } from "@/shared/ui/typography/text/Text";

interface ExpensesBreakdownSectionProps {
    breakdown?: ExpensesBreakdown;
}

export function ExpensesBreakdownSection({ breakdown }: ExpensesBreakdownSectionProps) {
    if (!breakdown) return null;

    return (
        <section className="flex flex-col gap-3">
            <Text uppercase>Розбивка операційних витрат</Text>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                <MetricCard
                    title="Щоденні витрати"
                    value={formatUah(breakdown.dailyExpenses)}
                    iconName={iconNames.receiptText}
                />
                <MetricCard
                    title="Місячні витрати (пропорційно)"
                    value={formatUah(breakdown.monthlyExpensesApportioned)}
                    iconName={iconNames.calendar}
                />
            </div>
        </section>
    );
}

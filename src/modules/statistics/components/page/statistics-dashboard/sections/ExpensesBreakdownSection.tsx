import { MetricCard } from "@/shared/ui/metric-card/MetricCard";
import { formatUah } from "@/shared/utils/currency";
import { iconNames } from "@/shared/ui/icon/icon-name";

interface ExpensesBreakdownSectionProps {
    breakdown?: {
        dailyExpenses: number;
        monthlyExpensesApportioned: number;
    };
}

export function ExpensesBreakdownSection({ breakdown }: ExpensesBreakdownSectionProps) {
    if (!breakdown) return null;

    return (
        <section className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold tracking-wide text-gray-500 uppercase">
                Розбивка операційних витрат
            </h3>
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

import { useState } from "react";
import { MetricCard } from "@/shared/ui/metrics/metric-card/MetricCard";
import { ExpensesBreakdown } from "@/modules/statistics/types/expenses-breakdown";
import { formatUah } from "@/shared/utils/currency";
import { iconNames } from "@/shared/ui/icon/icon-name";
import { Text } from "@/shared/ui/typography/text/Text";
import { textWeights } from "@/shared/ui/typography/text-weight";
import { textSizes } from "@/shared/ui/typography/text-size";
import { ExpenseBreakdownItem } from "@/modules/statistics/types/expense-breakdown-item";
import { ModalWindow } from "@/shared/ui/modal-window/ModalWindow";

interface ExpensesBreakdownSectionProps {
    breakdown?: ExpensesBreakdown;
}

export function ExpensesBreakdownSection({ breakdown }: ExpensesBreakdownSectionProps) {
    const [isDailyExpensesOpen, setDailyExpensesOpen] = useState(false);
    const [isMonthlyExpenses, setIsMonthlyExpenses] = useState(false);

    if (!breakdown) return null;

    return (
        <section className="flex flex-col gap-3">
            <Text uppercase>Розбивка операційних витрат</Text>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                <MetricCard
                    title="Щоденні витрати"
                    value={formatUah(breakdown.dailyExpenses.totalAmount)}
                    onClick={() => setDailyExpensesOpen(true)}
                    iconName={iconNames.receiptText}
                />
                <ModalWindow
                    open={isDailyExpensesOpen}
                    onOpenChange={setDailyExpensesOpen}
                    title="Щоденні витрати"
                    description={`${breakdown.dailyExpenses.expenseItems.length} позицій 
                                    · разом ${formatUah(breakdown.dailyExpenses.totalAmount)}`}
                >
                    <ExpenseBreakdownModalContent
                        expenseBreakdownItems={breakdown.dailyExpenses.expenseItems}
                    />
                </ModalWindow>
                <MetricCard
                    title="Місячні витрати (пропорційно)"
                    value={formatUah(breakdown.monthlyExpenses.totalAmount)}
                    onClick={() => setIsMonthlyExpenses(true)}
                    iconName={iconNames.calendar}
                />
                <ModalWindow
                    open={isMonthlyExpenses}
                    onOpenChange={setIsMonthlyExpenses}
                    title="Місячні витрати (пропорційно)"
                    description={`${breakdown.monthlyExpenses.expenseItems.length} позицій 
                                    · разом ${formatUah(breakdown.monthlyExpenses.totalAmount)}`}
                >
                    <ExpenseBreakdownModalContent
                        expenseBreakdownItems={breakdown.monthlyExpenses.expenseItems}
                    />
                </ModalWindow>
            </div>
        </section>
    );
}

interface ExpenseBreakdownModalContentProps {
    expenseBreakdownItems: ExpenseBreakdownItem[];
}

function ExpenseBreakdownModalContent({ expenseBreakdownItems }: ExpenseBreakdownModalContentProps) {
    return (
        <div className="w-full space-y-4">
            <div className="custom-scrollbar max-h-96 space-y-3 overflow-y-auto pr-1">
                {expenseBreakdownItems.length === 0 ? (
                    <Text>Немає позицій для відображення</Text>
                ) : (
                    expenseBreakdownItems.map((expenseBreakdownItem, index) => (
                        <div
                            key={`${expenseBreakdownItem.title}-${index}`}
                            className="flex items-center justify-between gap-4 rounded-xl border p-4 shadow-sm"
                        >
                            <div className="min-w-0 space-y-0.5">
                                <Text textWeight={textWeights.medium}>{expenseBreakdownItem.title}</Text>
                                <Text textSize={textSizes.sm} className="text-muted-foreground">
                                    Активних днів: {expenseBreakdownItem.count}
                                </Text>
                            </div>

                            <Text textWeight={textWeights.medium}>
                                {formatUah(expenseBreakdownItem.amount)}
                            </Text>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

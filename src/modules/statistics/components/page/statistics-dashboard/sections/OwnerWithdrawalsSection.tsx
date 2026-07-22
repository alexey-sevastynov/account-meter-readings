import { Divider } from "@/shared/ui/divider/Divider";
import { formatExchangeRate, formatUah, formatUsd } from "@/shared/utils/currency";
import { Text } from "@/shared/ui/typography/text/Text";
import { textSizes } from "@/shared/ui/typography/text-size";
import { textWeights } from "@/shared/ui/typography/text-weight";
import { OwnerWithdrawalSummary } from "@/modules/statistics/types/owner-withdrawal-summary";
import { MetricCard } from "@/shared/ui/metrics/metric-card/MetricCard";
import { iconNames } from "@/shared/ui/icon/icon-name";

interface OwnerWithdrawalsSectionProps {
    summary: OwnerWithdrawalSummary;
}

interface WithdrawalDescriptionProps {
    amountUsd: number;
    count: number;
    exchangeRateText: string;
    formattedRateDate: string;
}

export function OwnerWithdrawalsSection({ summary }: OwnerWithdrawalsSectionProps) {
    const formattedRateDate = new Date(summary.rateUpdatedAt).toLocaleString("uk-UA", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });

    const exchangeRateText = formatExchangeRate(summary.exchangeRate, "USD", "UAH");

    return (
        <section className="flex flex-col gap-3">
            <Text uppercase>Виведення коштів власником</Text>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <MetricCard
                    title="Виведення за вибраний період"
                    value={formatUah(summary.selectedPeriod.totalAmountUah)}
                    iconName={iconNames.handCoins}
                    description={
                        <WithdrawalDescription
                            amountUsd={summary.selectedPeriod.totalAmountUsd}
                            count={summary.selectedPeriod.count}
                            exchangeRateText={exchangeRateText}
                            formattedRateDate={formattedRateDate}
                        />
                    }
                />
                <MetricCard
                    title="Виведення за весь час"
                    value={formatUah(summary.allTime.totalAmountUah)}
                    iconName={iconNames.handCoins}
                    description={
                        <WithdrawalDescription
                            amountUsd={summary.allTime.totalAmountUsd}
                            count={summary.allTime.count}
                            exchangeRateText={exchangeRateText}
                            formattedRateDate={formattedRateDate}
                        />
                    }
                />
            </div>
        </section>
    );
}

function WithdrawalDescription({
    amountUsd,
    count,
    exchangeRateText,
    formattedRateDate,
}: WithdrawalDescriptionProps) {
    return (
        <div className="mt-2 space-y-1 text-xs text-gray-500">
            <div className="flex justify-between">
                <Text textSize={textSizes.sm} className="text-muted-foreground">
                    В еквіваленті:
                </Text>
                <Text textSize={textSizes.sm} textWeight={textWeights.medium}>
                    {formatUsd(amountUsd)}
                </Text>
            </div>
            <div className="flex justify-between">
                <Text textSize={textSizes.sm} className="text-muted-foreground">
                    Кількість операцій:
                </Text>
                <Text textSize={textSizes.sm} textWeight={textWeights.medium}>
                    {count}
                </Text>
            </div>
            <Divider className="my-2" />
            <div className="text-muted-foreground flex flex-wrap justify-between gap-2 text-[11px]">
                <span>Курс: {exchangeRateText}</span>
                <span>Оновлено: {formattedRateDate}</span>
            </div>
        </div>
    );
}

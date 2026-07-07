import { useState } from "react";
import { ModalWindow } from "@/shared/ui/modal-window/ModalWindow";
import { MetricCard } from "@/shared/ui/metrics/metric-card/MetricCard";
import { formatUah } from "@/shared/utils/currency";
import { iconNames } from "@/shared/ui/icon/icon-name";
import { InventoryAuditTotals } from "@/modules/statistics/types/inventory-audit-totals";
import { Text } from "@/shared/ui/typography/text/Text";
import { InventoryAuditBreakdownItem } from "@/modules/statistics/types/inventory-audit-breakdown-item";
import { textWeights } from "@/shared/ui/typography/text-weight";
import { textSizes } from "@/shared/ui/typography/text-size";

interface InventoryAuditSectionProps {
    inventoryAuditTotals: InventoryAuditTotals;
}

export function InventoryAuditSection({ inventoryAuditTotals }: InventoryAuditSectionProps) {
    const [isShortageOpen, setIsShortageOpen] = useState(false);
    const [isSurplusOpen, setIsSurplusOpen] = useState(false);

    return (
        <section className="flex flex-col gap-3">
            <Text uppercase>Інвентаризація</Text>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                <MetricCard
                    title="Сума нестачі"
                    value={formatUah(inventoryAuditTotals.shortage.totalAmount)}
                    iconName={iconNames.trendingDown}
                    onClick={() => setIsShortageOpen(true)}
                />
                <ModalWindow
                    open={isShortageOpen}
                    onOpenChange={setIsShortageOpen}
                    title="Недостача"
                    description={`${inventoryAuditTotals.shortage.items.length} позицій 
                    · разом ${formatUah(inventoryAuditTotals.shortage.totalAmount)}`}
                >
                    <InventoryAuditModalContent
                        inventoryAuditBreakdownItems={inventoryAuditTotals.shortage.items}
                    />
                </ModalWindow>

                <MetricCard
                    title="Сума надлишку"
                    value={formatUah(inventoryAuditTotals.surplus.totalAmount)}
                    iconName={iconNames.piggyBank}
                    onClick={() => setIsSurplusOpen(true)}
                />
                <ModalWindow
                    open={isSurplusOpen}
                    onOpenChange={setIsSurplusOpen}
                    title="Надлишок"
                    description={`${inventoryAuditTotals.surplus.items.length} позицій 
                    · разом ${formatUah(inventoryAuditTotals.surplus.totalAmount)}`}
                >
                    <InventoryAuditModalContent
                        inventoryAuditBreakdownItems={inventoryAuditTotals.surplus.items}
                    />
                </ModalWindow>
                <MetricCard
                    title="Коригування інвентаризації"
                    value={formatUah(inventoryAuditTotals.inventoryAuditAdjustmentAmount)}
                    iconName={iconNames.activity}
                />
            </div>
        </section>
    );
}

interface InventoryAuditModalContentProps {
    inventoryAuditBreakdownItems: InventoryAuditBreakdownItem[];
}

function InventoryAuditModalContent({ inventoryAuditBreakdownItems }: InventoryAuditModalContentProps) {
    return (
        <div className="w-full space-y-4">
            <div className="custom-scrollbar max-h-96 space-y-3 overflow-y-auto pr-1">
                {inventoryAuditBreakdownItems.length === 0 ? (
                    <Text>Немає позицій для відображення</Text>
                ) : (
                    inventoryAuditBreakdownItems.map((item, index) => (
                        <div
                            key={`${item.productTitle}-${index}`}
                            className="flex items-center justify-between gap-4 rounded-xl border p-4 shadow-sm"
                        >
                            <div className="min-w-0 space-y-0.5">
                                <Text textWeight={textWeights.medium}>{item.productTitle}</Text>
                                <Text textSize={textSizes.sm} className="text-muted-foreground">
                                    Активних днів: {item.activeDays}
                                </Text>
                            </div>

                            <Text textWeight={textWeights.medium}>{formatUah(item.periodAmount)}</Text>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

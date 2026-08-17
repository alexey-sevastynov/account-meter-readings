"use client";

import { Button } from "@/shared/ui/button/Button";
import { iconNames } from "@/shared/ui/icon/icon-name";
import { formatDateToDateTime } from "@/shared/utils/date";
import { Text } from "@/shared/ui/typography/text/Text";

interface KavappInventoryHeaderProps {
    lastSyncDate: string | null;
    isSyncing: boolean;
    onSync: () => void;
}

export function KavappInventoryHeader({ lastSyncDate, isSyncing, onSync }: KavappInventoryHeaderProps) {
    return (
        <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
                {lastSyncDate && (
                    <Text className="text-muted-foreground text-sm">
                        Остання синхронізація: {formatDateToDateTime(lastSyncDate)}
                    </Text>
                )}
            </div>
            <Button
                text="Синхронізувати"
                iconName={iconNames.refreshCw}
                loading={isSyncing}
                onClick={onSync}
            />
        </div>
    );
}

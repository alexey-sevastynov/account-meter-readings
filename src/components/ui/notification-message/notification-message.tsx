import { useState, useEffect } from "react";
import { cn } from "@/lib/cn";
import { NotificationMessageKey, notificationMessageKeys } from "@/enums/ui/notification-message-key";
import { VoidFuncNoParam } from "@/types/getter-setter-functions";
import { timing } from "@/constants/timing";

interface MrNotificationMessageProps {
    message: string;
    type?: NotificationMessageKey;
    onClose?: VoidFuncNoParam;
    autoClose?: number;
}

export function MrNotificationMessage({
    message,
    type = notificationMessageKeys.info,
    onClose,
    autoClose = timing.fiveSecondsInMilliseconds,
}: MrNotificationMessageProps) {
    const [visible, setVisible] = useState(true);
    const [hovered, setHovered] = useState(false);

    const handleClose = () => {
        setVisible(false);
        onClose?.();
    };

    useEffect(() => {
        if (!autoClose) return;

        const timer = setTimeout(() => {
            if (!hovered) handleClose();
        }, autoClose);

        return () => clearTimeout(timer);
    }, [hovered, autoClose]);

    const typeClasses: Record<NotificationMessageKey, { bg: string; text: string; border: string }> = {
        info: { bg: "bg-blue-100", text: "text-blue-700", border: "border-blue-300" },
        success: { bg: "bg-green-100", text: "text-green-700", border: "border-green-300" },
        warning: { bg: "bg-yellow-100", text: "text-yellow-700", border: "border-yellow-300" },
        error: { bg: "bg-red-100", text: "text-red-700", border: "border-red-300" },
    };

    if (!visible) return null;

    const typeClass = typeClasses[type];

    return (
        <div
            className={cn(
                "relative rounded-md pl-4 pr-6 py-2 text-sm border",
                typeClass.border,
                typeClass.bg,
                typeClass.text
            )}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {message}
            <button
                onClick={handleClose}
                className={cn(
                    "absolute top-0 right-2 text-lg font-bold hover:opacity-80 transition-opacity cursor-pointer",
                    typeClass.text
                )}
            >
                ×
            </button>
        </div>
    );
}

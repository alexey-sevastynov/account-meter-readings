import { useState, useEffect } from "react";
import { cn } from "@/shared/lib/cn";
import {
    NotificationMessageKey,
    notificationMessageKeys,
} from "@/shared/ui/notification-message/notification-message-key";
import { VoidFuncNoParam } from "@/shared/types/getter-setter-functions";
import { timing } from "@/shared/constants/timing";

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
    }, [hovered, autoClose, handleClose]);

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
                "relative rounded-md border py-2 pr-6 pl-4 text-sm",
                typeClass.border,
                typeClass.bg,
                typeClass.text,
            )}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {message}
            <button
                onClick={handleClose}
                className={cn(
                    "absolute top-0 right-2 cursor-pointer text-lg font-bold transition-opacity hover:opacity-80",
                    typeClass.text,
                )}
            >
                ×
            </button>
        </div>
    );
}

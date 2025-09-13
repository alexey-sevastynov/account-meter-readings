import { NotificationMessageKey, notificationMessageKeys } from "@/enums/ui/notification-message-key";

interface MrNotificationMessageProps {
    message: string;
    type?: NotificationMessageKey;
}

export function MrNotificationMessage({
    message,
    type = notificationMessageKeys.info,
}: MrNotificationMessageProps) {
    const typeClasses: Record<NotificationMessageKey, string> = {
        info: "text-blue-700 bg-blue-100 border-blue-300",
        success: "text-green-700 bg-green-100 border-green-300",
        warning: "text-yellow-700 bg-yellow-100 border-yellow-300",
        error: "text-red-700 bg-red-100 border-red-300",
    };

    const classes = `border rounded-md p-2 text-sm ${typeClasses[type]}`;

    return <div className={classes}>{message}</div>;
}

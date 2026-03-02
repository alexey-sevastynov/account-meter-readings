export const notificationMessageKeys = {
    info: "info",
    success: "success",
    warning: "warning",
    error: "error",
};

export type NotificationMessageKey = (typeof notificationMessageKeys)[keyof typeof notificationMessageKeys];

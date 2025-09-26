import { createOne } from "@/services/crud-service";
import { apiEndpointNames } from "@/enums/services/api-endpoint-name";
import { NotificationMessageKey, notificationMessageKeys } from "@/enums/ui/notification-message-key";
import { VoidFunc } from "@/types/getter-setter-functions";

interface ResetPasswordResponse {
    success: boolean;
    notificationMessage: string;
}

interface ResetPasswordPayload {
    token: string;
    newPassword: string;
}

export async function sendResetPassword(
    data: ResetPasswordPayload,
    setNotificationMessage: VoidFunc<string>,
    setNotificationTypeMessage: VoidFunc<NotificationMessageKey>,
    setIsLoading: VoidFunc<boolean>
) {
    setIsLoading(true);
    setNotificationMessage("");

    try {
        const response = await createOne<ResetPasswordPayload, ResetPasswordResponse>(
            apiEndpointNames.forgotPasswordConfirm,
            data
        );

        if (response.success) {
            setNotificationMessage(response.notificationMessage);
            setNotificationTypeMessage(notificationMessageKeys.success);
        } else {
            setNotificationMessage(response.notificationMessage);
            setNotificationTypeMessage(notificationMessageKeys.error);
        }

        setIsLoading(false);
    } catch {
        setNotificationMessage("Something went wrong. Please try again.");
        setNotificationTypeMessage(notificationMessageKeys.error);
        setIsLoading(false);
    }
}

export function isNotificationSuccess(notificationTypeMessage?: string) {
    return notificationTypeMessage === notificationMessageKeys.success;
}

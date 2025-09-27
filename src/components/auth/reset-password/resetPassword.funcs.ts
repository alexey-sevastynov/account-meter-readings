import { createOne } from "@/services/crud-service";
import { apiEndpointNames } from "@/enums/services/api-endpoint-name";
import { NotificationMessageKey, notificationMessageKeys } from "@/enums/ui/notification-message-key";
import { VoidFunc } from "@/types/getter-setter-functions";
import { PasswordActionResponse } from "@/components/auth/types/passport-action-response";
import { convertToApiError } from "@/lib/api-error";

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
        const response = await createOne<ResetPasswordPayload, PasswordActionResponse>(
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
    } catch (error: unknown) {
        const apiError = convertToApiError(error);

        setNotificationMessage(apiError.message);
        setNotificationTypeMessage(notificationMessageKeys.error);
        setIsLoading(false);
    }
}

export function isNotificationSuccess(notificationTypeMessage?: string) {
    return notificationTypeMessage === notificationMessageKeys.success;
}

import { apiEndpointNames } from "@/shared/constants/api-endpoint-name";
import {
    NotificationMessageKey,
    notificationMessageKeys,
} from "@/shared/ui/notification-message/notification-message-key";
import { createOne } from "@/shared/services/crud-service";
import { VoidFunc } from "@/shared/types/getter-setter-functions";
import { PasswordActionResponse } from "@/modules/auth/types/passport-action-response";
import { convertToApiError } from "@/shared/lib/api-error";

export async function sendResetRequest<FormValues>(
    data: FormValues,
    setNotificationMessage: VoidFunc<string>,
    setNotificationTypeMessage: VoidFunc<NotificationMessageKey>,
    setIsLoading: VoidFunc<boolean>,
) {
    setIsLoading(true);

    try {
        const response = await createOne<FormValues, PasswordActionResponse>(
            apiEndpointNames.forgotPasswordRequest,
            data,
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

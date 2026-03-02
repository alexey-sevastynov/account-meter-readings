import { apiEndpointNames } from "@/shared/constants/api-endpoint-name";
import { createOne } from "@/shared/services/crud-service";
import { verifyStatusKeys } from "@/modules/auth/enums/verify-status-key";

export async function verifyEmail(token: string) {
    const response = await createOne<{ token: string }, { success: boolean }>(
        apiEndpointNames.mailVerification,
        { token },
    );

    if (response.success) {
        return verifyStatusKeys.success;
    } else {
        return verifyStatusKeys.error;
    }
}

export function getInitialVerifyStatus(token?: string) {
    return token ? verifyStatusKeys.pending : verifyStatusKeys.error;
}

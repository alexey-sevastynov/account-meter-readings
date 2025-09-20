import { apiEndpointNames } from "@/enums/services/api-endpoint-name";
import { createOne } from "@/services/crud-service";
import { verifyStatusKeys } from "@/components/auth/enums/verify-status-key";

export async function verifyEmail(token: string) {
    const response = await createOne<{ token: string }, { success: boolean }>(
        apiEndpointNames.mailVerification,
        { token }
    );

    if (response.success) {
        return verifyStatusKeys.success;
    } else {
        return verifyStatusKeys.error;
    }
}

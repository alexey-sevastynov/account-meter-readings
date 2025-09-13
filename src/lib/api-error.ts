import { AxiosError, isAxiosError } from "axios";
import { ApiError } from "@/types/api-error/api-error-type";
import { apiErrorProps } from "@/types/api-error/api-error-props";
import { isArray, isObject } from "@/utils/guards";
import { httpStatusCodes } from "@/constants/http-status-codes";

export function createApiError(
    statusCode: number = httpStatusCodes.internalServerError,
    message = "Unknown error"
) {
    const apiError: ApiError = { statusCode, message };

    return apiError;
}

export function convertToApiError(error: unknown) {
    if (isAxiosError(error)) {
        const axiosError = error as AxiosError;

        if (axiosError.response?.data && isApiError(axiosError.response.data)) {
            const data = axiosError.response.data;
            const message = isArray(data.message) ? data.message.join(", ") : data.message;

            return createApiError(data.statusCode, message);
        }

        return createApiError(httpStatusCodes.internalServerError, axiosError.message);
    }

    if (error instanceof Error) {
        return createApiError(httpStatusCodes.internalServerError, error.message);
    }

    return createApiError();
}

function isApiError(obj: unknown): obj is ApiError {
    return isObject(obj) && apiErrorProps.statusCode in obj && apiErrorProps.message in obj;
}

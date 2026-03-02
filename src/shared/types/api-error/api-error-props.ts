import { nameOf } from "@/shared/utils/name-of";
import { ApiError } from "@/shared/types/api-error/api-error-type";

export const apiErrorProps: Record<keyof ApiError, string> = {
    statusCode: nameOf<ApiError>("statusCode"),
    message: nameOf<ApiError>("message"),
} as const;

import { nameOf } from "@/utils/name-of";
import { ApiError } from "@/types/api-error/api-error-type";

export const apiErrorProps: Record<keyof ApiError, string> = {
    statusCode: nameOf<ApiError>("statusCode"),
    message: nameOf<ApiError>("message"),
} as const;

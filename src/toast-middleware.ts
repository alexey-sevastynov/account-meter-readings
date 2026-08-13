import { Middleware, UnknownAction } from "@reduxjs/toolkit";
import { appToast } from "@/shared/lib/toast";

const mutationActionKeywords = ["create", "update", "delete"] as const;

export const toastMiddleware: Middleware = () => (next) => (action) => {
    const { type } = action as UnknownAction;

    if (type.endsWith("/fulfilled")) {
        if (type.includes("create")) appToast.success("Успішно створено");

        if (type.includes("update")) appToast.success("Успішно оновлено");

        if (type.includes("delete")) appToast.success("Успішно видалено");
    }

    if (type.endsWith("/rejected")) {
        const isMutationAction = mutationActionKeywords.some((keyword) => type.includes(keyword));

        if (isMutationAction) {
            appToast.error("Сталася помилка");
        }
    }

    return next(action);
};

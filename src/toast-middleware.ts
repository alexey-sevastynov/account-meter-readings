import { Middleware, UnknownAction } from "@reduxjs/toolkit";
import { appToast } from "@/shared/lib/toast";

export const toastMiddleware: Middleware = () => (next) => (action) => {
    const { type } = action as UnknownAction;

    if (type.endsWith("/fulfilled")) {
        if (type.includes("create")) appToast.success("Успішно створено");

        if (type.includes("update")) appToast.success("Успішно оновлено");

        if (type.includes("delete")) appToast.success("Успішно видалено");
    }

    if (type.endsWith("/rejected")) {
        appToast.error("Сталася помилка");
    }

    return next(action);
};

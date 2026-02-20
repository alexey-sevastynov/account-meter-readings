import { Middleware, UnknownAction } from "@reduxjs/toolkit";
import { mrToast } from "@/lib/toast";

export const toastMiddleware: Middleware = () => (next) => (action) => {
    const { type } = action as UnknownAction;

    if (type.endsWith("/fulfilled")) {
        if (type.includes("create")) mrToast.success("Успішно створено");

        if (type.includes("update")) mrToast.success("Успішно оновлено");

        if (type.includes("delete")) mrToast.success("Успішно видалено");
    }

    if (type.endsWith("/rejected")) {
        mrToast.error("Сталася помилка");
    }

    return next(action);
};

import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "@/features/task/slice";
import authReducer from "@/features/auth/slice";
import employeeReducer from "@/features/coffee-shop/employee/employee-slice";
import dailyReportReducer from "@/features/coffee-shop/daily-report/daily-report-slice";
import { toastMiddleware } from "@/toast-middleware";

export const store = configureStore({
    reducer: {
        task: taskReducer,
        auth: authReducer,
        employee: employeeReducer,
        dailyReport: dailyReportReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(toastMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

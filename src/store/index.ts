import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "@/modules/task/model/slice";
import authReducer from "@/modules/auth/model/slice";
import employeeReducer from "@/modules/employee/model/employee-slice";
import dailyReportReducer from "@/modules/daily-report/model/daily-report-slice";
import expenseReportReducer from "@/modules/expense-report/model/expense-report-slice";
import inventoryAuditReducer from "@/modules/inventory-audit/model/inventory-audit-slice";
import statisticsReducers from "@/modules/statistics/model/statistics-slice";
import { toastMiddleware } from "@/toast-middleware";

export const store = configureStore({
    reducer: {
        task: taskReducer,
        auth: authReducer,
        employee: employeeReducer,
        dailyReport: dailyReportReducer,
        expenseReport: expenseReportReducer,
        inventoryAudit: inventoryAuditReducer,
        statistics: statisticsReducers,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(toastMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

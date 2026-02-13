import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "@/features/task/slice";
import authReducer from "@/features/auth/slice";
import employeeReducer from "@/features/coffee-shop/employee/employee-slice";

export const store = configureStore({
    reducer: {
        task: taskReducer,
        auth: authReducer,
        employee: employeeReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit";
import { EmployeeState } from "@/features/coffee-shop/employee/employee-slice";
import { ApiError } from "@/types/api-error/api-error-type";
import { createApiError } from "@/lib/api-error";
import {
    createEmployee,
    deleteEmployee,
    getAllEmployees,
    updateEmployee,
} from "@/features/coffee-shop/employee/employee-thunks";
import { Employee } from "@/models/employee";

export const employeeExtraReducers = (builder: ActionReducerMapBuilder<EmployeeState>) => {
    builder
        .addCase(getAllEmployees.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(getAllEmployees.fulfilled, (state, action: PayloadAction<Employee[]>) => {
            state.data = action.payload;
            state.loading = false;
        })
        .addCase(getAllEmployees.rejected, (state, action) => {
            state.loading = false;
            const error = action.payload as ApiError | undefined;
            state.error = error ? createApiError(error.statusCode, error.message) : null;
        })
        .addCase(createEmployee.fulfilled, (state, action) => {
            state.data.push(action.payload);
        })
        .addCase(deleteEmployee.fulfilled, (state, action) => {
            state.data = state.data.filter((emp) => emp._id !== action.meta.arg);
        })
        .addCase(updateEmployee.fulfilled, (state, action) => {
            const index = state.data.findIndex((emp) => emp._id === action.payload._id);

            if (index !== -1) {
                state.data[index] = action.payload;
            }
        });
};

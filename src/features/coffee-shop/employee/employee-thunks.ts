import { AxiosError } from "axios";
import { apiEndpointNames } from "@/enums/services/api-endpoint-name";
import { createOne, deleteOne, getAll, updateOne } from "@/services/crud-service";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { convertToApiError } from "@/lib/api-error";
import { AuthResponse } from "@/features/auth/types/auth-response";
import { WithRejectValue } from "@/features/auth/types/with-reject-value";
import { Employee } from "@/models/employee";

type CreateEmployeeDto = Omit<Employee, "_id">;

export const getAllEmployees = createAsyncThunk<Employee[], void, { rejectValue: AxiosError }>(
    "allEmployees",
    async () => {
        const AllEmployees = await getAll<Employee>(apiEndpointNames.employee);

        return AllEmployees;
    },
);

export const createEmployee = createAsyncThunk<Employee, Employee, WithRejectValue>(
    "createEmployee",
    async (employee: CreateEmployeeDto, { rejectWithValue }) => {
        try {
            const response = await createOne<CreateEmployeeDto, Employee>(
                apiEndpointNames.employee,
                employee,
            );

            return response;
        } catch (error: unknown) {
            return rejectWithValue(convertToApiError(error));
        }
    },
);

export const deleteEmployee = createAsyncThunk<AuthResponse, string, WithRejectValue>(
    "deleteEmployee",
    async (_id: string, { rejectWithValue }) => {
        try {
            const response = await deleteOne<AuthResponse>(apiEndpointNames.employee, _id);

            return response;
        } catch (error: unknown) {
            return rejectWithValue(convertToApiError(error));
        }
    },
);

export const updateEmployee = createAsyncThunk<Employee, Employee, WithRejectValue>(
    "updateEmployee",
    async (employee: Employee, { rejectWithValue }) => {
        try {
            const response = await updateOne<Employee>(apiEndpointNames.employee, employee._id, employee);

            return response;
        } catch (error: unknown) {
            return rejectWithValue(convertToApiError(error));
        }
    },
);

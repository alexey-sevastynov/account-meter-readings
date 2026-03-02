import { AxiosError } from "axios";
import { apiEndpointNames } from "@/shared/constants/api-endpoint-name";
import { createOne, deleteOne, getAll, updateOne } from "@/shared/services/crud-service";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { convertToApiError } from "@/shared/lib/api-error";
import { WithRejectValue } from "@/modules/auth/types/with-reject-value";
import { Employee } from "@/modules/employee/types/employee";

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

export const deleteEmployee = createAsyncThunk<Employee, string, WithRejectValue>(
    "deleteEmployee",
    async (_id: string, { rejectWithValue }) => {
        try {
            const response = await deleteOne<Employee>(apiEndpointNames.employee, _id);

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

import { apiEndpointNames } from "@/enums/services/api-endpoint-name";
import { createOne, getAll } from "@/services/crud-service";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { convertToApiError } from "@/lib/api-error";
import { AuthResponse } from "@/features/auth/types/auth-response";
import { WithRejectValue } from "@/features/auth/types/with-reject-value";
import { EmployerPositionKey } from "@/enums/models/employer-position-key";
import { AxiosError } from "axios";

interface Employee {
    name: string;
    position: EmployerPositionKey;
    fixedSalary: number;
    isActive: boolean;
}

export const getAllEmployees = createAsyncThunk<Employee[], void, { rejectValue: AxiosError }>(
    "allEmployees",
    async () => {
        const AllEmployees = await getAll<Employee>(apiEndpointNames.employee);

        return AllEmployees;
    },
);

export const createEmployee = createAsyncThunk<AuthResponse, Employee, WithRejectValue>(
    "createEmployee",
    async (employee: Employee, { rejectWithValue }) => {
        try {
            const response = await createOne<Employee, AuthResponse>(apiEndpointNames.employee, {
                name: employee.name,
                position: employee.position,
                fixedSalary: employee.fixedSalary,
                isActive: employee.isActive,
            });

            return response;
        } catch (error: unknown) {
            return rejectWithValue(convertToApiError(error));
        }
    },
);

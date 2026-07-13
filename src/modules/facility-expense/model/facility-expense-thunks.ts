import { AxiosError } from "axios";
import { apiEndpointNames } from "@/shared/constants/api-endpoint-name";
import { createOne, deleteOne, getAll, updateOne } from "@/shared/services/crud-service";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { convertToApiError } from "@/shared/lib/api-error";
import { WithRejectValue } from "@/modules/auth/types/with-reject-value";
import { FacilityExpense } from "@/modules/facility-expense/types/facility-expense";

type CreateFacilityExpenseDto = Omit<FacilityExpense, "_id">;

export const getAllFacilityExpenses = createAsyncThunk<FacilityExpense[], void, { rejectValue: AxiosError }>(
    "allFacilityExpenses",
    async () => {
        const allExpenses = await getAll<FacilityExpense>(apiEndpointNames.facilityExpense);
        return allExpenses;
    },
);

export const createFacilityExpense = createAsyncThunk<FacilityExpense, CreateFacilityExpenseDto, WithRejectValue>(
    "createFacilityExpense",
    async (expense: CreateFacilityExpenseDto, { rejectWithValue }) => {
        try {
            const response = await createOne<CreateFacilityExpenseDto, FacilityExpense>(
                apiEndpointNames.facilityExpense,
                expense,
            );
            return response;
        } catch (error: unknown) {
            return rejectWithValue(convertToApiError(error));
        }
    },
);

export const deleteFacilityExpense = createAsyncThunk<FacilityExpense, string, WithRejectValue>(
    "deleteFacilityExpense",
    async (_id: string, { rejectWithValue }) => {
        try {
            const response = await deleteOne<FacilityExpense>(apiEndpointNames.facilityExpense, _id);
            return response;
        } catch (error: unknown) {
            return rejectWithValue(convertToApiError(error));
        }
    },
);

export const updateFacilityExpense = createAsyncThunk<FacilityExpense, FacilityExpense, WithRejectValue>(
    "updateFacilityExpense",
    async (expense: FacilityExpense, { rejectWithValue }) => {
        try {
            const response = await updateOne<FacilityExpense>(
                apiEndpointNames.facilityExpense,
                expense._id,
                expense,
            );
            return response;
        } catch (error: unknown) {
            return rejectWithValue(convertToApiError(error));
        }
    },
);

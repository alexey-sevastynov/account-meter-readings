import { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiEndpointNames } from "@/shared/constants/api-endpoint-name";
import { createOne, deleteOne, getAll, updateOne } from "@/shared/services/crud-service";
import { convertToApiError } from "@/shared/lib/api-error";
import { WithRejectValue } from "@/modules/auth/types/with-reject-value";
import { OwnerWithdrawal } from "@/modules/owner-withdrawal/types/owner-withdrawal";

type CreateOwnerWithdrawalDto = Omit<OwnerWithdrawal, "_id">;

export const getAllOwnerWithdrawals = createAsyncThunk<OwnerWithdrawal[], void, { rejectValue: AxiosError }>(
    "allOwnerWithdrawals",
    async () => {
        const allWithdrawals = await getAll<OwnerWithdrawal>(apiEndpointNames.ownerWithdrawal);

        return allWithdrawals;
    },
);

export const createOwnerWithdrawal = createAsyncThunk<
    OwnerWithdrawal,
    CreateOwnerWithdrawalDto,
    WithRejectValue
>("createOwnerWithdrawal", async (withdrawal: CreateOwnerWithdrawalDto, { rejectWithValue }) => {
    try {
        const response = await createOne<CreateOwnerWithdrawalDto, OwnerWithdrawal>(
            apiEndpointNames.ownerWithdrawal,
            withdrawal,
        );
        return response;
    } catch (error: unknown) {
        return rejectWithValue(convertToApiError(error));
    }
});

export const deleteOwnerWithdrawal = createAsyncThunk<OwnerWithdrawal, string, WithRejectValue>(
    "deleteOwnerWithdrawal",
    async (_id: string, { rejectWithValue }) => {
        try {
            const response = await deleteOne<OwnerWithdrawal>(apiEndpointNames.ownerWithdrawal, _id);
            return response;
        } catch (error: unknown) {
            return rejectWithValue(convertToApiError(error));
        }
    },
);

export const updateOwnerWithdrawal = createAsyncThunk<OwnerWithdrawal, OwnerWithdrawal, WithRejectValue>(
    "updateOwnerWithdrawal",
    async (withdrawal: OwnerWithdrawal, { rejectWithValue }) => {
        try {
            const response = await updateOne<OwnerWithdrawal>(
                apiEndpointNames.ownerWithdrawal,
                withdrawal._id,
                withdrawal,
            );
            return response;
        } catch (error: unknown) {
            return rejectWithValue(convertToApiError(error));
        }
    },
);

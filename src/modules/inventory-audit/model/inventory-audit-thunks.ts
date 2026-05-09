import { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiEndpointNames } from "@/shared/constants/api-endpoint-name";
import { createOne, deleteOne, getAll, updateOne } from "@/shared/services/crud-service";
import { convertToApiError } from "@/shared/lib/api-error";
import { WithRejectValue } from "@/modules/auth/types/with-reject-value";
import { InventoryAudit } from "@/modules/inventory-audit/types/inventory-audit";

type CreateInventoryAuditDto = Omit<InventoryAudit, "_id">;

export const getAllInventoryAudits = createAsyncThunk<InventoryAudit[], void, { rejectValue: AxiosError }>(
    "allInventoryAudit",
    async () => {
        const allInventoryAudit = await getAll<InventoryAudit>(apiEndpointNames.inventoryAudit);

        return allInventoryAudit;
    },
);

export const createInventoryAudit = createAsyncThunk<InventoryAudit, CreateInventoryAuditDto, WithRejectValue>(
    "createInventoryAudit",
    async (inventoryAudit, { rejectWithValue }) => {
        try {
            const response = await createOne<CreateInventoryAuditDto, InventoryAudit>(
                apiEndpointNames.inventoryAudit,
                inventoryAudit,
            );

            return response;
        } catch (error: unknown) {
            return rejectWithValue(convertToApiError(error));
        }
    },
);

export const deleteInventoryAudit = createAsyncThunk<InventoryAudit, string, WithRejectValue>(
    "deleteInventoryAudit",
    async (_id: string, { rejectWithValue }) => {
        try {
            const response = await deleteOne<InventoryAudit>(apiEndpointNames.inventoryAudit, _id);

            return response;
        } catch (error: unknown) {
            return rejectWithValue(convertToApiError(error));
        }
    },
);

export const updateInventoryAudit = createAsyncThunk<InventoryAudit, InventoryAudit, WithRejectValue>(
    "updateInventoryAudit",
    async (inventoryAudit, { rejectWithValue }) => {
        try {
            const response = await updateOne<InventoryAudit>(
                apiEndpointNames.inventoryAudit,
                inventoryAudit._id,
                inventoryAudit,
            );

            return response;
        } catch (error: unknown) {
            return rejectWithValue(convertToApiError(error));
        }
    },
);

import { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { createOne, deleteOne, getAll, updateOne } from "@/shared/services/crud-service";
import { convertToApiError } from "@/shared/lib/api-error";
import { WithRejectValue } from "@/modules/auth/types/with-reject-value";
import { apiEndpointNames } from "@/shared/constants/api-endpoint-name";
import {
    InventoryAlertRule,
    InventoryAlertRulePayload,
} from "@/modules/kavapp-inventory-alert-rules/types/inventory-alert-rule";

export const getAllInventoryAlertRules = createAsyncThunk<
    InventoryAlertRule[],
    void,
    { rejectValue: AxiosError }
>("inventoryAlertRules/getAll", () => getAll<InventoryAlertRule>(apiEndpointNames.kavappInventoryAlertRules));

export const createInventoryAlertRule = createAsyncThunk<
    InventoryAlertRule,
    InventoryAlertRulePayload,
    WithRejectValue
>("inventoryAlertRules/create", async (payload, { rejectWithValue }) => {
    try {
        return await createOne<InventoryAlertRulePayload, InventoryAlertRule>(
            apiEndpointNames.kavappInventoryAlertRules,
            payload,
        );
    } catch (error: unknown) {
        return rejectWithValue(convertToApiError(error));
    }
});

export const updateInventoryAlertRule = createAsyncThunk<
    InventoryAlertRule,
    InventoryAlertRule,
    WithRejectValue
>("inventoryAlertRules/update", async (rule, { rejectWithValue }) => {
    try {
        return await updateOne<InventoryAlertRulePayload, InventoryAlertRule>(
            apiEndpointNames.kavappInventoryAlertRules,
            rule._id,
            rule,
        );
    } catch (error: unknown) {
        return rejectWithValue(convertToApiError(error));
    }
});

export const deleteInventoryAlertRule = createAsyncThunk<void, string, WithRejectValue>(
    "inventoryAlertRules/delete",
    async (id, { rejectWithValue }) => {
        try {
            await deleteOne<{ success: boolean }>(apiEndpointNames.kavappInventoryAlertRules, id);
        } catch (error: unknown) {
            return rejectWithValue(convertToApiError(error));
        }
    },
);

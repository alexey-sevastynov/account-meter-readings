import { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { convertToApiError } from "@/shared/lib/api-error";
import { WithRejectValue } from "@/modules/auth/types/with-reject-value";
import {
    KavappInventoryResponse,
    KavappInventorySnapshot,
} from "@/modules/kavapp-inventory/types/kavapp-inventory-response";
import {
    fetchKavappInventory,
    syncKavappInventory as syncKavappInventoryApi,
    fetchLatestKavappSnapshot,
} from "@/modules/kavapp-inventory/services/kavapp-inventory-api";

export const getAllKavappInventory = createAsyncThunk<
    KavappInventoryResponse,
    string | undefined,
    { rejectValue: AxiosError }
>("kavappInventory/getAll", async (pointId?: string) => {
    const inventoryResponse = await fetchKavappInventory(pointId);

    return inventoryResponse;
});

export const syncKavappInventory = createAsyncThunk<
    unknown,
    { pointId?: string; testAlert?: boolean },
    WithRejectValue
>("kavappInventory/sync", async ({ pointId, testAlert }, { rejectWithValue }) => {
    try {
        const response = await syncKavappInventoryApi(pointId, testAlert);

        return response;
    } catch (error: unknown) {
        return rejectWithValue(convertToApiError(error));
    }
});

export const getLatestKavappSnapshot = createAsyncThunk<
    KavappInventorySnapshot,
    void,
    { rejectValue: AxiosError }
>("kavappInventory/getLatestSnapshot", async () => {
    const snapshot = await fetchLatestKavappSnapshot();

    return snapshot;
});

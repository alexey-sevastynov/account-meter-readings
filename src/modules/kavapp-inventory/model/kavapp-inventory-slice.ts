import { createSlice } from "@reduxjs/toolkit";
import { ApiError } from "@/shared/types/api-error/api-error-type";
import { kavappInventoryExtraReducers } from "@/modules/kavapp-inventory/model/kavapp-inventory-extra-reducers";
import { KavappInventoryResponse, KavappInventorySnapshot } from "@/modules/kavapp-inventory/types/kavapp-inventory-response";

export interface KavappInventoryState {
    inventory: KavappInventoryResponse | null;
    latestSnapshot: KavappInventorySnapshot | null;
    loading: boolean;
    syncing: boolean;
    error: ApiError | null;
}

const initialState: KavappInventoryState = {
    inventory: null,
    latestSnapshot: null,
    loading: false,
    syncing: false,
    error: null,
};

const kavappInventorySlice = createSlice({
    name: "kavappInventory",
    initialState,
    reducers: {},
    extraReducers: kavappInventoryExtraReducers,
});

export default kavappInventorySlice.reducer;

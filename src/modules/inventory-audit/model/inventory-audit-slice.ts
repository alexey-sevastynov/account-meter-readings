import { createSlice } from "@reduxjs/toolkit";
import { ApiError } from "@/shared/types/api-error/api-error-type";
import { InventoryAudit } from "@/modules/inventory-audit/types/inventory-audit";
import { inventoryAuditExtraReducers } from "@/modules/inventory-audit/model/inventory-audit-extra-reducers";

export interface InventoryAuditState {
    data: InventoryAudit[];
    loading: boolean;
    error: ApiError | null;
}

const initialState: InventoryAuditState = {
    data: [],
    loading: false,
    error: null,
};

const inventoryAuditSlice = createSlice({
    name: "inventoryAudit",
    initialState,
    reducers: {},
    extraReducers: inventoryAuditExtraReducers,
});

export default inventoryAuditSlice.reducer;

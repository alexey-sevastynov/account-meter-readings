import { createSlice } from "@reduxjs/toolkit";
import { ApiError } from "@/shared/types/api-error/api-error-type";
import { OwnerWithdrawal } from "@/modules/owner-withdrawal/types/owner-withdrawal";
import { ownerWithdrawalExtraReducers } from "@/modules/owner-withdrawal/model/owner-withdrawal-extra-reducers";

export interface OwnerWithdrawalState {
    data: OwnerWithdrawal[];
    loading: boolean;
    error: ApiError | null;
}

const initialState: OwnerWithdrawalState = {
    data: [],
    loading: false,
    error: null,
};

const ownerWithdrawalSlice = createSlice({
    name: "ownerWithdrawal",
    initialState,
    reducers: {},
    extraReducers: ownerWithdrawalExtraReducers,
});

export default ownerWithdrawalSlice.reducer;

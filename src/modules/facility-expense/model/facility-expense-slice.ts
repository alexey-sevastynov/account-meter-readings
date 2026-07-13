import { createSlice } from "@reduxjs/toolkit";
import { ApiError } from "@/shared/types/api-error/api-error-type";
import { facilityExpenseExtraReducers } from "@/modules/facility-expense/model/facility-expense-extra-reducers";
import { FacilityExpense } from "@/modules/facility-expense/types/facility-expense";

export interface FacilityExpenseState {
    data: FacilityExpense[];
    loading: boolean;
    error: ApiError | null;
}

const initialState: FacilityExpenseState = {
    data: [],
    loading: false,
    error: null,
};

const facilityExpenseSlice = createSlice({
    name: "facilityExpense",
    initialState,
    reducers: {},
    extraReducers: facilityExpenseExtraReducers,
});

export default facilityExpenseSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { ApiError } from "@/shared/types/api-error/api-error-type";
import { expenseReportExtraReducers } from "@/modules/expense-report/model/expense-report-extra-reducers";
import { ExpenseReport } from "@/modules/expense-report/types/expense-report";

export interface ExpenseReportState {
    data: ExpenseReport[];
    loading: boolean;
    error: ApiError | null;
}

const initialState: ExpenseReportState = {
    data: [],
    loading: false,
    error: null,
};

const expenseReportSlice = createSlice({
    name: "expenseReport",
    initialState,
    reducers: {},
    extraReducers: expenseReportExtraReducers,
});

export default expenseReportSlice.reducer;

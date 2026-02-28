import { DailyReport } from "@/models/daily-report";
import { createSlice } from "@reduxjs/toolkit";
import { ApiError } from "@/types/api-error/api-error-type";
import { dailyReportExtraReducers } from "@/features/coffee-shop/daily-report/daily-report-extra-reducers";

export interface DailyReportState {
    data: DailyReport[];
    loading: boolean;
    error: ApiError | null;
}

const initialState: DailyReportState = {
    data: [],
    loading: false,
    error: null,
};

const dailyReportSlice = createSlice({
    name: "dailyReport",
    initialState,
    reducers: {},
    extraReducers: dailyReportExtraReducers,
});

export default dailyReportSlice.reducer;

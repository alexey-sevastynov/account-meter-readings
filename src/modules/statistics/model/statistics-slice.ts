import { createSlice } from "@reduxjs/toolkit";
import { ApiError } from "@/shared/types/api-error/api-error-type";
import { CoffeeShopStatistics } from "@/modules/statistics/types/statistic-coffee-shop";
import { statisticsExtraReducers } from "@/modules/statistics/model/statistics-reducers";

export interface StatisticsState {
    data: CoffeeShopStatistics | null;
    loading: boolean;
    error: ApiError | null;
}

const initialState: StatisticsState = {
    data: null,
    loading: false,
    error: null,
};

const statisticsSlice = createSlice({
    name: "statistics",
    initialState,
    reducers: {},
    extraReducers: statisticsExtraReducers,
});

export default statisticsSlice.reducer;

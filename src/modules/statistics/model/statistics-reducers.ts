import { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit";
import { ApiError } from "@/shared/types/api-error/api-error-type";
import { createApiError } from "@/shared/lib/api-error";
import { getCoffeeShopStatistics } from "@/modules/statistics/model/statistics-thunks";
import { StatisticsState } from "@/modules/statistics/model/statistics-slice";
import { CoffeeShopStatistics } from "@/modules/statistics/types/statistic-coffee-shop";

export const statisticsExtraReducers = (builder: ActionReducerMapBuilder<StatisticsState>) => {
    builder
        .addCase(getCoffeeShopStatistics.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(getCoffeeShopStatistics.fulfilled, (state, action: PayloadAction<CoffeeShopStatistics>) => {
            state.data = action.payload;
            state.loading = false;
        })
        .addCase(getCoffeeShopStatistics.rejected, (state, action) => {
            state.loading = false;
            const error = action.payload as ApiError | undefined;
            state.error = error ? createApiError(error.statusCode, error.message) : null;
        });
};

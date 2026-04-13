import { AxiosError } from "axios";
import { apiEndpointNames } from "@/shared/constants/api-endpoint-name";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { CoffeeShopStatistics } from "@/modules/statistics/types/statistic-coffee-shop";
import { apiClient } from "@/shared/lib/axios";
import { DateRange } from "@/shared/types/date-range/date-range-type";

export const getCoffeeShopStatistics = createAsyncThunk<
    CoffeeShopStatistics,
    DateRange,
    { rejectValue: AxiosError }
>("allCoffeeShopStatistics", async (params) => {
    const coffeeShopStatistics = await apiClient.get<CoffeeShopStatistics>(apiEndpointNames.statistics, {
        params,
    });

    return coffeeShopStatistics.data;
});

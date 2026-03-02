import { AxiosError } from "axios";
import { apiEndpointNames } from "@/shared/constants/api-endpoint-name";
import { createOne, deleteOne, getAll, updateOne } from "@/shared/services/crud-service";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { convertToApiError } from "@/shared/lib/api-error";
import { WithRejectValue } from "@/modules/auth/types/with-reject-value";
import { DailyReport } from "@/modules/daily-report/types/daily-report";

type CreateDailyReportDto = Omit<DailyReport, "_id">;

export const getAllDailyReports = createAsyncThunk<DailyReport[], void, { rejectValue: AxiosError }>(
    "allDailyReports",
    async () => {
        const allReports = await getAll<DailyReport>(apiEndpointNames.dailyReport);
        return allReports;
    },
);

export const createDailyReport = createAsyncThunk<DailyReport, DailyReport, WithRejectValue>(
    "createDailyReport",
    async (report, { rejectWithValue }) => {
        try {
            const response = await createOne<CreateDailyReportDto, DailyReport>(
                apiEndpointNames.dailyReport,
                report as CreateDailyReportDto,
            );
            return response;
        } catch (error: unknown) {
            return rejectWithValue(convertToApiError(error));
        }
    },
);

export const deleteDailyReport = createAsyncThunk<DailyReport, string, WithRejectValue>(
    "deleteDailyReport",
    async (_id: string, { rejectWithValue }) => {
        try {
            const response = await deleteOne<DailyReport>(apiEndpointNames.dailyReport, _id);
            return response;
        } catch (error: unknown) {
            return rejectWithValue(convertToApiError(error));
        }
    },
);

export const updateDailyReport = createAsyncThunk<DailyReport, DailyReport, WithRejectValue>(
    "updateDailyReport",
    async (report, { rejectWithValue }) => {
        try {
            const response = await updateOne<DailyReport, DailyReport>(
                apiEndpointNames.dailyReport,
                report._id as string,
                report,
            );

            return response;
        } catch (error: unknown) {
            return rejectWithValue(convertToApiError(error));
        }
    },
);

import { AxiosError } from "axios";
import { apiEndpointNames } from "@/shared/constants/api-endpoint-name";
import { createOne, deleteOne, getAll, updateOne } from "@/shared/services/crud-service";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { convertToApiError } from "@/shared/lib/api-error";
import { WithRejectValue } from "@/modules/auth/types/with-reject-value";
import { ExpenseReport } from "@/modules/expense-report/types/expense-report";

type CreateExpenseReportDto = Omit<ExpenseReport, "_id">;

export const getAllExpenseReports = createAsyncThunk<ExpenseReport[], void, { rejectValue: AxiosError }>(
    "allExpenseReport",
    async () => {
        const allExpenseReport = await getAll<ExpenseReport>(apiEndpointNames.expenseReport);

        return allExpenseReport;
    },
);

export const createExpenseReport = createAsyncThunk<ExpenseReport, ExpenseReport, WithRejectValue>(
    "createExpenseReport",
    async (expenseReport: CreateExpenseReportDto, { rejectWithValue }) => {
        try {
            const response = await createOne<CreateExpenseReportDto, ExpenseReport>(
                apiEndpointNames.expenseReport,
                expenseReport,
            );

            return response;
        } catch (error: unknown) {
            return rejectWithValue(convertToApiError(error));
        }
    },
);

export const deleteExpenseReport = createAsyncThunk<ExpenseReport, string, WithRejectValue>(
    "deleteExpenseReport",
    async (_id: string, { rejectWithValue }) => {
        try {
            const response = await deleteOne<ExpenseReport>(apiEndpointNames.expenseReport, _id);

            return response;
        } catch (error: unknown) {
            return rejectWithValue(convertToApiError(error));
        }
    },
);

export const updateExpenseReport = createAsyncThunk<ExpenseReport, ExpenseReport, WithRejectValue>(
    "updateExpenseReport",
    async (expenseReport: ExpenseReport, { rejectWithValue }) => {
        try {
            const response = await updateOne<ExpenseReport>(
                apiEndpointNames.expenseReport,
                expenseReport._id,
                expenseReport,
            );

            return response;
        } catch (error: unknown) {
            return rejectWithValue(convertToApiError(error));
        }
    },
);

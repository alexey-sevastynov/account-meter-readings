import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { Task } from "@/models/task";
import { getAll } from "@/services/crud-service";
import { apiEndpointNames } from "@/enums/services/api-endpoint-name";

export const getAllTasks = createAsyncThunk<Task[], void, { rejectValue: AxiosError }>(
    "allTasks",
    async () => {
        const allTasks = await getAll<Task>(apiEndpointNames.tasks);

        return allTasks;
    }
);

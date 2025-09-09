import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "@/models/task";
import { getAllTasks } from "@/features/task/thunks";

interface TaskState {
    data: Task[] | null;
    loading: boolean;
    error: string | null;
}

const initialState: TaskState = {
    data: null,
    loading: false,
    error: null,
};

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllTasks.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAllTasks.fulfilled, (state, action: PayloadAction<Task[]>) => {
                state.data = action.payload;
                state.loading = false;
            })
            .addCase(getAllTasks.rejected, (state) => {
                state.loading = false;
                state.error = "Failed to fetch tasks";
            });
    },
});

export default taskSlice.reducer;

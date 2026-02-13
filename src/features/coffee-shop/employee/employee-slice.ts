import { Employee } from "@/models/employee";
import { createSlice } from "@reduxjs/toolkit";
import { ApiError } from "@/types/api-error/api-error-type";
import { employeeExtraReducers } from "@/features/coffee-shop/employee/employee-extra-reducers";

export interface EmployeeState {
    data: Employee[];
    loading: boolean;
    error: ApiError | null;
}

const initialState: EmployeeState = {
    data: [],
    loading: false,
    error: null,
};

const employeeSlice = createSlice({
    name: "employee",
    initialState,
    reducers: {},
    extraReducers: employeeExtraReducers,
});

export default employeeSlice.reducer;

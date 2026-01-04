import { ActionReducerMapBuilder, PayloadAction } from "@reduxjs/toolkit";
import { signIn, signInAsGuest, signUp } from "@/features/auth/thunks";
import { AuthState } from "@/features/auth/slice";
import { ApiError } from "@/types/api-error/api-error-type";
import { createApiError } from "@/lib/api-error";
import { AuthResponse } from "@/features/auth/types/auth-response";

export const authExtraReducers = (builder: ActionReducerMapBuilder<AuthState>) => {
    builder
        .addCase(signIn.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(signIn.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
            state.isLoading = false;
            state.isSignedIn = true;
            state.token = action.payload.token;
            state.userId = action.payload.userId;
            state.userName = action.payload.userName;
        })
        .addCase(signIn.rejected, (state, action) => {
            state.isLoading = false;
            const error = action.payload as ApiError | undefined;
            state.error = error ? createApiError(error.statusCode, error.message) : null;
        })

        .addCase(signUp.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(signUp.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
            state.isLoading = false;
            state.isSignedIn = true;
            state.userId = action.payload.userId;
            state.token = action.payload.token;
            state.userName = action.payload.userName;
        })
        .addCase(signUp.rejected, (state, action) => {
            state.isLoading = false;
            const error = action.payload as ApiError | undefined;
            state.error = error ? createApiError(error.statusCode, error.message) : null;
        })

        .addCase(signInAsGuest.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(signInAsGuest.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
            state.isLoading = false;
            state.isSignedIn = true;
            state.token = action.payload.token;
            state.userId = action.payload.userId;
            state.userName = action.payload.userName;
        })
        .addCase(signInAsGuest.rejected, (state, action) => {
            state.isLoading = false;
            const error = action.payload as ApiError | undefined;
            state.error = error ? createApiError(error.statusCode, error.message) : null;
        });
};

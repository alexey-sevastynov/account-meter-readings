import { createSlice } from "@reduxjs/toolkit";
import { authExtraReducers } from "@/features/auth/extra-reducers";
import { ApiError } from "@/types/api-error/api-error-type";
import { removeCookie } from "@/utils/cookie/cookies";
import { cookieKeys } from "@/utils/cookie/cookie-key";

export interface AuthState {
    userId: string | null;
    userName: string | null;
    token: string | null;
    isLoading: boolean;
    error: ApiError | null;
    isSignedIn: boolean;
}

const initialState: AuthState = {
    userId: null,
    userName: null,
    token: null,
    isLoading: false,
    error: null,
    isSignedIn: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        signOut: (state) => {
            removeCookie(cookieKeys.token);
            removeCookie(cookieKeys.userName);
            removeCookie(cookieKeys.isVerified);

            state.userId = null;
            state.userName = null;
            state.token = null;
            state.isSignedIn = false;
            state.isLoading = false;
            state.error = null;
        },
        clearAuthError(state) {
            state.error = null;
        },
    },
    extraReducers: authExtraReducers,
});

export const { signOut, clearAuthError } = authSlice.actions;
export default authSlice.reducer;

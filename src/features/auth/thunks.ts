import { apiEndpointNames } from "@/enums/services/api-endpoint-name";
import { User } from "@/models/user";
import { createOne } from "@/services/crud-service";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { convertToApiError } from "@/lib/api-error";
import { AuthResponse } from "@/features/auth/types/auth-response";
import { WithRejectValue } from "@/features/auth/types/with-reject-value";
import { setCookie } from "@/utils/cookie/cookies";
import { cookieKeys } from "@/utils/cookie/cookie-key";

type SignInDto = Pick<User, "email" | "password">;
type SignUpDto = Pick<User, "email" | "password" | "firstName" | "lastName" | "userName" | "phoneNumber">;

export const signIn = createAsyncThunk<AuthResponse, SignInDto, WithRejectValue>(
    "signIn",
    async (signInDto: SignInDto, { rejectWithValue }) => {
        try {
            const response = await createOne<SignInDto, AuthResponse>(apiEndpointNames.signIn, {
                email: signInDto.email,
                password: signInDto.password,
            });

            setCookie(cookieKeys.token, response.token);

            return response;
        } catch (error: unknown) {
            return rejectWithValue(convertToApiError(error));
        }
    }
);

export const signUp = createAsyncThunk<AuthResponse, SignUpDto, WithRejectValue>(
    "signUp",
    async (signUpDto: SignUpDto, { rejectWithValue }) => {
        try {
            const response = await createOne<SignUpDto, AuthResponse>(apiEndpointNames.signUp, {
                email: signUpDto.email,
                password: signUpDto.password,
                userName: signUpDto.userName,
                phoneNumber: undefined,
                firstName: undefined,
                lastName: undefined,
            });

            setCookie(cookieKeys.token, response.token);

            return response;
        } catch (error: unknown) {
            return rejectWithValue(convertToApiError(error));
        }
    }
);

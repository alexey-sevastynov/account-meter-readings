import { apiEndpointNames } from "@/enums/services/api-endpoint-name";
import { User } from "@/models/user";
import { createOne } from "@/services/crud-service";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { convertToApiError } from "@/lib/api-error";
import { AuthResponse } from "@/features/auth/types/auth-response";
import { WithRejectValue } from "@/features/auth/types/with-reject-value";

type SignInDto = Pick<User, "email" | "password">;
type SignUpDto = Pick<User, "email" | "password" | "firstName" | "lastName" | "userName" | "phoneNumber">;

export const signIn = createAsyncThunk<AuthResponse, SignInDto, WithRejectValue>(
    "signIn",
    async (signInDto: SignInDto, { rejectWithValue }) => {
        try {
            const token = await createOne<SignInDto>(apiEndpointNames.signIn, {
                email: signInDto.email,
                password: signInDto.password,
            });

            return token as unknown as AuthResponse;
        } catch (error: unknown) {
            return rejectWithValue(convertToApiError(error));
        }
    }
);

export const signUp = createAsyncThunk<AuthResponse, SignUpDto, WithRejectValue>(
    "signUp",
    async (signUpDto: SignUpDto, { rejectWithValue }) => {
        try {
            const token = await createOne(apiEndpointNames.signUp, {
                email: signUpDto.email,
                password: signUpDto.password,
                userName: signUpDto.userName,
                phoneNumber: undefined,
                firstName: undefined,
                lastName: undefined,
            });

            return token as unknown as AuthResponse;
        } catch (error: unknown) {
            return rejectWithValue(convertToApiError(error));
        }
    }
);

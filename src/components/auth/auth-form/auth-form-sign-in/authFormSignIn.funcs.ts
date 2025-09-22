import { AppDispatch } from "@/app/store";
import { signIn } from "@/features/auth/thunks";
import { SignInFormValues } from "@/components/auth/types/sign-in-form-values";

export async function login(dispatch: AppDispatch, data: SignInFormValues) {
    const response = await dispatch(signIn(data));

    return response;
}

import { AppDispatch } from "@/store";
import { signIn } from "@/modules/auth/model/thunks";
import { SignInFormValues } from "@/modules/auth/types/sign-in-form-values";

export async function login(dispatch: AppDispatch, data: SignInFormValues) {
    const response = await dispatch(signIn(data));

    return response;
}

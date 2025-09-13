import { AppDispatch } from "@/app/store";
import { signIn } from "@/features/auth/thunks";
import { SignInFormValues } from "@/components/auth/types/sign-in-form-values";

export function login(dispatch: AppDispatch, data: SignInFormValues) {
    dispatch(signIn(data));
}

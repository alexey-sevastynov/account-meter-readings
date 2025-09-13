import { AppDispatch } from "@/app/store";
import { signUp } from "@/features/auth/thunks";
import { SignUpFormValues } from "@/components/auth/types/sign-up-form-values";

export function register(dispatch: AppDispatch, data: SignUpFormValues) {
    dispatch(signUp(data));
}

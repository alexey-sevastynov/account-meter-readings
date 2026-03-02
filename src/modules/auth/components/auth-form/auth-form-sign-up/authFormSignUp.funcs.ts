import { AppDispatch } from "@/store";
import { signUp } from "@/modules/auth/model/thunks";
import { SignUpFormValues } from "@/modules/auth/types/sign-up-form-values";

export function register(dispatch: AppDispatch, data: SignUpFormValues) {
    dispatch(signUp(data));
}

import { AuthModeKey } from "@/components/auth/enums/auth-mode-key";
import { isSignInMode, isSignUpMode } from "@/components/auth/auth-form/AuthForm.funcs";

export function getAuthModeLabel(mode: AuthModeKey) {
    if (isSignInMode(mode)) return "Sign In";

    if (isSignUpMode(mode)) return "Sign Up";

    return "";
}

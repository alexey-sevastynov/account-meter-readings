import { AuthModeKey } from "@/modules/auth/enums/auth-mode-key";
import { isSignInMode } from "@/modules/auth/components/auth-form/AuthForm.funcs";

export function getAuthModeToggleLabel(mode: AuthModeKey) {
    return isSignInMode(mode) ? "Sign Up" : "Sign In";
}

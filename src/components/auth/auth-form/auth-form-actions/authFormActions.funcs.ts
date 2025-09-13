import { AuthModeKey } from "@/components/auth/enums/auth-mode-key";
import { isSignInMode } from "@/components/auth/auth-form/AuthForm.funcs";

export function getAuthModeToggleLabel(mode: AuthModeKey) {
    return isSignInMode(mode) ? "Sign Up" : "Sign In";
}

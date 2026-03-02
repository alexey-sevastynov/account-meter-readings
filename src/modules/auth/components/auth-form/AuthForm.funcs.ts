import { VoidFunc } from "@/shared/types/getter-setter-functions";
import { AuthModeKey, authModeKeys } from "@/modules/auth/enums/auth-mode-key";

export function isSignInMode(mode: AuthModeKey) {
    return mode === authModeKeys.signIn;
}

export function isSignUpMode(mode: AuthModeKey) {
    return mode === authModeKeys.signUp;
}

export function toggleAuthMode(setAuthMode: VoidFunc<AuthModeKey>, currentAuthMode: AuthModeKey) {
    setAuthMode(getToggledAuthMode(currentAuthMode));
}

export function getAuthModeLabel(mode: AuthModeKey) {
    if (isSignInMode(mode)) return "Sign In";

    if (isSignUpMode(mode)) return "Sign Up";

    return "";
}

function getToggledAuthMode(currentMode: AuthModeKey) {
    return isSignInMode(currentMode) ? authModeKeys.signUp : authModeKeys.signIn;
}

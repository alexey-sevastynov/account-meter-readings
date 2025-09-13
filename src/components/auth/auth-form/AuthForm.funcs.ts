import { AuthModeKey, authModeKeys } from "@/components/auth/enums/auth-mode-key";
import { VoidFunc } from "@/types/getter-setter-functions";

export function isSignInMode(mode: AuthModeKey) {
    return mode === authModeKeys.signIn;
}

export function isSignUpMode(mode: AuthModeKey) {
    return mode === authModeKeys.signUp;
}

export function toggleAuthMode(setAuthMode: VoidFunc<AuthModeKey>, currentAuthMode: AuthModeKey) {
    setAuthMode(getToggledAuthMode(currentAuthMode));
}

function getToggledAuthMode(currentMode: AuthModeKey) {
    return isSignInMode(currentMode) ? authModeKeys.signUp : authModeKeys.signIn;
}

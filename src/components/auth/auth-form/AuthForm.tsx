"use client";

import { useCallback, useState } from "react";
import { AuthModeKey, authModeKeys } from "@/components/auth/enums/auth-mode-key";
import { getAuthModeLabel, isSignInMode, toggleAuthMode } from "@/components/auth/auth-form/AuthForm.funcs";
import { MrAuthFormActions } from "@/components/auth/auth-form/auth-form-actions/AuthFormActions";
import { MrAuthFormSignIn } from "@/components/auth/auth-form/auth-form-sign-in/AuthFormSignIn";
import { MrAuthFormSignUp } from "@/components/auth/auth-form/auth-form-sign-up/AuthFormSignUp";
import { useAppDispatch } from "@/hooks/use-app-dispatch";
import { clearAuthError } from "@/features/auth/slice";
import { MrTitle } from "@/components/ui/title/Title";

export function MrAuthForm() {
    const dispatch = useAppDispatch();
    const [authMode, setAuthMode] = useState<AuthModeKey>(authModeKeys.signIn);

    const onToggleAuthMode = useCallback(() => {
        dispatch(clearAuthError());
        toggleAuthMode(setAuthMode, authMode);
    }, [authMode, dispatch]);

    return (
        <>
            <MrTitle className="text-black">{getAuthModeLabel(authMode)}</MrTitle>
            {isSignInMode(authMode) ? <MrAuthFormSignIn /> : <MrAuthFormSignUp />}
            <MrAuthFormActions authMode={authMode} toggleAuthMode={onToggleAuthMode} />
        </>
    );
}

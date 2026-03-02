"use client";

import { useCallback, useState } from "react";
import { MrTitle } from "@/shared/ui/typography/title/Title";
import { useAppDispatch } from "@/shared/lib/redux/hooks/use-app-dispatch";
import { AuthModeKey, authModeKeys } from "@/modules/auth/enums/auth-mode-key";
import {
    getAuthModeLabel,
    isSignInMode,
    toggleAuthMode,
} from "@/modules/auth/components/auth-form/AuthForm.funcs";
import { MrAuthFormActions } from "@/modules/auth/components/auth-form/auth-form-actions/AuthFormActions";
import { MrAuthFormSignIn } from "@/modules/auth/components/auth-form/auth-form-sign-in/AuthFormSignIn";
import { MrAuthFormSignUp } from "@/modules/auth/components/auth-form/auth-form-sign-up/AuthFormSignUp";
import { clearAuthError } from "@/modules/auth/model/slice";

export function MrAuthForm() {
    const dispatch = useAppDispatch();
    const [authMode, setAuthMode] = useState<AuthModeKey>(authModeKeys.signIn);

    const onToggleAuthMode = useCallback(() => {
        dispatch(clearAuthError());
        toggleAuthMode(setAuthMode, authMode);
    }, [authMode, dispatch]);

    return (
        <>
            <MrTitle className="text-foreground">{getAuthModeLabel(authMode)}</MrTitle>
            {isSignInMode(authMode) ? <MrAuthFormSignIn /> : <MrAuthFormSignUp />}
            <MrAuthFormActions authMode={authMode} toggleAuthMode={onToggleAuthMode} />
        </>
    );
}

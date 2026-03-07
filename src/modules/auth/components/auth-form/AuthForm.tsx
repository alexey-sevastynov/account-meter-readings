"use client";

import { useCallback, useState } from "react";
import { Title } from "@/shared/ui/typography/title/Title";
import { useAppDispatch } from "@/shared/lib/redux/hooks/use-app-dispatch";
import { AuthModeKey, authModeKeys } from "@/modules/auth/enums/auth-mode-key";
import {
    getAuthModeLabel,
    isSignInMode,
    toggleAuthMode,
} from "@/modules/auth/components/auth-form/AuthForm.funcs";
import { AuthFormActions } from "@/modules/auth/components/auth-form/auth-form-actions/AuthFormActions";
import { AuthFormSignIn } from "@/modules/auth/components/auth-form/auth-form-sign-in/AuthFormSignIn";
import { AuthFormSignUp } from "@/modules/auth/components/auth-form/auth-form-sign-up/AuthFormSignUp";
import { clearAuthError } from "@/modules/auth/model/slice";

export function AuthForm() {
    const dispatch = useAppDispatch();
    const [authMode, setAuthMode] = useState<AuthModeKey>(authModeKeys.signIn);

    const onToggleAuthMode = useCallback(() => {
        dispatch(clearAuthError());
        toggleAuthMode(setAuthMode, authMode);
    }, [authMode, dispatch]);

    return (
        <>
            <Title className="text-foreground">{getAuthModeLabel(authMode)}</Title>
            {isSignInMode(authMode) ? <AuthFormSignIn /> : <AuthFormSignUp />}
            <AuthFormActions authMode={authMode} toggleAuthMode={onToggleAuthMode} />
        </>
    );
}

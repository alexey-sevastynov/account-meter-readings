"use client";

import { useCallback, useState } from "react";
import { AuthModeKey, authModeKeys } from "@/components/auth/enums/auth-mode-key";
import { isSignInMode, toggleAuthMode } from "@/components/auth/auth-form/AuthForm.funcs";
import { MrAuthFormHeader } from "@/components/auth/auth-form/auth-form-header/AuthFormHeader";
import { MrAuthFormActions } from "@/components/auth/auth-form/auth-form-actions/AuthFormActions";
import { MrAuthFormSignIn } from "@/components/auth/auth-form/auth-form-sign-in/AuthFormSignIn";
import { MrAuthFormSignUp } from "@/components/auth/auth-form/auth-form-sign-up/AuthFormSignUp";

export function MrAuthForm() {
    const [authMode, setAuthMode] = useState<AuthModeKey>(authModeKeys.signIn);

    const onToggleAuthMode = useCallback(() => {
        toggleAuthMode(setAuthMode, authMode);
    }, [authMode]);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl">
                <MrAuthFormHeader authMode={authMode} />
                {isSignInMode(authMode) ? <MrAuthFormSignIn /> : <MrAuthFormSignUp />}
                <MrAuthFormActions authMode={authMode} toggleAuthMode={onToggleAuthMode} />
            </div>
        </div>
    );
}

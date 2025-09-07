"use client";

import { useCallback, useState } from "react";
import { AuthModeKey, authModeKeys } from "@/components/auth/enums/auth-mode-key";
import { MrButton } from "@/components/ui/button/Button";
import { getAuthModeLabel, toggleAuthMode } from "@/components/auth/auth-form/AuthForm.funcs";
import { MrAuthFormHeader } from "@/components/auth/auth-form/auth-form-header/AuthFormHeader";
import { MrAuthFormFields } from "@/components/auth/auth-form/auth-form-fields/AuthFormFields";
import { MrAuthFormActions } from "@/components/auth/auth-form/auth-form-actions/AuthFormActions";
import { MrAuthFormSocial } from "@/components/auth/auth-form/auth-form-social/AuthFormSocial";

export function MrAuthForm() {
    const [authMode, setAuthMode] = useState<AuthModeKey>(authModeKeys.signIn);
    const onToggleAuthMode = useCallback(() => {
        toggleAuthMode(setAuthMode, authMode);
    }, [authMode]);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl">
                <MrAuthFormHeader authMode={authMode} />
                <form className="mt-6 space-y-4">
                    <MrAuthFormFields authMode={authMode} />
                    <MrButton text={getAuthModeLabel(authMode)} type="button" className="w-full" />
                </form>
                <MrAuthFormActions authMode={authMode} toggleAuthMode={onToggleAuthMode} />
                <MrAuthFormSocial />
            </div>
        </div>
    );
}

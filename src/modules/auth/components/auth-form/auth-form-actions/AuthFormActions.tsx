import { MrButton } from "@/shared/ui/button/Button";
import { buttonVariantKeys } from "@/shared/ui/button/button-variant-keys";
import { VoidFuncNoParam } from "@/shared/types/getter-setter-functions";
import { MrLink } from "@/shared/ui/link/Link";
import { routeKeys } from "@/shared/constants/route-keys";
import { AuthModeKey } from "@/modules/auth/enums/auth-mode-key";
import { getAuthModeToggleLabel } from "@/modules/auth/components/auth-form/auth-form-actions/authFormActions.funcs";
import { isSignInMode } from "@/modules/auth/components/auth-form/AuthForm.funcs";

interface MrAuthFormActionsProps {
    authMode: AuthModeKey;
    toggleAuthMode: VoidFuncNoParam;
}

export function MrAuthFormActions({ authMode, toggleAuthMode }: MrAuthFormActionsProps) {
    return (
        <>
            {isSignInMode(authMode) && (
                <div className="mt-2 text-right">
                    <MrLink href={routeKeys.forgotPassword}>Forgot password?</MrLink>
                </div>
            )}

            <p className="mt-8 text-center text-gray-600">
                {isSignInMode(authMode) ? "Don’t have an account?" : "Already have an account?"}
                <MrButton
                    className="w-full"
                    variant={buttonVariantKeys.link}
                    onClick={toggleAuthMode}
                    text={getAuthModeToggleLabel(authMode)}
                />
            </p>
        </>
    );
}

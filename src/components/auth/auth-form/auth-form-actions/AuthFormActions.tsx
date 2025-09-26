import { MrButton } from "@/components/ui/button/Button";
import { buttonVariantKeys } from "@/enums/ui/button-variant-key";
import { AuthModeKey } from "@/components/auth/enums/auth-mode-key";
import { isSignInMode } from "@/components/auth/auth-form/AuthForm.funcs";
import { VoidFuncNoParam } from "@/types/getter-setter-functions";
import { getAuthModeToggleLabel } from "@/components/auth/auth-form/auth-form-actions/authFormActions.funcs";
import { MrLink } from "@/components/ui/link/Link";
import { routeKeys } from "@/enums/url/route-key";

interface MrAuthFormActionsProps {
    authMode: AuthModeKey;
    toggleAuthMode: VoidFuncNoParam;
}

export function MrAuthFormActions({ authMode, toggleAuthMode }: MrAuthFormActionsProps) {
    return (
        <>
            {isSignInMode(authMode) && (
                <div className="mt-4 text-right">
                    <MrLink href={routeKeys.forgotPassword}>Forgot password?</MrLink>
                </div>
            )}
            <p className="mt-6 text-center text-gray-600">
                {isSignInMode(authMode) ? "Don’t have an account?" : "Already have an account?"}
                <MrButton
                    variant={buttonVariantKeys.link}
                    onClick={toggleAuthMode}
                    text={getAuthModeToggleLabel(authMode)}
                />
            </p>
        </>
    );
}

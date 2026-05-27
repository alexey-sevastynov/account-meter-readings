import { Button } from "@/shared/ui/button/Button";
import { buttonVariantKeys } from "@/shared/ui/button/button-variant-keys";
import { VoidFuncNoParam } from "@/shared/types/getter-setter-functions";
import { Link } from "@/shared/ui/link/Link";
import { routeKeys } from "@/shared/constants/route-keys";
import { AuthModeKey } from "@/modules/auth/enums/auth-mode-key";
import { getAuthModeToggleLabel } from "@/modules/auth/components/auth-form/auth-form-actions/authFormActions.funcs";
import { isSignInMode } from "@/modules/auth/components/auth-form/AuthForm.funcs";

interface AuthFormActionsProps {
    authMode: AuthModeKey;
    toggleAuthMode: VoidFuncNoParam;
}

export function AuthFormActions({ authMode, toggleAuthMode }: AuthFormActionsProps) {
    return (
        <>
            {isSignInMode(authMode) && (
                <div className="mt-2 text-right">
                    <Link href={routeKeys.forgotPassword}>Забули пароль?</Link>
                </div>
            )}

            <p className="mt-8 text-center">
                {isSignInMode(authMode) ? "Не маєте облікового запису?" : "Вже маєте обліковий запис?"}
                <Button
                    className="w-full"
                    variant={buttonVariantKeys.link}
                    onClick={toggleAuthMode}
                    text={getAuthModeToggleLabel(authMode)}
                />
            </p>
        </>
    );
}

import { Button } from "@/shared/ui/button/Button";
import { Text } from "@/shared/ui/typography/text/Text";
import { buttonVariantKeys } from "@/shared/ui/button/button-variant-keys";
import { VoidFuncNoParam } from "@/shared/types/getter-setter-functions";
import { AuthModeKey } from "@/modules/auth/enums/auth-mode-key";
import { getAuthModeToggleLabel } from "@/modules/auth/components/auth-form/auth-form-actions/authFormActions.funcs";
import { isSignInMode } from "@/modules/auth/components/auth-form/AuthForm.funcs";

interface AuthFormActionsProps {
    authMode: AuthModeKey;
    toggleAuthMode: VoidFuncNoParam;
}

export function AuthFormActions({ authMode, toggleAuthMode }: AuthFormActionsProps) {
    return (
        <div className="mt-8 flex items-center justify-around">
            <Text className="whitespace-nowrap">
                {isSignInMode(authMode) ? "Не маєте облікового запису?" : "Вже маєте обліковий запис?"}
            </Text>

            <Button
                className="w-full"
                variant={buttonVariantKeys.link}
                onClick={toggleAuthMode}
                text={getAuthModeToggleLabel(authMode)}
            />
        </div>
    );
}

import { AuthModeKey } from "@/components/auth/enums/auth-mode-key";
import { getAuthModeLabel } from "@/components/auth/auth-form/AuthForm.funcs";

interface MrAuthFormHeaderProps {
    authMode: AuthModeKey;
}

export function MrAuthFormHeader({ authMode }: MrAuthFormHeaderProps) {
    return (
        <h2 className="text-2xl font-bold text-center text-gray-800 tracking-tight leading-snug">
            {getAuthModeLabel(authMode)}
        </h2>
    );
}

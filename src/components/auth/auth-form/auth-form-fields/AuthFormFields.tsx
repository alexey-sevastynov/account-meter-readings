import { MRInput } from "@/components/ui/input/Input";
import { AuthModeKey } from "@/components/auth/enums/auth-mode-key";
import { isSignUpMode } from "@/components/auth/auth-form/AuthForm.funcs";

interface MrAuthFormFieldsProps {
    authMode: AuthModeKey;
}

export function MrAuthFormFields({ authMode }: MrAuthFormFieldsProps) {
    return (
        <>
            {isSignUpMode(authMode) && <MRInput type="text" label="User name" className="w-full" />}
            <MRInput type="email" label="Email" className="w-full" />
            <MRInput type="password" label="Password" className="w-full" />
            {isSignUpMode(authMode) && (
                <MRInput type="password" label="Confirm Password" className="w-full" />
            )}
        </>
    );
}

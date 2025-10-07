"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { login } from "@/components/auth/auth-form/auth-form-sign-in/authFormSignIn.funcs";
import { MrButton } from "@/components/ui/button/Button";
import { useAppDispatch } from "@/hooks/use-app-dispatch";
import { useAppSelector } from "@/hooks/use-app-selector";
import { MrNotificationMessage } from "@/components/ui/notification-message/notification-message";
import { notificationMessageKeys } from "@/enums/ui/notification-message-key";
import { MrValidatedInput } from "@/components/shared/validated-input/ValidatedInput";
import { SignInFormValues } from "@/components/auth/types/sign-in-form-values";
import { MrPasswordInput } from "@/components/shared/password-input/PasswordInput";
import { redirectToHome } from "@/utils/navigation";
import { timing } from "@/constants/timing";

export function MrAuthFormSignIn() {
    const dispatch = useAppDispatch();
    const router = useRouter();
    const errorMessage = useAppSelector((state) => state.auth.error);
    const isLoading = useAppSelector((state) => state.auth.isLoading);

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<SignInFormValues>();

    const onSubmit = async (data: SignInFormValues) => {
        const response = await login(dispatch, data);

        if (response.meta.requestStatus === "fulfilled") {
            // TODO: Temporarily added a delay before redirecting
            // to ensure cookies are saved and middleware works correctly.
            // This should be properly handled later via server-side redirect
            // or guaranteed cookie setting.
            await new Promise((resolve) => setTimeout(resolve, timing.fiveSecondsInMilliseconds));

            redirectToHome(router);
        }
    };

    return (
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <MrValidatedInput
                name="email"
                control={control}
                errors={errors}
                label="Email"
                type="email"
                rules={{ required: "Email is required" }}
                placeholder="johndoe@example.com"
            />

            <MrPasswordInput name="password" control={control} errors={errors} />

            {errorMessage?.message && (
                <MrNotificationMessage message={errorMessage.message} type={notificationMessageKeys.error} />
            )}

            <MrButton
                text="Sign In"
                type="submit"
                className="w-full flex items-center justify-center space-x-2"
                loading={isLoading}
            />
        </form>
    );
}

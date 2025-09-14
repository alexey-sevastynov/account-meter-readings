"use client";

import { useForm } from "react-hook-form";
import { login } from "@/components/auth/auth-form/auth-form-sign-in/authFormSignIn.funcs";
import { MrButton } from "@/components/ui/button/Button";
import { useAppDispatch } from "@/hooks/use-app-dispatch";
import { useAppSelector } from "@/hooks/use-app-selector";
import { MrNotificationMessage } from "@/components/ui/notification-message/notification-message";
import { notificationMessageKeys } from "@/enums/ui/notification-message-key";
import { MrValidatedInput } from "@/components/shared/validated-input/ValidatedInput";
import { SignInFormValues } from "@/components/auth/types/sign-in-form-values";

export function MrAuthFormSignIn() {
    const dispatch = useAppDispatch();
    const errorMessage = useAppSelector((state) => state.auth.error);
    const isLoading = useAppSelector((state) => state.auth.isLoading);

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<SignInFormValues>();

    const onSubmit = (data: SignInFormValues) => {
        login(dispatch, data);
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
            />

            <MrValidatedInput
                name="password"
                control={control}
                errors={errors}
                label="Password"
                type="password"
                rules={{ required: "Password is required", minLength: { value: 8, message: "Min length 8" } }}
            />

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

"use client";

import { useForm } from "react-hook-form";
import { MrButton } from "@/components/ui/button/Button";
import { register } from "@/components/auth/auth-form/auth-form-sign-up/authFormSignUp.funcs";
import { useAppDispatch } from "@/hooks/use-app-dispatch";
import { useAppSelector } from "@/hooks/use-app-selector";
import { MrValidatedInput } from "@/components/shared/validated-input/ValidatedInput";
import { MrNotificationMessage } from "@/components/ui/notification-message/notification-message";
import { notificationMessageKeys } from "@/enums/ui/notification-message-key";
import { SignUpFormValues } from "@/components/auth/types/sign-up-form-values";
import { MrPasswordInput } from "@/components/shared/password-input/PasswordInput";

export function MrAuthFormSignUp() {
    const dispatch = useAppDispatch();
    const errorMessage = useAppSelector((state) => state.auth.error);
    const token = useAppSelector((state) => state.auth.token);
    const isLoading = useAppSelector((state) => state.auth.isLoading);

    const {
        control,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<SignUpFormValues>();
    const password = watch("password");

    const onSubmit = (data: SignUpFormValues) => {
        register(dispatch, data);
    };

    return (
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <MrValidatedInput
                name="userName"
                control={control}
                errors={errors}
                label="User Name"
                type="text"
                rules={{ required: "User name is required" }}
                placeholder="Your name"
            />
            <MrValidatedInput
                name="email"
                control={control}
                errors={errors}
                label="Email"
                type="email"
                rules={{ required: "Email is required" }}
                placeholder="your@email.com"
            />
            <MrPasswordInput name="password" control={control} errors={errors} />
            <MrPasswordInput
                name="confirmPassword"
                control={control}
                errors={errors}
                label="Confirm Password"
                rules={{
                    required: "Confirm your password",
                    validate: (value: string) => value === password || "Passwords do not match",
                }}
            />
            {errorMessage?.message && (
                <MrNotificationMessage message={errorMessage.message} type={notificationMessageKeys.error} />
            )}
            {token && !errorMessage && (
                <MrNotificationMessage
                    message="Registration successful! Please check your email to confirm your account."
                    type={notificationMessageKeys.info}
                    autoClose={0}
                />
            )}

            <MrButton text="Sign Up" type="submit" className="w-full" loading={isLoading} />
        </form>
    );
}

"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { MrButton } from "@/components/ui/button/Button";
import { MrTitle } from "@/components/ui/title/Title";
import { MrPasswordInput } from "@/components/shared/password-input/PasswordInput";
import { buttonVariantKeys } from "@/enums/ui/button-variant-key";
import { redirectTo } from "@/utils/navigation";
import { NotificationMessageKey } from "@/enums/ui/notification-message-key";
import { MrNotificationMessage } from "@/components/ui/notification-message/notification-message";
import {
    isNotificationSuccess,
    sendResetPassword,
} from "@/components/auth/reset-password/resetPassword.funcs";
import { routeKeys } from "@/enums/url/route-key";

interface FormValues {
    password: string;
    confirmPassword: string;
}

interface MrResetPasswordProps {
    token: string;
}

export function MrResetPassword({ token }: MrResetPasswordProps) {
    const {
        control,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<FormValues>();
    const password = watch("password");
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState("");
    const [notificationTypeMessage, setNotificationTypeMessage] = useState<NotificationMessageKey>();

    const onSubmit = async (data: FormValues) => {
        if (data.password !== data.confirmPassword) return;

        await sendResetPassword(
            { token, newPassword: data.password },
            setNotificationMessage,
            setNotificationTypeMessage,
            setIsLoading,
        );
    };

    const goToSignInPage = () => {
        redirectTo(router, routeKeys.signIn);
    };

    return (
        <>
            <MrTitle className="text-black">Reset Password</MrTitle>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
                {notificationMessage && (
                    <MrNotificationMessage message={notificationMessage} type={notificationTypeMessage} />
                )}
                {isNotificationSuccess(notificationTypeMessage) && (
                    <MrButton
                        text="Go to sign in page"
                        type="button"
                        variant={buttonVariantKeys.outline}
                        onClick={goToSignInPage}
                        className="w-full"
                    />
                )}
                {!isNotificationSuccess(notificationTypeMessage) && (
                    <MrButton
                        text="Send reset link"
                        type="submit"
                        disabled={isLoading}
                        className="flex w-full items-center justify-center space-x-2"
                        loading={isLoading}
                    />
                )}
            </form>
        </>
    );
}

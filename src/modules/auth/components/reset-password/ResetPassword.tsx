"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/shared/ui/button/Button";
import { Title } from "@/shared/ui/typography/title/Title";
import { PasswordInput } from "@/shared/ui/password-input/PasswordInput";
import { buttonVariantKeys } from "@/shared/ui/button/button-variant-keys";
import { redirectTo } from "@/shared/utils/navigation";
import { NotificationMessageKey } from "@/shared/ui/notification-message/notification-message-key";
import { NotificationMessage } from "@/shared/ui/notification-message/notification-message";
import {
    isNotificationSuccess,
    sendResetPassword,
} from "@/modules/auth/components/reset-password/resetPassword.funcs";
import { routeKeys } from "@/shared/constants/route-keys";

interface FormValues {
    password: string;
    confirmPassword: string;
}

interface ResetPasswordProps {
    token: string;
}

export function ResetPassword({ token }: ResetPasswordProps) {
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
            <Title className="text-black">Reset Password</Title>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <PasswordInput name="password" control={control} errors={errors} />
                <PasswordInput
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
                    <NotificationMessage message={notificationMessage} type={notificationTypeMessage} />
                )}
                {isNotificationSuccess(notificationTypeMessage) && (
                    <Button
                        text="Go to sign in page"
                        type="button"
                        variant={buttonVariantKeys.outline}
                        onClick={goToSignInPage}
                        className="w-full"
                    />
                )}
                {!isNotificationSuccess(notificationTypeMessage) && (
                    <Button
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

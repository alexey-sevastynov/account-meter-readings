"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { Button } from "@/shared/ui/button/Button";
import { Title } from "@/shared/ui/typography/title/Title";
import { ValidatedInput } from "@/shared/ui/validated-input/ValidatedInput";
import { NotificationMessage } from "@/shared/ui/notification-message/notification-message";
import { NotificationMessageKey } from "@/shared/ui/notification-message/notification-message-key";
import { buttonVariantKeys } from "@/shared/ui/button/button-variant-keys";
import { useRouter } from "next/navigation";
import { redirectTo } from "@/shared/utils/navigation";
import { sendResetRequest } from "@/modules/auth/components/forgot-password/authForgotPassword.funcs";
import { routeKeys } from "@/shared/constants/route-keys";

interface FormValues {
    email: string;
}

export function ForgotPassword() {
    const router = useRouter();
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<FormValues>();
    const [isLoading, setIsLoading] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState("");
    const [notificationTypeMessage, setNotificationTypeMessage] = useState<NotificationMessageKey>();

    const onSubmit = async (data: FormValues) => {
        setIsLoading(true);
        setNotificationMessage("");

        await sendResetRequest(data, setNotificationMessage, setNotificationTypeMessage, setIsLoading);
    };

    const goToSignInPage = () => {
        redirectTo(router, routeKeys.signIn);
    };

    return (
        <>
            <Title className="text-black">Forgot Password</Title>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <ValidatedInput
                    name="email"
                    control={control}
                    errors={errors}
                    label="Email"
                    type="email"
                    rules={{ required: "Email is required" }}
                    placeholder="johndoe@email.com"
                />
                {notificationMessage && (
                    <NotificationMessage message={notificationMessage} type={notificationTypeMessage} />
                )}
                <div className="flex gap-3">
                    <Button
                        text="Cancel"
                        type="button"
                        variant={buttonVariantKeys.outline}
                        onClick={goToSignInPage}
                        className="w-full"
                    />
                    <Button
                        text="Send reset link"
                        type="submit"
                        disabled={isLoading}
                        className="flex w-full items-center justify-center space-x-2"
                        loading={isLoading}
                    />
                </div>
            </form>
        </>
    );
}

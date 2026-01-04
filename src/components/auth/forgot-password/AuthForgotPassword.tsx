"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { MrButton } from "@/components/ui/button/Button";
import { MrTitle } from "@/components/ui/title/Title";
import { MrValidatedInput } from "@/components/shared/validated-input/ValidatedInput";
import { MrNotificationMessage } from "@/components/ui/notification-message/notification-message";
import { NotificationMessageKey } from "@/enums/ui/notification-message-key";
import { buttonVariantKeys } from "@/enums/ui/button-variant-key";
import { useRouter } from "next/navigation";
import { redirectToSignIn } from "@/utils/navigation";
import { sendResetRequest } from "@/components/auth/forgot-password/authForgotPassword.funcs";
import MrAuthLayout from "@/components/auth/auth-layout/AuthLayout";

interface FormValues {
    email: string;
}

export function MrForgotPassword() {
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
        redirectToSignIn(router);
    };

    return (
        <MrAuthLayout>
            <MrTitle className="text-black">Forgot Password</MrTitle>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <MrValidatedInput
                    name="email"
                    control={control}
                    errors={errors}
                    label="Email"
                    type="email"
                    rules={{ required: "Email is required" }}
                    placeholder="johndoe@email.com"
                />
                {notificationMessage && (
                    <MrNotificationMessage message={notificationMessage} type={notificationTypeMessage} />
                )}
                <div className="flex gap-3">
                    <MrButton
                        text="Cancel"
                        type="button"
                        variant={buttonVariantKeys.outline}
                        onClick={goToSignInPage}
                        className="w-full"
                    />
                    <MrButton
                        text="Send reset link"
                        type="submit"
                        disabled={isLoading}
                        className="flex w-full items-center justify-center space-x-2"
                        loading={isLoading}
                    />
                </div>
            </form>
        </MrAuthLayout>
    );
}

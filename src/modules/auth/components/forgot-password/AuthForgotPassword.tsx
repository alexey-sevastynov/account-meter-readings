"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { MrButton } from "@/shared/ui/button/Button";
import { MrTitle } from "@/shared/ui/typography/title/Title";
import { MrValidatedInput } from "@/shared/ui/validated-input/ValidatedInput";
import { MrNotificationMessage } from "@/shared/ui/notification-message/notification-message";
import { NotificationMessageKey } from "@/shared/ui/notification-message/notification-message-key";
import { buttonVariantKeys } from "@/shared/ui/button/button-variant-keys";
import { useRouter } from "next/navigation";
import { redirectTo } from "@/shared/utils/navigation";
import { sendResetRequest } from "@/modules/auth/components/forgot-password/authForgotPassword.funcs";
import { routeKeys } from "@/shared/constants/route-keys";

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
        redirectTo(router, routeKeys.signIn);
    };

    return (
        <>
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
        </>
    );
}

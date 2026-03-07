"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Button } from "@/shared/ui/button/Button";
import { useAppDispatch } from "@/shared/lib/redux/hooks/use-app-dispatch";
import { useAppSelector } from "@/shared/lib/redux/hooks/use-app-selector";
import { NotificationMessage } from "@/shared/ui/notification-message/notification-message";
import { notificationMessageKeys } from "@/shared/ui/notification-message/notification-message-key";
import { ValidatedInput } from "@/shared/ui/validated-input/ValidatedInput";
import { PasswordInput } from "@/shared/ui/password-input/PasswordInput";
import { redirectTo } from "@/shared/utils/navigation";
import { timing } from "@/shared/constants/timing";
import { buttonVariantKeys } from "@/shared/ui/button/button-variant-keys";
import { Divider } from "@/shared/ui/divider/Divider";
import { routeKeys } from "@/shared/constants/route-keys";
import { SignInFormValues } from "@/modules/auth/types/sign-in-form-values";
import { login } from "@/modules/auth/components/auth-form/auth-form-sign-in/authFormSignIn.funcs";
import { signInAsGuest } from "@/modules/auth/model/thunks";

export function AuthFormSignIn() {
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

            redirectTo(router, routeKeys.home);
        }
    };

    const onGuestLogin = async () => {
        const response = await dispatch(signInAsGuest());

        if (response.meta.requestStatus === "fulfilled") {
            redirectTo(router, routeKeys.home);
        }
    };

    return (
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <ValidatedInput
                name="email"
                control={control}
                errors={errors}
                label="Email"
                type="email"
                rules={{ required: "Email is required" }}
                placeholder="johndoe@example.com"
            />

            <PasswordInput name="password" control={control} errors={errors} />

            {errorMessage?.message && (
                <NotificationMessage message={errorMessage.message} type={notificationMessageKeys.error} />
            )}

            <div>
                <Button
                    text="Sign In"
                    type="submit"
                    className="flex w-full items-center justify-center space-x-2"
                    loading={isLoading}
                />

                <Divider text="OR" className="py-2" />

                <Button
                    text="Continue as Guest"
                    variant={buttonVariantKeys.outline}
                    type="button"
                    className="flex w-full items-center justify-center space-x-2"
                    onClick={onGuestLogin}
                    loading={isLoading}
                />
            </div>
        </form>
    );
}

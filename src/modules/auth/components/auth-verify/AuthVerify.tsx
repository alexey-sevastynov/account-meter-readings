"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { VerifyStatusKey, verifyStatusKeys } from "@/modules/auth/enums/verify-status-key";
import { getInitialVerifyStatus, verifyEmail } from "@/modules/auth/components/auth-verify/authVerify.funcs";
import { Button } from "@/shared/ui/button/Button";
import { redirectTo } from "@/shared/utils/navigation";
import { routeKeys } from "@/shared/constants/route-keys";

interface AuthVerifyProps {
    token?: string;
}

export default function AuthVerify({ token }: AuthVerifyProps) {
    const router = useRouter();
    const [status, setStatus] = useState<VerifyStatusKey>(getInitialVerifyStatus(token));

    useEffect(() => {
        if (!token) return;

        (async () => {
            try {
                const result = await verifyEmail(token);
                setStatus(result);
            } catch {
                setStatus(verifyStatusKeys.error);
            }
        })();
    }, [token]);

    const goToHomePage = () => {
        redirectTo(router, routeKeys.home);
    };

    return (
        <>
            {status === verifyStatusKeys.pending && (
                <div className="flex flex-col items-center space-y-4">
                    <p className="text-gray-600">Верифікація вашої електронної пошти...</p>
                </div>
            )}

            {status === verifyStatusKeys.success && (
                <div className="flex flex-col items-center space-y-6">
                    <div className="text-5xl">🎉</div>
                    <p className="text-xl font-semibold text-green-600">
                        Електронна пошта успішно верифікована!
                    </p>
                    <Button text="Головна сторінка" onClick={goToHomePage} />
                </div>
            )}

            {status === verifyStatusKeys.error && (
                <div className="flex flex-col items-center space-y-6">
                    <div className="text-5xl">⚠️</div>
                    <p className="text-xl font-semibold text-red-600">
                        Помилка верифікації електронної пошти
                    </p>
                    <Button text="Головна сторінка" onClick={goToHomePage} />
                </div>
            )}
        </>
    );
}

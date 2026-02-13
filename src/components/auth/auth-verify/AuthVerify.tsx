"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { VerifyStatusKey, verifyStatusKeys } from "@/components/auth/enums/verify-status-key";
import { getInitialVerifyStatus, verifyEmail } from "@/components/auth/auth-verify/authVerify.funcs";
import { MrButton } from "@/components/ui/button/Button";
import { redirectTo } from "@/utils/navigation";
import { routeKeys } from "@/enums/url/route-key";

interface MrAuthVerifyProps {
    token?: string;
}

export default function MrAuthVerify({ token }: MrAuthVerifyProps) {
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
                    <p className="text-gray-600">Verifying your email...</p>
                </div>
            )}

            {status === verifyStatusKeys.success && (
                <div className="flex flex-col items-center space-y-6">
                    <div className="text-5xl">🎉</div>
                    <p className="text-xl font-semibold text-green-600">Mail successfully verified!</p>
                    <MrButton text="Move to Home page" onClick={goToHomePage} />
                </div>
            )}

            {status === verifyStatusKeys.error && (
                <div className="flex flex-col items-center space-y-6">
                    <div className="text-5xl">⚠️</div>
                    <p className="text-xl font-semibold text-red-600">Mail verification error</p>
                    <MrButton text="Move to Home page" onClick={goToHomePage} />
                </div>
            )}
        </>
    );
}

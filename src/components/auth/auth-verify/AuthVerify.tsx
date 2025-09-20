"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { VerifyStatusKey, verifyStatusKeys } from "@/components/auth/enums/verify-status-key";
import { verifyEmail } from "@/components/auth/auth-verify/authVerify.funcs";
import { MrButton } from "@/components/ui/button/Button";
import { buildRoutePath } from "@/utils/build-route-path";
import { routeKeys } from "@/enums/url/route-key";

interface MrAuthVerifyProps {
    token: string;
}

export default function MrAuthVerify({ token }: MrAuthVerifyProps) {
    const router = useRouter();
    const [status, setStatus] = useState<VerifyStatusKey>(verifyStatusKeys.pending);

    useEffect(() => {
        if (!token) return setStatus(verifyStatusKeys.error);

        (async () => {
            try {
                const result = await verifyEmail(token);
                setStatus(result);
            } catch {
                setStatus(verifyStatusKeys.error);
            }
        })();
    }, [token]);

    const handleRedirect = () => {
        router.push(buildRoutePath(routeKeys.home));
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
            <div className="max-w-md w-full bg-white shadow-xl rounded-2xl p-8 text-center">
                {status === verifyStatusKeys.pending && (
                    <div className="flex flex-col items-center space-y-4">
                        <p className="text-gray-600">Verifying your email...</p>
                    </div>
                )}

                {status === verifyStatusKeys.success && (
                    <div className="flex flex-col items-center space-y-6">
                        <div className="text-5xl">🎉</div>
                        <p className="text-xl font-semibold text-green-600">Mail successfully verified!</p>
                        <MrButton text="Move to Home page" onClick={handleRedirect} />
                    </div>
                )}

                {status === verifyStatusKeys.error && (
                    <div className="flex flex-col items-center space-y-6">
                        <div className="text-5xl">⚠️</div>
                        <p className="text-xl font-semibold text-red-600">Mail verification error</p>
                        <MrButton text="Move to Home page" onClick={handleRedirect} />
                    </div>
                )}
            </div>
        </div>
    );
}

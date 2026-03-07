"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/shared/lib/redux/hooks/use-app-selector";
import { redirectTo } from "@/shared/utils/navigation";
import { routeKeys } from "@/shared/constants/route-keys";
import { AuthForm } from "@/modules/auth/components/auth-form/AuthForm";

export default function SignInPage() {
    const router = useRouter();
    const token = useAppSelector((state) => state.auth.token);

    useEffect(() => {
        if (token) {
            redirectTo(router, routeKeys.home);
        }
    }, [token, router]);

    return <AuthForm />;
}

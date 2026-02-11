"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/hooks/use-app-selector";
import { MrAuthForm } from "@/components/auth/auth-form/AuthForm";
import { redirectTo } from "@/utils/navigation";
import { routeKeys } from "@/enums/url/route-key";

export default function SignInPage() {
    const router = useRouter();
    const token = useAppSelector((state) => state.auth.token);

    useEffect(() => {
        if (token) {
            redirectTo(router, routeKeys.home);
        }
    }, [token, router]);

    return <MrAuthForm />;
}

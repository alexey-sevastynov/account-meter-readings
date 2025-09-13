"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/hooks/use-app-selector";
import { MrAuthForm } from "@/components/auth/auth-form/AuthForm";
import { routeKeys } from "@/enums/url/route-key";
import { buildRoutePath } from "@/utils/build-route-path";

export default function AuthPage() {
    const router = useRouter();
    const token = useAppSelector((state) => state.auth.token);

    useEffect(() => {
        if (token) {
            const routePath = buildRoutePath(routeKeys.home);
            router.replace(routePath);
        }
    }, [token, router]);

    return <MrAuthForm />;
}

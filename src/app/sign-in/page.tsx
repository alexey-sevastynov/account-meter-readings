"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/hooks/use-app-selector";
import { MrAuthForm } from "@/components/auth/auth-form/AuthForm";
import { redirectToHome } from "@/utils/navigation";

export default function SignInPage() {
    const router = useRouter();
    const token = useAppSelector((state) => state.auth.token);

    useEffect(() => {
        if (token) {
            redirectToHome(router);
        }
    }, [token, router]);

    return <MrAuthForm />;
}

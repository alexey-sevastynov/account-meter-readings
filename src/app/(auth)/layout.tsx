"use server";

import { AuthLayout } from "@/shared/layout/auth-layout/AuthLayout";

interface AuthLayoutProps {
    children: React.ReactNode;
}

export default async function Layout({ children }: AuthLayoutProps) {
    return <AuthLayout>{children}</AuthLayout>;
}

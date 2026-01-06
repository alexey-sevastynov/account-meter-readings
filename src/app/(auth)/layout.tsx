"use server";

import MrAuthLayout from "@/components/layout/auth-layout/AuthLayout";

interface AuthLayoutProps {
    children: React.ReactNode;
}

export default async function AuthLayout({ children }: AuthLayoutProps) {
    return <MrAuthLayout>{children}</MrAuthLayout>;
}

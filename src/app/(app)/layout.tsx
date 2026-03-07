"use server";

import { AppLayout } from "@/shared/layout/app-layout/AppLayout";

interface AppLayoutProps {
    children: React.ReactNode;
}

export default async function Layout({ children }: AppLayoutProps) {
    return <AppLayout>{children}</AppLayout>;
}

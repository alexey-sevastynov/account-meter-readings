"use server";

import { MrAppLayout } from "@/shared/layout/app-layout/AppLayout";

interface AppLayoutProps {
    children: React.ReactNode;
}

export default async function AppLayout({ children }: AppLayoutProps) {
    return <MrAppLayout>{children}</MrAppLayout>;
}

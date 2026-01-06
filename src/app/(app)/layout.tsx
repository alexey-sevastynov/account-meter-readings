"use server";

import { MrAppLayout } from "@/components/layout/app-layout/AppLayout";

interface AppLayoutProps {
    children: React.ReactNode;
}

export default async function AppLayout({ children }: AppLayoutProps) {
    return <MrAppLayout>{children}</MrAppLayout>;
}

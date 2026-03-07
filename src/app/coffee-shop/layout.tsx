"use server";

import { CoffeeShopLayout } from "@/shared/layout/coffee-shop-layout/CoffeeShopLayout";

interface CoffeeShopLayoutProps {
    children: React.ReactNode;
}

export default async function Layout({ children }: CoffeeShopLayoutProps) {
    return <CoffeeShopLayout>{children}</CoffeeShopLayout>;
}

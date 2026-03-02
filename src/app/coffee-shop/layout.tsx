"use server";

import { MrCoffeeShopLayout } from "@/shared/layout/coffee-shop-layout/CoffeeShopLayout";

interface CoffeeShopLayoutProps {
    children: React.ReactNode;
}

export default async function CoffeeShopLayout({ children }: CoffeeShopLayoutProps) {
    return <MrCoffeeShopLayout>{children}</MrCoffeeShopLayout>;
}

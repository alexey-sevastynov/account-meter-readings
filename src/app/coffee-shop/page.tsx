"use server";

import { CoffeeShop } from "@/components/coffee-shop/CoffeeShop";
import { MrText } from "@/components/ui/text/Text";
import { isDev } from "@/lib/environments";

export default async function CoffeeShopPage() {
    // TODO: Remove development mode check.
    if (!isDev()) {
        return <MrText className="p-4">This page is only available in development mode.</MrText>;
    } else {
        return <CoffeeShop />;
    }
}

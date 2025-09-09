"use client";

import { store } from "@/app/store";
import { Provider } from "react-redux";

interface MrProvidersProps {
    children: React.ReactNode;
}

export function MrProviders({ children }: MrProvidersProps) {
    return <Provider store={store}>{children}</Provider>;
}

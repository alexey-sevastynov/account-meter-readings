"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/hooks/use-app-dispatch";
import { MrButton } from "@/components/ui/button/Button";
import { signOut } from "@/features/auth/slice";
import { redirectTo } from "@/utils/navigation";
import { useTheme } from "@/components/providers/theme-provider/ThemeProvider";
import { MrTitle } from "@/components/ui/title/Title";
import { MrText } from "@/components/ui/text/Text";
import { themeModes } from "@/enums/theme-mode";
import { buttonVariantKeys } from "@/enums/ui/button-variant-key";
import { routeKeys } from "@/enums/url/route-key";

interface MrHomeProps {
    userName?: string;
}

export function MrHome({ userName }: MrHomeProps) {
    const router = useRouter();
    const theme = useTheme();
    const dispatch = useAppDispatch();

    const [clientTheme, setClientTheme] = useState<string | null>(null);

    useEffect(() => {
        // TODO: Temporarily setting state inside useEffect to synchronize client theme
        // with server-rendered content. This avoids hydration mismatch errors in Next.js.
        // In the future, refactor this to eliminate useEffect and setState to prevent
        // cascading renders and properly handle client/server theme without workarounds.

        // eslint-disable-next-line react-hooks/set-state-in-effect
        setClientTheme(theme.currentTheme);
    }, [theme.currentTheme]);

    const onLogout = () => {
        dispatch(signOut());
        redirectTo(router, routeKeys.signIn);
    };

    return (
        <div className="flex flex-col">
            <div className="flex w-full max-w-md flex-col items-center rounded-2xl p-8">
                <MrTitle>Welcome to Home, {userName ? userName : "Guest"}!</MrTitle>
                <MrText>You are successfully logged in.</MrText>

                <div className="flex w-full flex-col space-y-4">
                    <div className="flex flex-col space-y-3">
                        <div className="flex items-center justify-between">
                            <MrText>
                                Current theme:
                                <span className="font-semibold capitalize">{clientTheme}</span>
                            </MrText>
                        </div>

                        <div className="flex space-x-2">
                            <MrButton text="Light" onClick={() => theme.setTheme(themeModes.light)} />
                            <MrButton text="Dark" onClick={() => theme.setTheme(themeModes.dark)} />
                            <MrButton text="System" onClick={() => theme.setTheme(themeModes.system)} />
                        </div>
                    </div>

                    <MrButton text="Logout" onClick={onLogout} variant={buttonVariantKeys.danger} />
                </div>
            </div>
        </div>
    );
}

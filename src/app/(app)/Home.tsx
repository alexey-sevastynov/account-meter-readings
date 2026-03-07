"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/shared/lib/redux/hooks/use-app-dispatch";
import { Button } from "@/shared/ui/button/Button";
import { redirectTo } from "@/shared/utils/navigation";
import { useTheme } from "@/shared/context/theme-provider/ThemeProvider";
import { Title } from "@/shared/ui/typography/title/Title";
import { Text } from "@/shared/ui/typography/text/Text";
import { themeModes } from "@/shared/context/theme-provider/theme-mode";
import { buttonVariantKeys } from "@/shared/ui/button/button-variant-keys";
import { routeKeys } from "@/shared/constants/route-keys";
import { signOut } from "@/modules/auth/model/slice";

interface HomeProps {
    userName?: string;
}

export function Home({ userName }: HomeProps) {
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
                <Title>Welcome to Home, {userName ? userName : "Guest"}!</Title>
                <Text>You are successfully logged in.</Text>

                <div className="flex w-full flex-col space-y-4">
                    <div className="flex flex-col space-y-3">
                        <div className="flex items-center justify-between">
                            <Text>
                                Current theme:
                                <span className="font-semibold capitalize">{clientTheme}</span>
                            </Text>
                        </div>

                        <div className="flex space-x-2">
                            <Button text="Light" onClick={() => theme.setTheme(themeModes.light)} />
                            <Button text="Dark" onClick={() => theme.setTheme(themeModes.dark)} />
                            <Button text="System" onClick={() => theme.setTheme(themeModes.system)} />
                        </div>
                    </div>

                    <Button text="Logout" onClick={onLogout} variant={buttonVariantKeys.danger} />
                </div>
            </div>
        </div>
    );
}

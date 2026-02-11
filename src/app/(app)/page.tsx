"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAppDispatch } from "@/hooks/use-app-dispatch";
import { MrButton } from "@/components/ui/button/Button";
import { signOut } from "@/features/auth/slice";
import { getCookie } from "@/utils/cookie/cookies";
import { cookieKeys } from "@/utils/cookie/cookie-key";
import { redirectTo } from "@/utils/navigation";
import { useTheme } from "@/components/providers/theme-provider/ThemeProvider";
import { MrTitle } from "@/components/ui/title/Title";
import { MrText } from "@/components/ui/text/Text";
import { themeModes } from "@/enums/theme-mode";
import { buttonVariantKeys } from "@/enums/ui/button-variant-key";
import { routeKeys } from "@/enums/url/route-key";

export default function HomePage() {
    const router = useRouter();
    const dispatch = useAppDispatch();

    const [userName, setUserName] = useState<string>();
    const theme = useTheme();

    useEffect(() => {
        const name = getCookie(cookieKeys.userName);

        setUserName(name);
    }, []);

    const onLogout = () => {
        dispatch(signOut());
        redirectTo(router, routeKeys.signIn);
    };

    const goToCoffeeShop = () => {
        redirectTo(router, routeKeys.coffeeShop);
    };

    return (
        <div className="flex flex-col">
            <div className="flex w-full max-w-md flex-col items-center rounded-2xl p-8">
                <MrTitle>Welcome to Home, {userName}!</MrTitle>
                <MrText>You are successfully logged in.</MrText>

                <div className="flex w-full flex-col space-y-4">
                    <div className="flex flex-col space-y-3">
                        <div className="flex items-center justify-between">
                            <MrText>
                                Current theme:
                                <span className="font-semibold capitalize">{theme.currentTheme}</span>
                            </MrText>
                        </div>

                        <div className="flex space-x-2">
                            <MrButton text="Light" onClick={() => theme.setTheme(themeModes.light)} />
                            <MrButton text="Dark" onClick={() => theme.setTheme(themeModes.dark)} />
                            <MrButton text="System" onClick={() => theme.setTheme(themeModes.system)} />
                        </div>
                    </div>

                    <MrButton text="Go to Coffee Shop" onClick={goToCoffeeShop} />
                    <MrButton text="Logout" onClick={onLogout} variant={buttonVariantKeys.danger} />
                </div>
            </div>
        </div>
    );
}

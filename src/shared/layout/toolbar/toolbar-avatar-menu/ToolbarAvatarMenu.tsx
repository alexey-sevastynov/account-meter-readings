"use client";

import { useRouter } from "next/navigation";
import { signOut } from "@/modules/auth/model/slice";
import { routeKeys } from "@/shared/constants/route-keys";
import { useAppDispatch } from "@/shared/lib/redux/hooks/use-app-dispatch";
import { useAppSelector } from "@/shared/lib/redux/hooks/use-app-selector";
import { ToolbarAvatarMenuTrigger } from "@/shared/layout/toolbar/toolbar-avatar-menu/ToolbarAvatarMenuTrigger";
import { ToolbarAvatarMenuUserInfo } from "@/shared/layout/toolbar/toolbar-avatar-menu/ToolbarAvatarMenuUserInfo";
import { ToolbarThemeModeSwitcher } from "@/shared/layout/toolbar/toolbar-theme-mode-switcher/ToolbarThemeModeSwitcher";
import { redirectTo } from "@/shared/utils/navigation";
import { Dropdown, DropdownContent, DropdownTrigger } from "@/shared/ui/dropdown/Dropdown";
import { iconNames } from "@/shared/ui/icon/icon-name";
import { Button } from "@/shared/ui/button/Button";
import { buttonVariantKeys } from "@/shared/ui/button/button-variant-keys";

interface ToolbarAvatarMenuProps {
    userName?: string;
    userRole?: string;
}

export function ToolbarAvatarMenu({ userName, userRole }: ToolbarAvatarMenuProps) {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const isUserLoading = useAppSelector((state) => state.auth.isLoading);

    const onLogout = () => {
        dispatch(signOut());
        redirectTo(router, routeKeys.signIn);
    };

    return (
        <div className="ml-auto">
            <Dropdown>
                <DropdownTrigger className="rounded-full focus:outline-none">
                    <ToolbarAvatarMenuTrigger userName={userName} isUserLoading={isUserLoading} />
                </DropdownTrigger>
                <DropdownContent className="right-0 min-w-72 overflow-hidden p-1">
                    <ToolbarAvatarMenuUserInfo
                        userName={userName}
                        userRole={userRole}
                        isUserLoading={isUserLoading}
                    />
                    <ToolbarThemeModeSwitcher />
                    <Button
                        variant={buttonVariantKeys.danger}
                        iconName={iconNames.logOut}
                        className="w-full"
                        text="Вийти"
                        onClick={onLogout}
                    />
                </DropdownContent>
            </Dropdown>
        </div>
    );
}

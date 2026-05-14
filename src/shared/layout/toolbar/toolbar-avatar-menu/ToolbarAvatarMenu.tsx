"use client";

import { useRouter } from "next/navigation";
import { signOut } from "@/modules/auth/model/slice";
import { routeKeys } from "@/shared/constants/route-keys";
import { useAppDispatch } from "@/shared/lib/redux/hooks/use-app-dispatch";
import { useAppSelector } from "@/shared/lib/redux/hooks/use-app-selector";
import { cn } from "@/shared/lib/cn";
import { ToolbarThemeModeSwitcher } from "@/shared/layout/toolbar/toolbar-theme-mode-switcher/ToolbarThemeModeSwitcher";
import { redirectTo } from "@/shared/utils/navigation";
import { Avatar } from "@/shared/ui/avatar/Avatar";
import { Dropdown, DropdownContent, DropdownItem, DropdownTrigger } from "@/shared/ui/dropdown/Dropdown";
import { Icon } from "@/shared/ui/icon/Icon";
import { iconColors } from "@/shared/ui/icon/icon-color";
import { iconNames } from "@/shared/ui/icon/icon-name";
import { iconSizes } from "@/shared/ui/icon/icon-size";
import { LoadingIndicator } from "@/shared/ui/loading-indicator/LoadingIndicator";

interface ToolbarAvatarMenuProps {
    userName?: string;
    userRole?: string;
}

export function ToolbarAvatarMenu({ userName, userRole }: ToolbarAvatarMenuProps) {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const authLoading = useAppSelector((state) => state.auth.isLoading);
    const isUserLoading = authLoading;

    const onLogout = () => {
        dispatch(signOut());
        redirectTo(router, routeKeys.signIn);
    };

    return (
        <div className="ml-auto">
            <Dropdown>
                <DropdownTrigger className="rounded-full focus:outline-none">
                    <div className="flex min-h-10 items-center gap-3 rounded-full border border-white/10 bg-white/5 px-2 py-1 transition-colors hover:bg-white/10">
                        <div className="hidden min-w-0 text-right sm:block">
                            {isUserLoading ? (
                                <LoadingIndicator className="text-sidebar-foreground [&>svg]:text-sidebar-foreground justify-end" />
                            ) : (
                                <p className="text-sidebar-foreground max-w-40 truncate text-sm font-medium">
                                    {userName}
                                </p>
                            )}
                        </div>

                        {isUserLoading ? (
                            <div className="flex h-8 w-8 items-center justify-center rounded-full ring-1 ring-white/10">
                                <LoadingIndicator className="text-sidebar-foreground [&>svg]:text-sidebar-foreground [&>svg]:h-3.5 [&>svg]:w-3.5" />
                            </div>
                        ) : (
                            <Avatar name={userName ?? undefined} size="sm" className="ring-1 ring-white/10" />
                        )}
                    </div>
                </DropdownTrigger>

                <DropdownContent className="right-0 min-w-56 overflow-hidden p-1">
                    <div className="border-border mb-1 border-b px-3 py-2">
                        {isUserLoading ? (
                            <LoadingIndicator text="" className="text-foreground [&>svg]:text-foreground" />
                        ) : (
                            <p className="text-foreground truncate text-sm font-medium">{userName}</p>
                        )}
                        <p className="text-muted-foreground text-xs">{userRole}</p>
                    </div>

                    <ToolbarThemeModeSwitcher />

                    <DropdownItem
                        onSelect={onLogout}
                        className={cn(
                            "text-destructive hover:bg-destructive/10 focus:bg-destructive/10",
                            "flex items-center gap-2 rounded-md",
                        )}
                    >
                        <Icon name={iconNames.logOut} color={iconColors.destructive} size={iconSizes.small} />
                        <span>Вийти</span>
                    </DropdownItem>
                </DropdownContent>
            </Dropdown>
        </div>
    );
}

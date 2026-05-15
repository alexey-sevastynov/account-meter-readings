import { Avatar } from "@/shared/ui/avatar/Avatar";
import { LoadingIndicator } from "@/shared/ui/loading-indicator/LoadingIndicator";
import { Text } from "@/shared/ui/typography/text/Text";

interface ToolbarAvatarMenuTriggerProps {
    isUserLoading: boolean;
    userName?: string;
}

export function ToolbarAvatarMenuTrigger({ userName, isUserLoading }: ToolbarAvatarMenuTriggerProps) {
    return (
        <div className="flex min-h-10 items-center gap-3 rounded-full border border-white/10 bg-white/5 px-2 py-1 transition-colors hover:bg-white/10">
            <div className="hidden min-w-0 text-right sm:block">
                {isUserLoading ? (
                    <LoadingIndicator className="text-sidebar-foreground [&>svg]:text-sidebar-foreground justify-end" />
                ) : (
                    <Text>{userName}</Text>
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
    );
}

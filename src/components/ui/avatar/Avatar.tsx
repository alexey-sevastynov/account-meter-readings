"use client";

import { cn } from "@/lib/cn";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { getAvatarInitials } from "@/components/ui/avatar/avatar.funcs";

interface MrAvatarProps {
    name?: string;
    src?: string;
    size?: "sm" | "md" | "lg";
    className?: string;
}

const avatarSizeMap = {
    sm: "h-8 w-8 text-xs",
    md: "h-10 w-10 text-sm",
    lg: "h-14 w-14 text-base",
} as const;

export function MrAvatar({ name, src, size = "md", className }: MrAvatarProps) {
    return (
        <AvatarPrimitive.Root
            className={cn(
                "relative flex shrink-0 overflow-hidden rounded-full",
                avatarSizeMap[size],
                className,
            )}
        >
            <AvatarPrimitive.Image
                src={src}
                alt={name}
                className="aspect-square h-full w-full object-cover"
            />

            <AvatarPrimitive.Fallback className="flex h-full w-full items-center justify-center rounded-full bg-stone-200 font-medium text-stone-700 dark:bg-stone-700 dark:text-stone-200">
                {getAvatarInitials(name)}
            </AvatarPrimitive.Fallback>
        </AvatarPrimitive.Root>
    );
}

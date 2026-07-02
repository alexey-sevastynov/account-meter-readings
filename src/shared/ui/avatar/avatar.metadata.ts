import { nameOf } from "@/shared/utils/name-of";
import { AvatarProps } from "@/shared/ui/avatar/Avatar";
import { createUiMetadata } from "@/shared/utils/create-ui-metadata";

export const avatarSizes = {
    sm: "sm",
    md: "md",
    lg: "lg",
} as const;

export const avatarPixelSizes = {
    [avatarSizes.sm]: "32px",
    [avatarSizes.md]: "40px",
    [avatarSizes.lg]: "56px",
} as const;

export const avatarPropNames = {
    name: nameOf<AvatarProps>("name"),
    src: nameOf<AvatarProps>("src"),
    size: nameOf<AvatarProps>("size"),
    className: nameOf<AvatarProps>("className"),
} as const;

export const avatarMetadata = createUiMetadata({
    id: "avatar",
    name: "Avatar (Аватар)",
    componentPath: "src/shared/ui/avatar/Avatar.tsx",
    props: {
        [avatarPropNames.name]: {
            type: "string",
            defaultValue: "undefined",
            required: false,
        },
        [avatarPropNames.src]: {
            type: "string",
            defaultValue: "undefined",
            required: false,
        },
        [avatarPropNames.size]: {
            type: Object.keys(avatarSizes)
                .map((k) => `"${k}"`)
                .join(" | "),
            defaultValue: `"${avatarSizes.md}"`,
            required: false,
        },
        [avatarPropNames.className]: {
            type: "string",
            defaultValue: "undefined",
            required: false,
        },
    },
});

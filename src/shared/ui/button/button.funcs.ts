import { buttonVariantKeys } from "@/shared/ui/button/button-variant-keys";
import { IconName } from "@/shared/ui/icon/icon-name";

type ButtonVariantKey = (typeof buttonVariantKeys)[keyof typeof buttonVariantKeys];

export function getButtonVariant(
    variant: ButtonVariantKey,
    text?: string,
    iconName?: IconName,
): ButtonVariantKey {
    const hasText = !!text;
    const hasIcon = !!iconName;

    if (!hasText && hasIcon) return buttonVariantKeys.icon;

    return variant;
}

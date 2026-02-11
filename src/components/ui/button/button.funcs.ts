import { ButtonVariantKey, buttonVariantKeys } from "@/enums/ui/button-variant-key";
import { IconName } from "@/enums/ui/icon-name";

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

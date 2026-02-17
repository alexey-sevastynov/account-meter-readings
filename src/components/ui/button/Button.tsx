import { ButtonHTMLAttributes } from "react";
import { ClipLoader } from "react-spinners";
import { cn } from "@/lib/cn";
import { ButtonVariantKey, buttonVariantKeys } from "@/enums/ui/button-variant-key";
import { IconName } from "@/enums/ui/icon-name";
import { MrIcon } from "@/components/ui/icon/Icon";
import { IconColor, iconColors } from "@/enums/ui/icon-color";
import { getButtonVariant } from "@/components/ui/button/button.funcs";

interface ButtonWithText {
    text: string;
    iconName?: IconName;
    iconColor?: IconColor;
}

interface ButtonIconOnly {
    text?: undefined;
    iconName: IconName;
    iconColor?: IconColor;
}

type MrButtonProps = (ButtonWithText | ButtonIconOnly) & {
    variant?: ButtonVariantKey;
    loading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const baseStyles = `h-12 px-4 py-2 gap-2 flex items-center justify-center font-medium rounded-xl 
transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-0 cursor-pointer`;

const variants: Record<ButtonVariantKey, string> = {
    primary: `
        bg-primary text-primary-foreground
        hover:bg-primary/90
        active:bg-primary/80
    `,
    secondary: `
        bg-secondary text-secondary-foreground
        hover:bg-secondary/80
        active:bg-secondary/70
    `,
    outline: `
        border border-border
        text-foreground
        hover:bg-accent
        active:bg-accent/70
    `,
    danger: `
        bg-destructive text-white
        hover:bg-destructive/90
        active:bg-destructive/80
    `,
    link: `
        bg-transparent text-primary
        hover:underline
        active:opacity-70
    `,
    icon: "bg-transparent",
};

export function MrButton({
    text,
    iconName,
    iconColor,
    variant = buttonVariantKeys.primary,
    loading = false,
    className,
    ...props
}: MrButtonProps) {
    const hasText = !!text;
    const hasIcon = !!iconName;

    const buttonVariant = getButtonVariant(variant, text, iconName);

    return (
        <button
            className={cn(baseStyles, variants[buttonVariant], className)}
            disabled={loading || props.disabled}
            {...props}
        >
            {hasIcon && !loading && (
                <MrIcon name={iconName!} color={iconColor ?? iconColors.primaryForeground} />
            )}
            {loading && <ClipLoader size={20} color={iconColors.primary} />}
            {hasText && !loading && <span>{text}</span>}
        </button>
    );
}

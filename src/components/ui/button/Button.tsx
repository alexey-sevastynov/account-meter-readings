import { ButtonHTMLAttributes } from "react";
import { ClipLoader } from "react-spinners";
import { cn } from "@/lib/cn";
import { ButtonVariantKey, buttonVariantKeys } from "@/enums/ui/button-variant-key";
import { IconName } from "@/enums/ui/icon-name";
import { MrIcon } from "@/components/ui/icon/Icon";
import { ColorName, colorNames } from "@/enums/ui/color-name";
import { getButtonVariant } from "@/components/ui/button/button.funcs";

interface ButtonWithText {
    text: string;
    iconName?: IconName;
    iconColor?: ColorName;
}

interface ButtonIconOnly {
    text?: undefined;
    iconName: IconName;
    iconColor?: ColorName;
}

type MrButtonProps = (ButtonWithText | ButtonIconOnly) & {
    variant?: ButtonVariantKey;
    loading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const baseStyles = `h-12 px-4 py-2 gap-2 flex items-center justify-center font-medium rounded-xl 
transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-0 cursor-pointer`;

const variants: Record<ButtonVariantKey, string> = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400",
    outline: "border border-gray-300 text-gray-800 hover:bg-gray-100 focus:ring-gray-400",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
    link: "bg-transparent text-blue-600 hover:underline focus:ring-0",
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
            {hasIcon && !loading && <MrIcon name={iconName!} color={iconColor ?? colorNames.white} />}
            {loading && <ClipLoader size={20} color={colorNames.white} />}
            {hasText && !loading && <span>{text}</span>}
        </button>
    );
}

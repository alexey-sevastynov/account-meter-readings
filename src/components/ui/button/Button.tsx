import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";
import { ButtonVariantKey, buttonVariantKeys } from "@/enums/ui/button-variant-key";

interface MrButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    variant?: ButtonVariantKey;
}

const baseStyles =
    "h-12 px-4 py-2 rounded-xl font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-0 focus:ring-offset-0 cursor-pointer";

const variants: Record<ButtonVariantKey, string> = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400",
    outline: "border border-gray-300 text-gray-800 hover:bg-gray-100 focus:ring-gray-400",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
    link: "bg-transparent text-blue-600 hover:underline focus:ring-0 focus:ring-offset-0",
};

export function MrButton({ text, variant = buttonVariantKeys.primary, className, ...props }: MrButtonProps) {
    return (
        <button className={cn(baseStyles, variants[variant], className)} {...props}>
            {text}
        </button>
    );
}
